---
title: JavaScript tutorial
sidebar_label: JavaScript
slug: javascript
---

Node.js can be used to build standalone web apps and dashboards or add web UI to existing scripts, jobs.

## Installing `pglet` module

Requirements:

* Node 8 or above on Windows, Linux or macOS

To install `pglet` module run the following command:

```bash
npm install pglet
```

## Creating a page

Pglet allows you creating **shared** and **app** pages.

**Shared page** is like a singleton: many programs can connect and author the same page and all web users connecting to a page see and interact with the same content. Shared pages are useful for developing local tools, web dashboards, progress reports, distributed processes visualization, etc. 

**App page** creates for each web user a new session with its own content. In your program you define a "handler" method which is invoked for every new session. App pages are used for creating multi-user web apps.

OK, this is a minimal "Hello world" Pglet page running in a local mode:

```javascript title="hello.js"
const pglet = require("pglet");

(async () => {
    let p = await pglet.page("hello");
    await p.send("add text value='Hello, world!'");
})();
```

When you run this app a new browser window should popup with the greeting:

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>

A Node app won't wait for any input and should exit. Now, if you run the same `hello.js` script for the second time another "Hello, world!" message will be added to the page. This is because the page is stateful. Its contents can be updated at any time by any number of scripts, multiple scripts can connect and update the same page simultanously.

If you need a clean page on every start of the program use connection's `clean()` method:

```javascript
await p.send("clean");
await p.send("add text value='Hello, world!'");
```

## Getting user input

Pglet provides a number of controls for building forms: [Textbox](/docs/reference/controls/textbox), [Checkbox](/docs/reference/controls/checkbox), [Dropdown](/docs/reference/controls/dropdown), [Button](/docs/reference/controls/button).

Let's ask a user for a name:

```javascript title="greeter.js"
const pglet = require("pglet");

(async () => {
    let p = await pglet.page("greeter");
    let txt_name = await p.send("add textbox label='Your name' description='Please provide your full name'");
    let btn_hello = await p.send("add button primary text='Say hello'");
})();
```

## Handling events

When you click "Say hello" button on the form above nothing will happen in our program though `Button` control itself emits "click" event each time it's pressed/clicked. The event is just not handled.

In Node.js Pglet app you use event loop to handle control events.

### Event loop

Once the form is rendered use `await p.waitEvent()` method in a loop to receive all page events triggered by a user:

```javascript title="greeter.js"
const pglet = require("pglet");

(async () => {
    let p = await pglet.page("greeter");

    let txt_name = await p.send("add textbox label='Your name' description='Please provide your full name'");
    let btn_hello = await p.send("add button primary text='Say hello'");
    
    while(true) {
        const e = await p.waitEvent();
        if (e.target === btn_hello && e.name === 'click') {
            let name = await p.send(`get ${txt_name} value`);
            await p.send("clean page");
            await p.send(`add text value='Hello, ${name}!'`);
        }
    }
})();
```

Notice how IDs of the added textbox and button are saved, so we can refer to these controls later.

`waitEvent()` returns [Event](#event-class) object and we are interested in `click` events coming from the button (`e.target` is control's ID). Next, we use `get` command to read `value` property of textbox control, `clean` the page, output greeting and leave the program.

## Multi-user apps

In multi-user Pglet apps every user has a unique session with its own page contents. To start an app page you use `pglet.app()` method which takes a reference to a session handler function. The handler function is called for every new user connected with connection object in parameters. The program stays blocked on `pglet.app()` while constantly waiting for new user connections.

This could be a minimal Pglet multi-user app in Node.js:

```javascript title="hello-app.js"
const pglet = require("pglet");

(async () => {
    await pglet.app("hello-app", async (p) => {

        await p.send("clean");
        await p.send("add text value='Hello, world!'");
    });

    process.stdin.resume();
})();
```

Now, a multi-user version of greeter app could look like the following:

```javascript title="greeter-app.js"
const pglet = require("pglet");

(async () => {

    // start a new session for every user visit
    await pglet.app("greeter-app", async (p) => {

        // add textbox and a button
        let txt_name = await p.send("add textbox label='Your name' description='Please provide your full name'");
        let btn_hello = await p.send("add button primary text='Say hello'");
        
        while(true) {
            // wait until button is clicked
            const e = await p.waitEvent();
            if (e.target === btn_hello && e.name === 'click') {

                // get the entered value of a textbox
                let name = await p.send(`get ${txt_name} value`);

                // clean the page and output the greeting
                await p.send("clean page");
                await p.send(`add text value='Hello, ${name}!'`);
            }
        }
    });

    process.stdin.resume();
})();
```

## Getting apps and pages to the Web

Up until this moment you've been running all tutotial samples on your computer with a local Pglet server instance running in the background.

With literarily no changes to the code Pglet allows to make your program accessible from the web. This could be an admin app for managing backend services, or a dashboard with server metrics, or an application prototype you are sharing with your colleagues or clients.

In contrast to a classic deployment you are not packaging your program and it's not going anywhere. It continues to run on the same computer where it was built or cloned while UI is "streamed" to [Pglet service](/docs/pglet-service) and available via `https://app.pglet.io/public/{your-app-name}` URL.

So, to make your greeter app available on the web add `{web: true}` options to either `pglet.page()` or `pglet.app()` call:

```javascript
await pglet.app("greeter-app", {web: true}, async (p) => { /* ... */ })
```

As it's going to a public service the page name must be unique. One way is to prepend page name with "account" or "namespace", for example:

```javascript
await pglet.app("john/greeter-app", {web: true}, async (p) => { /* ... */ })
```

or just omit page name, so it will be randomly generated. Look at [this article](/docs/pglet-service) to understand how page naming works.

## `pglet` module reference

### `page` function

`pglet.page(name, options)`

Creates a shared page if not exists and returns a [connection](#connection-class) to it.

Parameters:

* `name` - the name of app in the form `{account}/{page_name}`. The name will be auto-generated if left blank.
* `options` - app creation options object with the following properties:
  * `web` (bool) - make app UI available on the web.
  * `noWindow` (bool) - do not open browser window.
  * `server` (string) - URL of the self-hosted Pglet server to run the app on.
  * `token` (string) - authentication token for self-hosted server.

### `app` function

`pglet.app(name, options, sessionCallback)`

Creates an app page with a session handler function defined by `sessionCallback` parameter and starts waiting for new user connections.
Handler function is called for every new session with [connection](#connection-class) passed into handler.

Parameters:

* `name` - the name of app in the form `{account}/{page_name}`. The name will be auto-generated if left blank.
* `options` - app creation options object with the following properties:
  * `web` (bool) - make app UI available on the web.
  * `noWindow` (bool) - do not open browser window.
  * `server` (string) - URL of the self-hosted Pglet server to run the app on.
  * `token` (string) - authentication token for self-hosted server.
* `sessionCallback` - callback function for handling a session. [Connection](#connection-class) is passed as an argument.

### `Connection` class

Represents a connection to a page or session. `Connection` provides methods for adding, modifying, querying and removing controls on a web page.

#### `send(command)`

Sends a raw command to Pglet server via [Pglet protocol](/docs/reference/protocol).

For example, to update `errorMessage` property of textbox with ID `number`:

```javascript
await page.send("set number errorMessage='Some error message'")
```

#### `waitEvent()`

Blocks until an event triggered by a user received. The method returns an instance of [Event](#event-class) class.

For example, reading events in a loop until any button clicked:

```javascript
while(true) {
  let e = await page.waitEvent()
  if e.name === 'click' {
    break
  }
}
```

### `Event` class

Describes the details of event returned by `waitEvent()` method and has the following properties:

* `target` - ID of control triggered event.
* `name` - event name, for example "click".
* `data` - additional data attached to the event. Button control has `data` property which supplies additional event data.