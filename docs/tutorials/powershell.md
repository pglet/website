---
title: Creating web apps in PowerShell with Pglet
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
} finally {
  $page1.Close()
  $page2.Close()
}
```

:::note
All code examples below will be assuming that you put them into `try...finally` wrapper:

```powershell
Import-Module pglet
$page = Connect-PgletPage -Name "myapp"

try {
  $page.Clean()

  # Insert example code here

} finally {
  $page.Close()
}
```
:::

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

You can update control properties and push the changes again:

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

for($i = 0; $i -le 50; $i++) {
  $text.Value = "Radius $i"
  $text.BorderRadius = $i
  $page.Update()
  Start-Sleep -Milliseconds 50
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

### Markdown

`Text` control is able to display markdown rich contents if `-Markdown` parameter is added/enabled, for example:

````powershell
$t = Text -Markdown -Value '# Using Markdown with Pglet

You can add `-Markdown` parameter to `Text` cmdlet
to output **rich** *text*.

[GitHaub Flavored Markdown](https://github.github.com/gfm/) is supported.

This is a code snippet:

```
import Pglet
```
'
$page.Add($t)
````

### HTML

You can use `Html` control to add raw HTML to the page if absolutely required:

```powershell
$html = Html -Value '<h1>Hello, world!</h1>
<p>This is a test paragraph with a <a href="https://pglet.io">link</a>.</p>'
$page.Add($html)
```

### Progress

Use `Progress` control to display a progress bar. For example, to display a progress of imaginary copy operation:

```powershell
$prog1 = Progress -Label "Copying /file1.txt to /file2.txt" -Width "30%" -BarHeight 4
$page.Add($prog1)

for($i = 0; $i -le 100; $i=$i+5) {
  $prog1.Value = $i
  $prog1.Update()
  Start-Sleep -Milliseconds 100
}
```

<div style={{textAlign: 'center'}}><img src="/img/docs/powershell-tutorial/progress-copy.gif" /></div>

You can use `Description` property to display the progress of some multi-step operation:

```powershell
$prog2 = Progress -Label "Create new account" -Width "30%"
$page.Add($prog2)

$steps = @('Preparing environment...', 'Collecting information...', 'Performing operation...', 'Complete!')
for($i = 0; $i -lt $steps.Length; $i++) {
    $prog2.Description = $steps[$i]
    $prog2.Value = 100 / ($steps.Length - 1) * $i
    $page.Update()
    Start-Sleep -Seconds 1
}
```

<div style={{textAlign: 'center'}}><img src="/img/docs/powershell-tutorial/progress-multi-step.gif" /></div>

### Spinner

Use `Spinner` control to visualize an indeterminate progress:

```powershell
$sp = Spinner -Label "Please wait while the process is running..." -LabelPosition Right
$page.Add($sp)
```

<div style={{textAlign: 'center'}}><img src="/img/docs/powershell-tutorial/spinner-animation.gif" /></div>

## Getting user input

Making interactive web apps with Pglet is a breeze! It's not just limited to displaying data, but you can request an input from a user and respond to various events generated by page controls.

### Button

`Button` is the most essential input control which generates `click` event when pressed:

```powershell
$btn = Button "Click me!"
$page.Add($btn)
```

[SCREENSHOT?]

All events generated by controls on a web page are continuously sent back to your script, so how do you respond to a button click?

### Waiting for events

Linear program:

1. Wait for input.
2. Process data.
3. Display results.
4. Rinse, repeat.

Waiting for the next event with `Wait-PgletEvent`:

```powershell
$btn = Button -Text "Click me!"
$page.Add($btn)
Wait-PgletEvent
```

Output:

```
Control : Pglet.PowerShell.Controls.PsButton
Page    : Pglet.PowerShell.Controls.PsPage
Target  : _30
Name    : click
Data    : 
```

TBD - describe event object

### Event handlers

"Counter" app with `Switch-PgletEvents`:

```powershell
Import-Module pglet
$page = Connect-PgletPage -Name "counter"

try {
    $page.Clean()

    $num_txt = TextBox -Value 0

    $minus_btn = Button "-" -OnClick {
      $num_txt.Value = [int]$num_txt.Value - 1
      $page.Update()
    }
  
    $plus_btn = Button "+" -OnClick {
      $num_txt.Value = [int]$num_txt.Value + 1
      $page.Update()
    }
  
    $page.Add((Stack -Horizontal -Controls @(
      $minus_btn
      $num_txt
      $plus_btn
    )))

    Switch-PgletEvents
}
finally {
    $page.Close()
}
```

### Textbox

Pglet provides a number of [controls](/docs/controls) for building forms: [Textbox](/docs/controls/textbox), [Checkbox](/docs/controls/checkbox), [Dropdown](/docs/controls/dropdown), [Button](/docs/controls/button).

Let's ask a user for a name:

```powershell title="greeter.ps1"
Import-Module pglet

Connect-PgletPage "greeter"

Invoke-Pglet "clean"
Invoke-Pglet "add textbox label='Your name' description='Please provide your full name'"
Invoke-Pglet "add button primary text='Say hello'"
```

### Checkbox

TBD

### Dropdown

TBD

## Grid

Grid with auto-generated columns displaying a list of `Hashtable` objects:

```powershell
$items = @(
  @{
    "First name" = "John"
    "Last name" = "Smith"
  }
  @{
    "First name" = "Alice"
    "Last name" = "Brown"
  }
)

$grid = Grid -Items $items
$page.Add($grid)
```

Grid with auto-generated columns displaying the results (`PSObject[]`) of PowerShell command:

```powershell
$items = Get-Command
$grid = Grid -Items $items
$page.Add($grid)
```

Grid with explicitly defined columns displaying a list of custom class instances:

```powershell
class Person {
    [string]$FirstName
    [string]$LastName
  
    Person($firstName, $lastName) {
        $this.FirstName = $firstName
        $this.LastName = $lastName
    }
}

$items = @(
    [Person]::new('John', 'Smith')
    [Person]::new('Alice', 'Brown')
)
$grid = Grid -Items $items -Columns @(
    GridColumn -Name "First name" -FieldName "FirstName" -Sortable "string"
    GridColumn -Name "Last name" -FieldName "LastName" -Sortable "string"
)
$page.Add($grid)
```

## Charts

TBD

## Layout

Stack...

## Multi-host dashboards

TBD

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