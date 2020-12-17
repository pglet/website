---
title: Python
sidebar_label: Python
slug: python
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Python 3.7 or higher is required to use Pglet library.

## Installing `pglet` module

Before installing `pglet` module make sure you have the latest versions of package management utilities:

<Tabs groupId="os" defaultValue="python" values={[
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

<Tabs groupId="os" defaultValue="python" values={[
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

**App page** creates a new session for each connected web user and in your program you define a "handler" method which is invoked for every new session. App pages are used for creating multi-user web apps.

OK, this is the minimal "Hello world" Pglet app working in local mode:

```python
# import pglet main module and Text control
import pglet
from pglet import Text

# Create a new page with name "page1" and open connection
page = pglet.page("page1")

# Add Text control to a page
page.add(Text(value="Hello, world!"))
```

When you run this app a new browser window should popup with the greeting:

[SCREENSHOT]

## Getting user input

Now, let's ask user for a name. 

## Multi-user apps

Minimalist template for Pglet multi-user app.

```python
import pglet
from pglet import Text

def main(page):
  page.add(Text(value="Hello, world!"))

pglet.app("app1", web=True, target=main)
```

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

#### close()

Not yet implemented.

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