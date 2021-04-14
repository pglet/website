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

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', border: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-hello-world.png" /></p>

:::note
In this example page URL is a random string, because we didn't specify it in `pglet.page()` call. Try changing it to `pglet.page('hello')`.
:::

## Pglet app structure

In [previous part](#getting-started-with-pglet) we have learned how to create a simple Pglet page. On that page all users work with the same contents ("**shared page**").

:::note

Try adding `Textbox` control instead of `Text`:

```python
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

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', border: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-1.png" /></p>

### Page layout

Now let's make the app looking nice. We want the entire app to be at the top center of the page and stretched over 70% of the page width. The textbox and the button should be aligned horizontally and take full app width:

<p style={{ textAlign: 'center' }}><img style={{ width: '90%' }} src="/img/docs/tutorial/todo-diagram-1.svg" /></p>

`Stack` is a container control that is used to layout other controls on a page. `Stack` can be vertical (default), horizontal and can contain other stacks:

```python title="todo.py"
import pglet
from pglet import Stack, Textbox, Button, Checkbox

def main(page):

    page.title = "ToDo App"
    page.horizontal_align = 'center'
    page.update() # needs to be called every time "page" control is changed
    
    def add_clicked(e):
        tasks_view.controls.append(Checkbox(label=new_task.value))
        tasks_view.update()

    new_task = Textbox(placeholder='Whats needs to be done?', width='100%')
    tasks_view = Stack()

    page.add(Stack(width='70%', controls=[
        Stack(horizontal=True, controls=[
            new_task,
            Button('Add', on_click=add_clicked)
        ]),
        tasks_view
    ]))

pglet.app("todo-app", target=main)
```

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', border: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-2.png" /></p>

:::note
Try `page.vertical_align = 'center'` to center the app vertically.
:::

## Reusable UI components

We can continue writing our app and adding controls to the `main` function, however the best practice would be creating a reusable UI component. Imagine you are working on an app header, or a side menu or other UI that will be a part of a larger project. Even if you can't think of such uses right now we still recommend creating all your web apps with composability and reusability in mind.

To make a reusable ToDo app component we are going to encapsulate its state and presentation logic in a separate class: 

```python title="todo.py"
import pglet
from pglet import Stack, Textbox, Button, Checkbox

class TodoApp():
    def __init__(self):
        self.new_task = Textbox(placeholder='Whats needs to be done?', width='100%')
        self.tasks_view = Stack()

        # application's root control (i.e. "view") containing all other controls
        self.view = Stack(width='70%', controls=[
            Stack(horizontal=True, controls=[
                self.new_task,
                Button('Add', on_click=self.add_clicked)
            ]),
            self.tasks_view
        ])

    def add_clicked(self, e):
        self.tasks_view.controls.append(Checkbox(label=self.new_task.value))
        self.tasks_view.update()

def main(page):
    page.title = "ToDo App"
    page.horizontal_align = 'center'
    page.update()

    # create application instance
    app = TodoApp()

    # add application's root control to the page
    page.add(app.view)

pglet.app("todo-app", target=main)
```

:::note
Try adding two `TodoApp` components to the page:

```python
app1 = TodoApp()
app2 = TodoApp()
page.add(app1.view, app2.view)
```

:::

## View, edit and delete list items


## Filtering list items


## Deploying the app


### Instant sharing


### Replit


### Heroku
