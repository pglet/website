---
title: Bash tutorial
sidebar_label: Bash
slug: bash
---

Bash can be used to build standalone web apps and dashboards or add web UI to existing scripts, jobs.

Requirements:

* Bash, Zsh on Linux or macOS. Windows is not supported.

## Installing `pglet.sh`

`pglet.sh` script contains Bash functions to work with Pglet and could be dot-sourced in your scripts using Pglet.

To download `pglet.sh` run the following command:

```bash
curl -O https://pglet.io/pglet.sh
```

During the first run of `pglet.sh` Pglet binary will be downloaded to `$HOME/.pglet/bin` directory.

If you want to install Pglet binary into a custom directory you can define `PGLET_INSTALL_DIR` environment variable. For example to install Pglet binary to `/usr/local/bin` directory run:

```bash
export PGLET_INSTALL_DIR=/usr/local/bin && sudo bash pglet.sh
```

:::note
Custom installation directory must be in `$PATH`.
:::

## Creating a page

Pglet allows you creating **shared** and **app** pages.

**Shared page** is like a singleton: many programs can connect and author the same page and all web users connecting to a page see and interact with the same content. Shared pages are useful for developing local tools, web dashboards, progress reports, distributed processes visualization, etc. 

**App page** creates for each web user a new session with its own content. In your program you define a "handler" method which is invoked for every new session. App pages are used for creating multi-user web apps.

OK, this is a minimal "Hello world" Pglet page running in a local mode:

```bash title="hello.sh"
. pglet.sh

pglet_page
pglet_send "add text value='Hello, world!'"
```

When you run this script a new browser window should popup with the greeting:

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>

`pglet_page` function creates a page, if it doesn't exist, with `hello` name and opens connection. An opened connection ID is stored in a `PGLET_CONNECTION_ID` variable.

`pglet_send` cmdlet sends [commands](/docs/reference/protocol#command-messages) to open Pglet connection. You use [add](/docs/reference/protocol/commands/add), [set](/docs/reference/protocol/commands/set), [get](/docs/reference/protocol/commands/get), [clean](/docs/reference/protocol/commands/clean) and [remove](/docs/reference/protocol/commands/remove) commands to update and query page contents.

An app won't wait for any input and should exit. Now, if you run the same `hello.sh` script for the second time another "Hello, world!" message will be added to the page. This is because the page is stateful. Its contents can be updated at any time by any number of scripts, multiple scripts can connect and update the same page simultanously.

If you need a clean page on every start of the program use `clean` command:

```bash {4} title="hello.sh"
. pglet.sh

pglet_page
pglet_send "clean"
pglet_send "add text value='Hello, world!'"
```

## Getting user input

Pglet provides a number of [controls](/docs/controls) for building forms: [Textbox](/docs/controls/textbox), [Checkbox](/docs/controls/checkbox), [Dropdown](/docs/controls/dropdown), [Button](/docs/controls/button).

Let's ask a user for a name:

```bash title="greeter.sh"
. pglet.sh

pglet_page "index"

pglet_send "clean"
pglet_send "add textbox label='Your name' description='Please provide your full name'"
pglet_send "add button primary text='Say hello'"
```

## Handling events

When you click "Say hello" button on the form above nothing will happen in our program though `Button` control itself emits "click" event each time it's pressed/clicked. The event is just not handled.

In Bash you use event loop to handle control events.

### Event loop

Once the form is rendered use `pglet_wait_event` function in a loop to receive all page events triggered by a user:

```bash title="greeter.sh"
. pglet.sh

pglet_page "index"

pglet_send "clean"
txt_name=`pglet_send "add textbox label='Your name' description='Please provide your full name'"`
btn_hello=`pglet_send "add button primary text='Say hello'"`

while true
do
    pglet_wait_event
    if [[ "$PGLET_EVENT_TARGET" == $btn_hello && "$PGLET_EVENT_NAME" == "click" ]]; then
        name=`pglet_send "get $txt_name value"`
        pglet_send "clean page"
        pglet_send "add text value='Hello, $name!'"
        pglet_send "add text value='Close browser window to exit the program...'"
        break
    fi
done
```

Notice how IDs of the added textbox and button are saved, so we can refer to these controls later.

`pglet_wait_event` stores event details into `PGLET_EVENT_TARGET`, `PGLET_EVENT_NAME` and `PGLET_EVENT_DATA` variables. We are interested in `click` events coming from the button (`PGLET_EVENT_TARGET` is control's ID). Next, we use `get` command to read `value` property of textbox control, `clean` the page, output greeting and leave the program.

## Multi-user apps

In multi-user Pglet apps every user has a unique session with its own page contents. To start an app page you use `pglet_app` function which takes a reference to a session handling function. The handler function is called in a new sub-shell for every new user connected. The program stays blocked on `pglet_app` while constantly waiting for new user connections.

Below is a minimal Pglet multi-user app in Bash:

```bash title="hello-app.sh"
. pglet.sh

function main() {
  pglet_send "clean"
  pglet_send "add text value='Hello, world!'"
}

pglet_app "hello-app" main
```

Now, a multi-user version of greeter app could look like the following:

```bash title="greeter-app.sh"
. pglet.sh

function main() {
    pglet_send "clean"
    txt_name=`pglet_send "add textbox label='Your name' description='Please provide your full name'"`
    btn_hello=`pglet_send "add button primary text='Say hello'"`

    while true
    do
        pglet_wait_event
        if [[ "$PGLET_EVENT_TARGET" == $btn_hello && "$PGLET_EVENT_NAME" == "click" ]]; then
            name=`pglet_send "get $txt_name value"`
            pglet_send "clean page"
            pglet_send "add text value='Hello, $name!'"
            break
        fi
    done
}

pglet_app "greeter-app" main
```

## Getting apps and pages to the Web

Up until this moment you've been running all tutotial samples on your computer with a local Pglet server instance running in the background.

With literarily no changes to the code Pglet allows to make your program accessible from the web. This could be an admin app for managing backend services, or a dashboard with server metrics, or an application prototype you are sharing with your colleagues or clients.

In contrast to a classic deployment you are not packaging your program and it's not going anywhere. It continues to run on the same computer where it was built or cloned while UI is "streamed" to [Pglet service](/docs/pglet-service) and available via `https://app.pglet.io/public/{your-app-name}` URL.

So, to make your greeter app available on the web add `PGLET_WEB=true` variable before either 'pglet_page` or `pglet_app` call:

```bash
PGLET_WEB=true pglet_app "greeter-app" main
```

As it's going to a public service the page name must be unique. One way is to prepend page name with "account" or "namespace", for example:

```bash
PGLET_WEB=true pglet_app "john/greeter-app" main
```

or just omit page name, so it will be randomly generated. Look at [this article](/docs/pglet-service) to understand how page naming works.

## Escaping command parameters

Pglet command must be written in a single line, therefore new line symbols (`CR`) must be replaced with `\n`. If a command argument value contains spaces it must be surrounded with single or double quotes.

For example, you want to add a new `text` control with the following contents having new lines, single and double quotes:

```
Line 1
Line's 2
Line "3"
```

Command should look like:

```bash
pglet_add "text pre value=\"Line 1\nLine's 2\nLine \\\"3\\\"\""
```

Notice, new lines `{CR}` are replaced with `\n`, double quotes `"` replaced with `\"`.

The value in double quotes can have unescaped single quotes inside and vice versa, for example:

```bash
text value='something in "double quotes"'
```

or

```bash
text value="let's try a single 'quotes' inside"
```

`pglet.sh` includes helper functions to help you with strings escaping:

* [`escape_sq_str()`](#escape_sq_str) - takes string in `$1` argument and escapes new lines and single quotes.
* [`escape_dq_str()`](#escape_dq_str) - takes string in `$1` argument and escapes new lines and double quotes.
* [`escape_sq_cmd()`](#escape_sq_cmd) - takes command with arguments, runs it and escapes new lines and single quotes in command result.
* [`escape_dq_cmd()`](#escape_dq_cmd) - takes command with arguments, runs it and escapes new lines and double quotes in command result.

Example 1:

```bash
function main() {
  local t=$(escape_sq_cmd curl http://echo.jsontest.com/key/value/one/two)
  pglet_send "add text pre value='$t'"
}
pglet_app "index" "main"
```

Example 2:

```bash
function main() {
  local t2=$(escape_dq_str $(curl -s http://echo.jsontest.com/key/value/one/two | jq '.one'))
  pglet_add "text pre value=\"$t2\""
}
pglet_app "index" "main"
```

## `pglet.sh` reference

### `pglet_page`

Creates a shared page if not exists and opens a new connection.

Parameters:

* `$1` (optional) - the name of Pglet page. Random name will be generated if this parameter left blank.

Variables:

* `PGLET_WEB=true` - makes the app available as public at pglet.io service or a self-hosted Pglet server.
* `PGLET_SERVER=<url>` - connects to the app on a self-hosted Pglet server.
* `PGLET_TOKEN=<token>` - authentication token for pglet.io service or a self-hosted Pglet server.
* `PGLET_NO_WINDOW=true` - do not open browser window.

### `pglet_app`

Creates an application page if not exists and opens a new connection.

Parameters:

* `$1` (optional) - the name of Pglet page. Random name will be generated if this parameter left blank.
* `$2` - session handler function.

Variables:

* `PGLET_WEB=true` - makes the app available as public at pglet.io service or a self-hosted Pglet server.
* `PGLET_SERVER=<url>` - connects to the app on a self-hosted Pglet server.
* `PGLET_TOKEN=<token>` - authentication token for pglet.io service or a self-hosted Pglet server.
* `PGLET_NO_WINDOW=true` - do not open browser window.

### `pglet_send`

Sends [commands](/docs/reference/protocol#command-messages) to a Pglet connection.

Parameters:

* `$1` - command text or connection ID.
* `$2` (optional) - command text (if connection ID is specified in `$1`).

For example, setting page title:

```bash
pglet_send "set page title='My app'"
```

### `pglet_wait_event`

Blocks until a user generated event is received.

Stores event details into the following variables:

* `PGLET_EVENT_TARGET` - ID of control triggered event.
* `PGLET_EVENT_NAME` - event name, for example "click".
* `PGLET_EVENT_DATA` - additional data attached to the event. Button control has `data` property which supplies additional event data.

### `pglet_add`

Shortcut for `add` command, for example:

```bash
pglet_add "button text=OK"
```

### `pglet_set`

Shortcut for `set` command, for example:

```bash
pglet_set "page title='My app'"
```

### `pglet_set_value`

Updates `value` property of a control, for example:

```bash
pglet_set_value "progress1" "10"
```

### `pglet_get_value`

Reads `value` property of a control, for example:

```bash
name=`pglet_get_value "txt_name"`
```

### `pglet_show`

Sets `visible` property of a control to `true`, for example:

```bash
pglet_show "stack_buttons"
```

### `pglet_hide`

Sets `visible` property of a control to `false`, for example:

```bash
pglet_hide "stack_buttons"
```

### `pglet_enable`

Sets `disabled` property of a control to `false`, for example:

```bash
pglet_enable "stack_buttons"
```

### `pglet_disable`

Sets `disabled` property of a control to `true`, for example:

```bash
pglet_disable "stack_buttons"
```

### `pglet_clean`

Cleans children collection of a control, but leaves control itself.

For example, to clean the contents of the entire page:

```bash
pglet_clean page
```

### `pglet_remove`

Removes a control and all its children, for example:

```bash
pglet_remove footer
```

### `escape_sq_str`

Takes string in `$1` argument and escapes new lines and single quotes.

For example, running the following script:

```bash
s='{
   "one": "two",
   "key": "value"
}'
escape_sq_str "$s"
```

will output:

```
{\n "one": "two",\n "key": "value"\n}
```

### `escape_dq_str`

Takes string in `$1` argument and escapes new lines and double quotes.

For example, running the following script:

```bash
s='{
   "one": "two",
   "key": "value"
}'
escape_dq_str "$s"
```

will output:

```
{\n \"one\": \"two\",\n \"key\": \"value\"\n}
```

### `escape_sq_cmd`

Executes command `$@` and then escapes new lines and single quotes in the command result.

For example, running the following script:

```bash
escape_sq_cmd curl -s http://echo.jsontest.com/key/value/one/two
```

will output:

```
{\n "one": "two",\n "key": "value"\n}
```

### `escape_dq_cmd`

Executes command `$@` and then escapes new lines and double quotes in the command result.

For example, running the following script:

```bash
escape_dq_cmd curl -s http://echo.jsontest.com/key/value/one/two
```

will output:

```
{\n \"one\": \"two\",\n \"key\": \"value\"\n}
```
