---
title: PowerShell tutorial
sidebar_label: PowerShell
slug: powershell
---

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

You can use PowerShell to build standalone web apps or add web UI to existing scripts.

## Installing `pglet` module

Requirements:

* Windows PowerShell 5.1
* PowerShell Core 7 or above on Windows, Linux or macOS

To install `pglet` module run the following command in PowerShell session:

```powershell
Install-Module pglet
```

## Creating a page

```
    'installation',
    'connect-to-pglet',
    'displaying-data',
    'getting-user-input',
    'handling-events',
    'showing-progress',
    'security',
    'grids-and-lists',
    'charting',
    'theming',
    'deep-linking',
    'multi-user-apps',
    'local-development'
```

Pglet allows you creating **shared** and **app** pages.

**Shared page** is like a singleton: many programs can connect and author the same page and all web users connecting to a page see and interact with the same content. Shared pages are useful for developing local tools, web dashboards, progress reports, distributed processes visualization, etc. 

**App page** creates for each web user a new session with its own content. In your program you define a "handler" method which is invoked for every new session. App pages are used for creating multi-user web apps.

OK, this is a minimal "Hello world" Pglet page running in a local mode:

```powershell title="hello.ps1"
Import-Module pglet
Connect-PgletPage "hello"
Invoke-Pglet "add text value='Hello, world!'"
```

When you run this script a new browser window should popup with the greeting:

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>

`Connect-PgletPage` cmdlet creates a page, if it doesn't exist, with `greeter` name and opens connection. The cmdlet returns connection ID, but we don't need to save it for our example as the last opened connection ID is stored in the script context.

`Invoke-Pglet` cmdlet sends [commands](/docs/reference/protocol#command-messages) to open Pglet connection. You use [add](/docs/reference/protocol/commands/add), [set](/docs/reference/protocol/commands/set), [get](/docs/reference/protocol/commands/get), [clean](/docs/reference/protocol/commands/clean) and [remove](/docs/reference/protocol/commands/remove) commands to update and query page contents.

An app won't wait for any input and should exit. Now, if you run the same `greeter.ps1` script for the second time another "Hello, world!" message will be added to the page. This is because the page is stateful. Its contents can be updated at any time by any number of scripts, multiple scripts can connect and update the same page simultanously.

If you need a clean page on every start of the program use `clean` command:

```powershell {3}
Import-Module pglet
Connect-PgletPage "hello"
Invoke-Pglet "clean page"
Invoke-Pglet "add text value='Hello, world!'"
```

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

## Getting apps and pages to the Web

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

## `pglet` module reference

### `Connect-PgletApp` cmdlet

Creates an application page if not exists and opens a new connection.

Parameters:

* `Name` (optional) - the name of Pglet app. Random name will be generated if this parameter left blank.
* `ScriptBlock` - a handler script block for a new user session.
* `Web` (switch) - makes the app available as public at pglet.io service or a self-hosted Pglet server.
* `Server` (optional) - connects to the app on a self-hosted Pglet server.
* `Token` (optional) - authentication token for pglet.io service or a self-hosted Pglet server.
* `NoWindow` (switch) - do not open browser window.

### `Connect-PgletPage` cmdlet

Creates a shared page if not exists and opens a new connection.

Parameters:

* `Name` (optional) - the name of Pglet page. Random name will be generated if this parameter left blank.
* `Web` (switch) - makes the page available as public at pglet.io service or a self-hosted Pglet server.
* `Server` (optional) - connects to the page on a self-hosted Pglet server.
* `Token` (optional) - authentication token for pglet.io service or a self-hosted Pglet server.
* `NoWindow` (switch) - do not open browser window.

### `Invoke-Pglet` cmdlet

Sends [commands](/docs/reference/protocol#command-messages) to a Pglet connection.

Parameters:

* `Command` - command text.
* `Page` (optional) - connection ID to send command to. The last opened connection is used if not specified.

### `Wait-PgletEvent` cmdlet

Blocks until a user generated event is received.

Returns an object describing the event with the following properties:

* `Target` - ID of control triggered event.
* `Name` - event name, for example "click".
* `Data` - additional data attached to the event. Button control has `data` property which supplies additional event data.