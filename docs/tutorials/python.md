---
title: Create web app in Python with Pglet
sidebar_label: Python
slug: python
---

import { Replit } from '@site/src/components/replit';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this tutorial we will show step-by-step how to create a ToDo web app in Python using Pglet library and then share it on the internet. The app is under [100 lines of Python code](#) yet it is a multi-user, professionally looking full-featured web app:

<Replit src="https://Todo-web-app-in-Bash.pglet.repl.co" height="400px" />

We chose ToDo for the tutorial because it covers the most of concepts you would need to write any web app: building page layout, adding controls, working with lists, making reusable UI components and deploy options.

The tutorial consists of 6 parts:

1. [Getting started with Pglet](#getting-started-with-pglet)
2. [Pglet app structure](#pglet-app-structure)
3. [Adding page controls and handling events](#adding-page-controls-and-handling-events)
4. [View, edit and delete list items](#view-edit-and-delete-list-items)
5. [Filtering list items](#filtering-list-items)
6. [Deploying the app](#deploying-the-app)

## Getting started with Pglet

To write a Pglet web app you don't need to know HTML, CSS or JavaScript, but you need a basic knowledge of Python and object-oriented programming.

Pglet requires Python 3.7 or above. To create a web app in Python with Pglet, you need to install `pglet` module first:

```bash
pip install pglet
```

Let's do a simple hello-world app.

Create `hello.py` with the following contents:

```python title="hello.py"
import pglet
from pglet import Text

page = pglet.page()
page.add(Text(value="Hello, world!"))
```

Run this app and you will see a new browser window with a greeting:

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>


## Pglet app structure

In [previous part](#getting-started-with-pglet) we have learned how to create a simple Pglet page. On that page all users work with the same contents ("**shared page**").

:::note

Try adding `Textbox` control instead of `Text`:

```python title="hello.py"
import pglet
from pglet import Textbox

page = pglet.page()
page.add(Textbox())
```

Run the app and open its URL in multiple browser tabs. You'll see that changing Textbox contents in one tab is instantly reflected in others.

:::

Shared page may be useful for some types of apps: dashboards, status pages, reports. For ToDo app though we want every user to see their own set of tasks. To achieve that we need to create a "**multi-user app**":

```python title="hello-app.py"
import pglet
from pglet import Textbox

def main(page):
  page.add(Textbox())

pglet.app("hello-app", target=main)
```

For every new user session Pglet calls `main` function with unique page contents.

## Adding page controls and handling events

Now we are ready to create a multi-user ToDo app.

To start with we'll need a Textbox for entering task name, "Add" button with event handler that will display a checkbox with a new task:

```python title="todo.py"
import pglet
from pglet import Textbox, Button, Checkbox

def main(page):
    
    def add_clicked(e):
        page.add(Checkbox(label=new_task.value))

    new_task = Textbox(placeholder='Whats needs to be done?')

    page.add(
        new_task,
        Button('Add', on_click=add_clicked)
    )

pglet.app("todo-app", target=main)
```

[SCREENSHOT]

### Page layout

Now we want it to look nice. We want the entire app centered and stretched over 50% of screen width. The textbox and the button should be aligned horizontally and take full app width:

[DIAGRAM]

`Stack` is used to layout controls on a page:

```python title="todo.py"
import pglet
from pglet import Stack, Textbox, Button, Checkbox

def main(page):

    page.title = "ToDo App"
    page.horizontal_align = 'center'
    page.update()
    
    def add_clicked(e):
        tasks_view.controls.append(Checkbox(label=new_task.value))
        tasks_view.update()

    new_task = Textbox(placeholder='Whats needs to be done?', width='100%')
    tasks_view = Stack()

    page.add(Stack(width='50%', controls=[
        Stack(horizontal=True, controls=[
            new_task,
            Button('Add', on_click=add_clicked)
        ]),
        tasks_view
    ]))

pglet.app("todo-app", target=main)
```

:::note
Try `page.vertical_align = 'center'` to center the app vertically.
:::

(stack, create new tasks and displaying the list).

## Reusable UI components

(MyApp class, app structure diagram, reusable app component with two components on the page). Composability and reusability.

...

For Textbox it doesn't make much sense but imagine you have a side panel, or header, or even a chat component that you can add anywhere, ... composability and re-use.

## View, edit and delete list items


## Filtering list items


## Deploying the app


### Instant sharing


### Replit


### Heroku
