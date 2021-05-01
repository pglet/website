---
slug: web-app-to-run-powershell-commands-on-a-computer-from-anywhere
title: Web app to run PowerShell commands on a computer from anywhere
author: Feodor Fitsner
author_title: Pglet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [examples]
---

:::info
After publishing this post on [Reddit PowerShell community](https://www.reddit.com/r/PowerShell/comments/n22dzm/i_wrote_a_script_that_allows_running_powershell/) we received great feedback about security. Currently Pglet service is in preview and is not recommended for use in production. We are working on built-in authentication/authorization functionality at the moment. It's going to be "Login with GitHub/Google/Microsoft" OAuth at first plus OpenID for any other providers.
:::

Normally, to access computer via PowerShell you need to configure PowerShell remoting, open WinRM ports on firewall and, the most unpleasant part, add NAT rule on your router to expose a computer to the entire Internet.

So, how can I securely make a web UI for my script without any port opened on the firewall? I used Pglet - a free open-source service for adding remote UI to your scripts. Pglet acts as a relay between your script and a web browser. Your script "dials" the service and sends UI state updates while web users receive live page updates via WebSockets. Kind of Phoenix LiveView for PowerShell :)

To run the app you need to install [pglet module](https://www.powershellgallery.com/packages/pglet):

```
Install-Module pglet -Scope CurrentUser -Force
```

The module works on Windows PowerShell on Windows 10 and PowerShell Core 6+ on Windows, Linux and Mac.

Here is how the app looks like:

<div style={{textAlign: 'center'}}><img src="/img/blog/remote-powershell/remote-powershell-console.png" width="70%" /></div>

Below is the entire program ([GitHub](https://github.com/pglet/examples/blob/main/powershell/remote-console/remote-console.ps1)):

```powershell
Import-Module pglet

Connect-PgletApp -Name "ps-console/*" -Web -ScriptBlock {
    $ErrorActionPreference = 'stop'

    $page = $PGLET_PAGE
    $page.Title = "PowerShell Remote Console"
    $page.HorizontalAlign = 'stretch'

    # Textbox with a command entered
    $cmd = TextBox -Placeholder "Type PowerShell command and click Run or press ENTER..." -Width '100%'

    # Event handler to call when "Run" button is clicked or Enter pressed
    $run_on_click = {
        $cmd_text = $cmd.value
        if ([string]::IsNullOrWhitespace($cmd_text)) {
            return
        }

        # disable textbox and Run button, add spinner while the command is evaluating
        $cmd.value = ''
        $command_panel.disabled = $true
        $results.controls.insert(0, (Text $cmd_text -BgColor 'neutralLight' -Padding 10))
        $results.controls.insert(1, (Spinner))
        $page.update()

        try {

            # run the command
            $result = Invoke-Expression $cmd_text

            # if result is Array present it as Grid; otherwise Text
            if ($result -is [System.Array]) {
                $result_control = Grid -Compact -Items $result
            } else {
                $result_control = Text -Value ($result | Out-String) -Pre -Padding 10
            }
        } catch {
            $result_control = Text -Value "$_" -Pre -Padding 10 -Color 'red'
        }

        # re-enable controls and replace spinner with the results
        $command_panel.disabled = $false
        $results.controls.removeAt(1)
        $results.controls.insert(1, $result_control)
        $page.update()
    }
    
    # container for command textbox and Run button
    $command_panel = Stack -Horizontal -OnSubmit $run_on_click -Controls @(
        $cmd
        Button -Text "Run" -Primary -Icon 'Play' -OnClick $run_on_click
    )

    # results container
    $results = Stack

    # "main" view combining all controls together
    $view = @(
        $command_panel
        Stack -Controls @(
            Stack -Horizontal -VerticalAlign Center -Controls @(
                Text 'Results' -Size large
                Button -Icon 'Clear' -Title 'Clear results' -OnClick {
                    $results.controls.clear()
                    $results.update()
                }
            )
            $results
        )
    )

    # display the "main" view onto the page
    $page.add($view)
}
```

In the program I used just a few Pglet controls: Textbox, Button, Spinner and Stack for the layout. Controls are organized into DOM and every time `page.update()` is called its state is sent to Pglet service.

When you run the script, a new random URL is generated for your app and printed to the console:

<div style={{textAlign: 'center'}}><img src="/img/blog/remote-powershell/windows-console-output.png" width="90%" /></div>

At the very top of the program there is main entry point for the app:

```powershell
Connect-PgletApp -Name "ps-console/*" -Web -ScriptBlock {
    ...
}
```

`-Name` parameter is a page URL and `*` means a randomly-generated string. You can add your own prefix to the random string or use another namespace, e.g. `my-pages/ps-example-*`.

If you want to tweak the app and test it locally, remove `-Web` parameter and a local Pglet server will be started. There is also [self-hosted Pglet server](https://pglet.io/docs/pglet-server/installation) if you need more control.

That's it! More great examples are coming!