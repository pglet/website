---
title: Python tutorial
sidebar_label: Python
slug: python
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Python 3.7 or higher is required to use Pglet library.

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
python -m pip install --upgrade pip setuptools wheel
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
python -m pip install pglet
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

```python title="greeter.py"
# import pglet main module and Text control
import pglet
from pglet import Text

# Create a new page with a random name and open a connection to it
p = pglet.page("greeter")

# Add Text control to a page
p.add(Text(value="Hello, world!"))
```

When you run this app a new browser window should popup with the greeting:

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>

A python app won't wait for any input and should exit. Now, if you run the same `greeter.py` script for the second time another "Hello, world!" message will be added to the page. This is because the page is stateful. Its contents can be updated at any time by any number of scripts, multiple scripts can connect and update the same page simultanously.

If you need a clean page any time you run your program use connection's `clean()` method:

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

When you click "Say hello" on the form above nothing will happen in our program though `Button` control itself emits "click" event each time it's pressed/clicked. The event is not handled.

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

`wait_event()` returns [Event](#event-class) object and we are interested in `click` the events coming from the button (`e.target` is control ID). Next, we use connection's `get_value()` method to read `value` property of textbox control, clean the page, output greeting and leave the program.

### Event handlers

Event loop approach is simple and straightforward, but can become bulky if there is a lot of events to handle. In Python programs Pglet controls can have event handlers which are just functions. Control Python classes use `on` prefix for naming event handlers. For example, if [Button](/docs/reference/controls/button) control has `click` event then in Python handler's name is `onclick`.

Let's re-write the greeter app to use event handler instead of event loop:

```python title="greeter.py"
import sys
import pglet
from pglet import Textbox, Button, Text

p = pglet.page("greeter")
p.clean()

def say_hello(e):
    name = p.get_value(txt_name)
    p.clean()
    p.add(Text(value=f'Hello, {name}!'))
    sys.exit()

txt_name = p.add(Textbox(label="Your name", description="Please provide your full name"))
p.add(Button(text="Say hello", primary=True, onclick=say_hello))

# wait until browser window is closed or page reloaded
p.wait_close()
```

## Multi-user apps

Minimalist template for Pglet multi-user app.

```python
import pglet
from pglet import Text

def main(page):
  page.add(Text(value="Hello, world!"))

pglet.app("app1", web=True, target=main)
```

## Naming pages

[TBD]

## Pushing apps and pages to the Web

We don't use a word "deploy", but rather "push"

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

#### add(*controls, to=None, at=None, fire_and_forget=False)

Add one or more controls to a page.

#### update(*controls, fire_and_forget=False)

Update one or more controls.

#### set_value(id_or_control, value, fire_and_forget=False)

TBD

#### get_value(id_or_control)

TBD

#### append_value(id_or_control, value, fire_and_forget=False)

TBD

#### show(*id_or_controls, fire_and_forget=False)

TBD

#### hide(*id_or_controls, fire_and_forget=False)

TBD

#### disable(*id_or_controls, fire_and_forget=False)

TBD

#### enable(*id_or_controls, fire_and_forget=False)

TBD

#### clean(*id_or_controls, at=None, fire_and_forget=False)

TBD

#### remove(*id_or_controls, at=None, fire_and_forget=False)

TBD

#### send(command)

TBD

#### wait_event()

TBD

#### wait_close()

TBD

### `Event` class

[TBD]

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