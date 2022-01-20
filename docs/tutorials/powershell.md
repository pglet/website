---
title: PowerShell tutorial
sidebar_label: PowerShell
slug: powershell
---

<!--
* Introduction
* Quick "Hello, world!"
* Installation
* Connecting to Pglet
* Displaying data: Text, update text (current time)
* Showing progress
* Getting user input: textboxes, dialog, etc.
* Handling events
* Security
* Multi-user apps
* Grids and lists
* Charts
* Theming

Misc notes:

* what is new session
* how local variables are caught in event handlers
-->

You can use PowerShell to build standalone web apps or add web UI to existing scripts.

## Install `pglet` module

System requirements:

* Windows PowerShell 5.1
* PowerShell Core 7 or above on Windows, Linux or macOS

To install `pglet` module run the following command in PowerShell session:

```powershell
Install-Module pglet
```

## Create your first app

Create a new PowerShell script `app.ps1` with the following contents:

```powershell
Import-Module pglet
$page = Connect-PgletPage
$page.Add((Text -Value "Hello, world!"))
$page.Close()
```

When you run the script a new browser window will popup with "Hello, world!" text:

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>

`Connect-PgletPage` connects to a local instance of Pglet Server and creates a new page with a random URL. You can specify page name, so it has a permanent URL:

```powershell
$page = Connect-PgletPage -Name "my-app"
```

The line with `$page.Add` adds `Text` control to a page's `Controls` collection and sends page update to Pglet. `$page.Add()` is a shortcut for:

```powershell
$page.Controls.Add((Text -Value "Hello, world!"))
$page.Update()
```

It is important to call `$page.Close()` at the end of your script to close WebSocket connection to Pglet server. We recommend using `try...finally` pattern for guaranteed cleanup as `finally` block is called whenever you break the execution of the script with `CTRL+C`:

```powershell
Import-Module pglet
$page = Connect-PgletPage -Name "my-app"
try {
  # your code here
} finally {
  $page.Close()
}
```

:::note
If you run your script with `pwsh app.ps1` you can ommit `$page.Close()` as all connections are automatically closed on PowerShell session end.
:::

Now, try running `app.ps1` a few more times. You'll notice that a new "Hello, world!" text is added at the end of the page every time you run the script. This is because the contents of a page is persistent. You can clean the page at beginning of your script with `$page.Clean()`:

```powershell
Import-Module pglet
$page = Connect-PgletPage -Name "my-app"
try {
  $page.Clean()
  $page.Add((Text -Value (Get-Date)))
} finally {
  $page.Close()
}
```

Now, every run of the script above will replace page contents with the current date/time.

:::note
You can disable automatic browser opening with `-NoWindow` parameter:

```powershell
$page = Connect-PgletPage -Name "my-app" -NoWindow
```
:::

Multiple pages can be updated from the same script:

```powershell
Import-Module pglet
$page1 = Connect-PgletPage -Name "page-1"
$page2 = Connect-PgletPage -Name "page-2"

try {
  $page1.Clean()
  $page1.Add((Text -Value "Hello, page 1!"))

  $page2.Clean()
  $page2.Add((Text -Value "Hello, page 2!"))
} catch {
  $page1.Close()
  $page2.Close()
}
```

## Displaying data

### Text

`Text` control is used to output textual data. Its main properties are `Value` and `Size`, but it also has a number of formatting properties to control its appearence. For example:

```powershell
Text -Value 'Centered Text' -Size xlarge -Align Center -VerticalAlign Center -Width 100 -Height 100 `
     -Color 'White' -BgColor 'Salmon' -Padding 5 -Border '1px solid #555'
```

You create control with `Text` cmdlet, add it to `Controls` collection of `$page` (or children collection of other container control such as `Stack`) and then call `$page.Update()` to send local page changes to Pglet server:

```powershell
$txt = Text -Value "Hi there!"
$page.Controls.Add($txt)
$page.Update()
```

You can update control properties and send the changes again:

```powershell
$txt.Text = "Current date is: $(GetDate)"
$txt.Color = "Blue"
$page.Update()
```

You can even do some animations, for example:

```powershell
$text = Text -Value 'Centered Text' -Size xlarge -Align Center -VerticalAlign Center -Width 100 -Height 100 `
  -Color 'White' -BgColor 'Salmon' -Padding 5 -Border '1px solid #555'
$page.Add($text)

for($i = 0; $i -le 20; $i++) {
  $text.Value = "$($i)px"
  $text.BorderRadius = $i
  $page.Update()
  Start-Sleep -Milliseconds 100
}
```

<div style={{textAlign: 'center'}}><img src="/img/docs/powershell-tutorial/radius-animation.gif" /></div>

`$page.Update()` is smart enough to send only the changes made since its last call, so you can add a few new controls to the page, remove some of them, change control properties and then call `$page.Update()` to do batched update, for example:

```powershell
for($i = 0; $i -le 20; $i++) {
  $page.Controls.Add((Text "Line $i"))
  if ($i -gt 4) {
    $page.Controls.RemoveAt(0)
  }
  $page.Update()
  Start-Sleep -Milliseconds 300
}
```

<div style={{textAlign: 'center'}}><img src="/img/docs/powershell-tutorial/lines-animation.gif" /></div>

Text with markdown

HTML

Progress

Spinner

## Updating the same page from multiple scripts

## Getting user input

Pglet provides a number of [controls](/docs/controls) for building forms: [Textbox](/docs/controls/textbox), [Checkbox](/docs/controls/checkbox), [Dropdown](/docs/controls/dropdown), [Button](/docs/controls/button).

Let's ask a user for a name:

```powershell title="greeter.ps1"
Import-Module pglet

Connect-PgletPage "greeter"

Invoke-Pglet "clean"
Invoke-Pglet "add textbox label='Your name' description='Please provide your full name'"
Invoke-Pglet "add button primary text='Say hello'"
```

## Handling events

When you click "Say hello" button on the form above nothing will happen in our program though `Button` control itself emits "click" event each time it's pressed/clicked. The event is just not handled.

In PowerShell you use event loop to handle control events.

### Event loop

Once the form is rendered use `Wait-PgletEvent` cmdlet in a loop to receive all page events triggered by a user:

```powershell title="greeter.ps1"
Import-Module pglet

Connect-PgletPage "greeter"

Invoke-Pglet "clean"
$txt_name = Invoke-Pglet "add textbox label='Your name' description='Please provide your full name'"
$btn_hello = Invoke-Pglet "add button primary text='Say hello'"

while($true) {
  $e = Wait-PgletEvent
  if ($e.Target -eq $btn_hello -and $e.Name -eq 'click') {
    $name = Invoke-Pglet "get $txt_name value"
    Invoke-Pglet "clean page"
    Invoke-Pglet "add text value='Hello, $name!'"
    return
  }
}
```

Notice how IDs of the added textbox and button are saved, so we can refer to these controls later.

`Wait-PgletEvent` returns [Event](#event-class) object and we are interested in `click` events coming from the button (`e.Target` is control's ID). Next, we use `get` command to read `value` property of textbox control, `clean` the page, output greeting and leave the program.

## Grid

TBD

## Charts

TBD

## Layout

Stack...

## Multi-user apps

In multi-user Pglet apps every user has a unique session with its own page contents. To start an app page you use `Connect-PgletApp` cmdlet which takes a `ScriptBlock` with a session handler code. The handler script is called in a separate PowerShell Runspace for every new user connected. The program stays blocked on `Connect-PgletApp` while constantly waiting for new user connections.

Below is a minimal Pglet multi-user app in PowerShell:

```powershell title="hello-app.ps1"
Import-Module pglet

Connect-PgletApp -Name 'greeter-app' -ScriptBlock {
    Invoke-Pglet "add text value='Hello to connection $PGLET_CONNECTION_ID!'"
}
```

Now, a multi-user version of greeter app could look like the following:

```powershell title="greeter-app.ps1"
Import-Module pglet

Connect-PgletApp -Name 'greeter-app' -ScriptBlock {
  $txt_name = Invoke-Pglet "add textbox label='Your name' description='Please provide your full name'"
  $btn_hello = Invoke-Pglet "add button primary text='Say hello'"
  
  while($true) {
    $e = Wait-PgletEvent
    if ($e.Target -eq $btn_hello -and $e.Name -eq 'click') {
      $name = Invoke-Pglet "get $txt_name value"
      Invoke-Pglet "clean page"
      Invoke-Pglet "add text value='Hello, $name!'"
      return
    }
  }
}
```

## Publishing app

Up until this moment you've been running all tutotial samples on your computer with a local Pglet server instance running in the background.

With literarily no changes to the code Pglet allows to make your program accessible from the web. This could be an admin app for managing backend services, or a dashboard with server metrics, or an application prototype you are sharing with your colleagues or clients.

In contrast to a classic deployment you are not packaging your program and it's not going anywhere. It continues to run on the same computer where it was built or cloned while UI is "streamed" to [Pglet service](/docs/pglet-service) and available via `https://app.pglet.io/public/{your-app-name}` URL.

So, to make your greeter app available on the web add `-Web` parameter to either 'Connect-PgletPage` or `Connect-PgletApp` call:

```powershell
Connect-PgletApp -Name 'greeter-app' -Web -ScriptBlock { <# ... #> }
```

As it's going to a public service the page name must be unique. One way is to prepend page name with "account" or "namespace", for example:

```powershell
Connect-PgletApp -Name 'john/greeter-app' -Web -ScriptBlock { <# ... #> }
```

or just omit page name, so it will be randomly generated. Look at [this article](/docs/pglet-service) to understand how page naming works.