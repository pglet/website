---
title: Python tutorial
sidebar_label: Python
slug: python
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Python 3.7 or higher is required to build apps with Pglet.

## Installing `pglet` module

Before installing `pglet` module make sure you have the latest versions of package management utilities:

<Tabs groupId="os" defaultValue="macos" values={[
  { label: 'macOS', value: 'macos', },
  { label: 'Windows', value: 'windows', },
  { label: 'Linux', value: 'linux', },
]}>

<TabItem value="macos">

```bash
python3 -m pip install --upgrade pip setuptools wheel
```

</TabItem>

<TabItem value="windows">

```bash
pip install --upgrade pip setuptools wheel
```

</TabItem>

<TabItem value="linux">

```bash
python3 -m pip install --upgrade pip setuptools wheel
```

</TabItem>

</Tabs>

To install `pglet` module run the following command:

<Tabs groupId="os" defaultValue="macos" values={[
  { label: 'macOS', value: 'macos', },
  { label: 'Windows', value: 'windows', },
  { label: 'Linux', value: 'linux', },
]}>

<TabItem value="macos">

```bash
python3 -m pip install pglet
```

</TabItem>

<TabItem value="windows">

```bash
pip install pglet
```

</TabItem>

<TabItem value="linux">

```bash
python3 -m pip install pglet
```

</TabItem>

</Tabs>

## Creating a page

Pglet allows you creating **shared** and **app** pages.

**Shared page** is like a singleton: many programs can connect and author the same page and all web users connecting to a page see and interact with the same content. Shared pages are useful for developing local tools, web dashboards, progress reports, distributed processes visualization, etc. 

**App page** creates for each web user a new session with its own content. In your program you define a "handler" method which is invoked for every new session. App pages are used for creating multi-user web apps.

OK, this is a minimal "Hello world" Pglet page running in a local mode:

```python title="hello.py"
# import pglet main module and Text control
import pglet
from pglet import Text

# Create a new page with a random name and open a connection to it
p = pglet.page("hello")

# Add Text control to a page
p.add(Text(value="Hello, world!"))
```

When you run this app a new browser window should popup with the greeting:

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>

A Python app won't wait for any input and should exit. Now, if you run the same `greeter.py` script for the second time another "Hello, world!" message will be added to the page. This is because the page is stateful. Its contents can be updated at any time by any number of scripts, multiple scripts can connect and update the same page simultanously.

If you need a clean page on every start of the program use connection's `clean()` method:

```python
p.clean()
p.add(Text(value="Hello, world!"))
```

## Getting user input

Pglet provides a number of controls for building forms: [Textbox](/docs/reference/controls/textbox), [Checkbox](/docs/reference/controls/checkbox), [Dropdown](/docs/reference/controls/dropdown), [Button](/docs/reference/controls/button).

Let's ask a user for a name:

```python title="greeter.py"
import pglet
from pglet import Textbox, Button

p = pglet.page("greeter")

p.clean()
p.add(Textbox(label="Your name", description="Please provide your full name"))
p.add(Button(text="Say hello", primary=True))
```

## Handling events

When you click "Say hello" button on the form above nothing will happen in our program though `Button` control itself emits "click" event each time it's pressed/clicked. The event is just not handled.

There are two ways to handle control events:

* Event loop
* Control-specific event handlers

### Event loop

Once the form is rendered use connection's `wait_event()` blocking method in a loop to receive all page events triggered by a user:

```python title="greeter.py"
import pglet
from pglet import Textbox, Button, Text

p = pglet.page("greeter")

p.clean()
txt_name = p.add(Textbox(label="Your name", description="Please provide your full name"))
btn_hello = p.add(Button(text="Say hello", primary=True))

while True:
    e = p.wait_event()
    if e.target == btn_hello.id and e.name == 'click':
        name = p.get_value(txt_name)
        p.clean()
        p.add(Text(value=f'Hello, {name}!'))
        break
```

Notice how references to the added textbox and button are saved, so we can refer to the controls later.

`wait_event()` returns [Event](#event-class) object and we are interested in `click` events coming from the button (`e.target` is control ID). Next, we use connection's `get_value()` method to read `value` property of textbox control, clean the page, output greeting and leave the program.

### Event handlers

Event loop approach is simple and straightforward, but can become bulky if there is a lot of events to handle. In Python programs Pglet controls can have event handlers which are just functions. Control Python classes use `on` prefix for naming event handlers. For example, if [Button](/docs/reference/controls/button) control has `click` event then in Python handler's name is `onclick`.

Let's re-write the greeter app to use event handler instead of event loop:

```python title="greeter.py"
import sys
import pglet
from pglet import Textbox, Button, Text

p = pglet.page("greeter")
p.clean()

def say_hello_click(e):
    name = p.get_value(txt_name)
    p.clean()
    p.add(Text(value=f'Hello, {name}!'))
    sys.exit()

txt_name = p.add(Textbox(label="Your name", description="Please provide your full name"))
p.add(Button(text="Say hello", primary=True, onclick=say_hello_click))

# wait until browser window is closed or page reloaded
p.wait_close()
```

## Multi-user apps

In multi-user Pglet apps every user has a unique session with its own page contents. To start an app page you use `pglet.app()` method which takes a reference to a session handler function. The handler function is called on a separate thread for every new user connected. The program stays blocked on `pglet.app()` while constantly waiting for new user connections.

One of the aspects of multi-user apps you should care about is state management: session-specific variables and control references at minimum.

In the example below we are going to use Python class to encapsulate user session state and logic. This could be a minimal Pglet multi-user app in Python:

```python title="hello-app.py"
import pglet
from pglet import Text

class HelloWorldApp:
    def __init__(self, p):
        self.p = p
        self.main()
    
    def main(self):
        self.p.add(Text(value=f"Hello to session {self.p.conn_id}!"))

pglet.app("hello-app", target=HelloWorldApp)
```

We pass a reference to a `HelloWorldApp` class constructor as a `target` in `pglet.app` call. Every time a new user visits app URL `HelloWorldApp` constructor is called with connection `p` as a parameter and a new class instance created. In the constructor we save a reference to `p` for further work with session-specific page content and call `main()` method to output initial screen.

Now, a multi-user version of greeter app could look like the following:

```python title="greeter-app.py"
import pglet
from pglet import Textbox, Button, Text

class GreeterApp:
    def __init__(self, p):
        self.p = p
        self.main()
    
    def main(self):
        self.txt_name = self.p.add(Textbox(label="Your name", description="Please provide your full name"))
        self.p.add(Button(text="Say hello", primary=True, onclick=self.say_hello_click))

    def say_hello_click(self, e):
        name = self.p.get_value(self.txt_name)
        self.p.clean()
        self.p.add(Text(value=f'Hello, {name}!'))

pglet.app("greeter-app", target=GreeterApp)
```

## Getting apps and pages to the Web

Up until this moment you've been running all tutotial samples on your computer with a local Pglet server instance running in the background.

With literarily no changes to the code Pglet allows to make your program accessible from the web. This could be an admin app for managing backend services, or a dashboard with server metrics, or an application prototype you are sharing with your colleagues or clients.

In contrast to a classic deployment you are not packaging your program and it's not going anywhere. It continues to run on the same computer where it was built or cloned while UI is "streamed" to [Pglet service](/docs/pglet-service) and available via `https://app.pglet.io/public/{your-app-name}` URL.

So, to make your greeter app available on the web add `web=True` parameter to either `pglet.page()` or `pglet.app()` call:

```python
pglet.app("greeter-app", target=GreeterApp, web=True)
```

As it's going to a public service the page name must be unique. One way is to prepend page name with "account" or "namespace", for example:

```python
pglet.app("john/greeter-app", target=GreeterApp, web=True)
```

or just omit page name, so it will be randomly generated. Look at [this article](/docs/pglet-service) to understand how page naming works.

## `pglet` module reference

### `page` function

`pglet.page(name='', web=False, private=False, server='', token='', no_window=False)`

Creates a shared page if not exists and returns a [connection](#connection-class) to it.

The following example creates a new page with random name and connects to it:

```python
import pglet
from pglet import Text

page = pglet.page()
page.add(Text(value="Hello, world!"))
```

### `app` function

`pglet.app(name='', web=False, private=False, server='', token='', target=None, no_window=False)`

Creates an app page with a session handler function defined by `target` parameter and starts waiting for new user connections.
Handler function is called for every new session with [connection](#connection-class) passed into handler.

In the following example `main` function is called for every new user session and `page` argument is an instance of [`Connection`](#connection-class) class.

```python
def main(page):
  page.add(Text(value="Hello, world!"))

pglet.app("app1", web=True, target=main)
```

### `Connection` class

Represents a connection to a page or session. `Connection` provides methods for adding, modifying, querying and removing controls on a web page.

#### `add(*controls, to=None, at=None, fire_and_forget=False)`

Add one or more controls to a page.

* `controls` is one or more instances of [Control class](#control-classes).
* `to` is ID of the parent control. If `to` is not specified a control is added to a `page`.
* `at` allows inserting control into parent's children collection at specific index. If `at` is not specified a control is appended to children collection.
* `fire_and_forget` ignores the result of operation.

For example, inserting a text control at the top of stack control with `body` ID:

```python
page.add(Text(value="1st line"), to="body", at=0)
```

#### `update(*controls, fire_and_forget=False)`

Update one or more controls.

* `controls` is one or more instances of [Control class](#control-classes).
* `fire_and_forget` ignores the result of operation.

For example, adding and then updating a text control:

```python
# add Text control
txt = Text(value="One!")
page.add(txt)

# update control
txt.value = "Two!"
page.update(txt)
```

#### `set_value(id_or_control, value, fire_and_forget=False)`

Shortcut method to update `value` property of any control.

* `id_or_control` is either control ID or an instances of [Control class](#control-classes).
* `value` is a new value to set.
* `fire_and_forget` ignores the result of operation.

For example, updating the current value of progress bar with ID `prog1` to 50%:

```python
page.set_value('prog1', 50)
```

#### `get_value(id_or_control)`

Shortcut method to read `value` property of any control.

For example, reading the value entered into `first_name` textbox:

```python
first_name = page.get_value('first_name')
```

#### `append_value(id_or_control, value, fire_and_forget=False)`

Appends a string to `value` property of any control.

For example, appending a new line to a multiline textbox with ID `notes`:

```python
page.append("notes", "\nLine2")
```

#### `show(*id_or_controls, fire_and_forget=False)`

Shortcut method to set control's `visible` property to `true`.

#### `hide(*id_or_controls, fire_and_forget=False)`

Shortcut method to set control's `visible` property to `true`.

#### `disable(*id_or_controls, fire_and_forget=False)`

Shortcut method to set control's `disabled` property to `true`. By default, all controls are enabled.
`disabled` property is recursive meaning you can disable parent control to disable all its children.

For example, you may have a stack with two buttons and then while performing some operation you may disable both buttons by disabling a stack:

```python
footer = Stack(horizontal=True, controls=[
  Button(text="OK", primary=True),
  Button(text="Cancel")
])
page.add(footer)

# on click to OK
page.disable(footer) # disable stack and all its buttons
```

#### `enable(*id_or_controls, fire_and_forget=False)`

Shortcut method to set control's `disabled` property to `false`.

#### `clean(*id_or_controls, at=None, fire_and_forget=False)`

Cleans children collection of a control, but leaves control itself.

For example, to clean the contents of the entire page:

```python
page.clean()
```

#### `remove(*id_or_controls, at=None, fire_and_forget=False)`

Removes a control and all its children.

#### `send(command)`

Sends a raw command to Pglet server via [Pglet protocol](/docs/reference/protocol).
This method is useful when something is not yet implemented in Python library.

For example, to update `errorMessage` property of textbox with ID `number`:

```python
page.send("set number errorMessage='Some error message'")
```

#### `wait_event()`

Blocks until an event triggered by a user arrives. The method returns an instance of [Event](#event-class) class.

For example, reading events in a loop until any button clicked:

```python
while True:
    e = page.wait_event()
    if e.name == 'click':
        break
```

#### `wait_close()`

Blocks until browser window is closed or page reloaded.

### `Event` class

Describes the details of event returned by `wait_event()` method and has the following properties:

* `target` - ID of control triggered event.
* `name` - event name, for example "click".
* `data` - additional data attached to the event. Button control has `data` property which supplies additional event data.

### Control classes

* [`Page`](/docs/reference/controls/page)
* [`Stack`](/docs/reference/controls/stack)
* [`Text`](/docs/reference/controls/text)
* [`Textbox`](/docs/reference/controls/textbox)
* [`Button`](/docs/reference/controls/button)
* [`Checkbox`](/docs/reference/controls/checkbox)
* [`Dropdown`](/docs/reference/controls/dropdown)
* [`Progress`](/docs/reference/controls/progress)
* [`Spinner`](/docs/reference/controls/spinner)