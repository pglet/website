---
title: Create web app in Python with Pglet
sidebar_label: Python
slug: python
---

import { Replit } from '@site/src/components/replit';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this tutorial we will show step-by-step how to create a ToDo web app in Python using Pglet framework and then share it on the internet. The app is just [100 lines of Python code](https://github.com/pglet/examples/blob/main/python/todo/todo-complete.py) yet it is a multi-user, professionally looking full-featured web app:

<Replit src="https://todo-web-app-in-python.pglet.repl.co" height="400px" />

We chose ToDo for the tutorial because it covers basic concepts you would need to create any web app: building page layout, adding controls, handling events, displaying and editing lists, making reusable UI components and deploy options.

The tutorial consists of the following steps:

* [Getting started with Pglet](#getting-started-with-pglet)
* [Pglet app structure](#pglet-app-structure)
* [Adding page controls and handling events](#adding-page-controls-and-handling-events)
* [View, edit and delete list items](#view-edit-and-delete-list-items)
* [Filtering list items](#filtering-list-items)
* [Clear completed and tasks summary](#clear-completed-and-tasks-summary)
* [Deploying the app](#deploying-the-app)

## Getting started with Pglet

To write a Pglet web app you don't need to know HTML, CSS or JavaScript, but you need a basic knowledge of Python and object-oriented programming.

Pglet requires Python 3.7 or above. To create a web app in Python with Pglet, you need to install `pglet` module first:

```bash
pip install pglet
```

Let's create a simple hello-world app.

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

In [previous step](#getting-started-with-pglet) we have learned how to create a simple Pglet page. On that page all users work with the same contents ("**shared page**").

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

Shared page may be useful for certain types of apps: dashboards, status pages, reports. For ToDo app though we want every user to see their own set of tasks. To achieve this we need to create a "**multi-user app**":

```python title="hello-app.py"
import pglet
from pglet import Textbox

def main(page):
  page.add(Textbox())

pglet.app("hello-app", target=main)
```

For every new user session Pglet calls `main` function with unique page contents.

:::note
To see multiple sessions in action open application URL in a new "incognito" browser window.
:::

## Adding page controls and handling events

Now we are ready to create a multi-user ToDo app.

For a start, we'll need a Textbox for entering task name and "Add" button with event handler that will display a checkbox with a new task:

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

Now let's make the app look nice. We want the entire app to be at the top center of the page and stretched over 70% of the page width. The textbox and the button should be aligned horizontally and take full app width:

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

### Reusable UI components

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

How fun!
:::

You can find a full source code for this step [here](https://github.com/pglet/examples/blob/main/python/todo/todo-app-class.py).

## View, edit and delete list items

In [previous step](#adding-page-controls-and-handling-events) we created a basic ToDo app with task items shown as checkboxes. Let's improve the app by adding "Edit" and "Delete" buttons next to the task name. "Edit" button will switch task item to edit mode.

<p style={{ textAlign: 'center' }}><img style={{ width: '90%' }} src="/img/docs/tutorial/todo-diagram-2.svg" /></p>

Each task item is represented by two stacks: `display_view` stack with Checkbox, "Edit" and "Delete" buttons and `edit_view` stack with Textbox and "Save" button. `view` stack serves as a container for both `display_view` and `edit_view` stacks.

To encapsulate task item views and actions we will introduce a new `Task` class:

```python
class Task():
    def __init__(self, name):
        self.display_task = Checkbox(value=False, label=name)
        self.edit_name = Textbox(width='100%')

        self.display_view = Stack(horizontal=True, horizontal_align='space-between',
                vertical_align='center', controls=[
            self.display_task,
            Stack(horizontal=True, gap='0', controls=[
                Button(icon='Edit', title='Edit todo', on_click=self.edit_clicked),
                Button(icon='Delete', title='Delete todo')]),
            ])
        
        self.edit_view = Stack(visible=False, horizontal=True, horizontal_align='space-between',
                vertical_align='center', controls=[
            self.edit_name, Button(text='Save', on_click=self.save_clicked)
            ])
        self.view = Stack(controls=[self.display_view, self.edit_view])

    def edit_clicked(self, e):
        self.edit_name.value = self.display_task.label
        self.display_view.visible = False
        self.edit_view.visible = True
        self.view.update()

    def save_clicked(self, e):
        self.display_task.label = self.edit_name.value
        self.display_view.visible = True
        self.edit_view.visible = False
        self.view.update()
```

Additionally, we need to change `TodoApp` class to create and hold `Task` instances when "Add" button is clicked:

```python
class TodoApp():
    def __init__(self):
        self.tasks = []
        # ... the rest of constructor is the same

    def add_clicked(self, e):
        task = Task(self.new_task.value)
        self.tasks.append(task)
        self.tasks_view.controls.append(task.view)
        self.new_task.value = ''
        self.view.update()
```

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', border: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-3.png" /></p>

We have just implemented "Edit" and "Save" functionality in `Task` class. "Delete" is going to be a bit different as `TodoApp` holds the list of task instances, so the implementation has to be split between `Task` and `TodoApp` classes.

First, we implement `delete_task()` method in `TodoApp` class which accepts task instance as a parameter:

```python
class TodoApp():
    
    # ...

    def delete_task(self, task):
        self.tasks.remove(task)
        self.tasks_view.controls.remove(task.view)
        self.view.update()
```

Then, we pass a reference to `TodoApp` into Task constructor and call `TodoApp.delete_task()` in "Delete" button event handler:

```python
class Task():
    def __init__(self, app, name):
        self.app = app
        
        # ...

    def delete_clicked(self, e):
        self.app.delete_task(self)
```

You can find a full source code for this step [here](https://github.com/pglet/examples/blob/main/python/todo/todo-with-delete.py).

## Filtering list items

We already have a functional ToDo app where we can create, edit and delete tasks. To be even more productive we want to be able to filter tasks by their status.

We are going to use `Tabs` control for filter:

```python {7-10,18}
class TodoApp():
    def __init__(self):
        self.tasks = []
        self.new_task = Textbox(placeholder='Whats needs to be done?', width='100%')
        self.tasks_view = Stack()

        self.filter = Tabs(value='all', on_change=self.tabs_changed, tabs=[
                Tab(text='all'),
                Tab(text='active'),
                Tab(text='completed')])

        self.view = Stack(width='70%', controls=[
            Text(value='Todos', size='large', align='center'),
            Stack(horizontal=True, controls=[
                self.new_task,
                Button(primary=True, text='Add', on_click=self.add_clicked)]),
            Stack(gap=25, controls=[
                self.filter,
                self.tasks_view
            ])
        ])
```

To display different lists of tasks depending on their status we could maintain three lists with "All", "Active" and "Completed" tasks. We, however, chose an easier approach where we maintain the same list and just change task item's visibility depending on the status.

In `TodoApp` class we introduce `update()` method which iterates through all the tasks and updates their `view` Stack's `visible` property depending on the status of the task:

```python
class TodoApp():

    # ...

    def update(self):
        status = self.filter.value
        for task in self.tasks:
            task.view.visible = (status == 'all'
                or (status == 'active' and task.display_task.value == False)
                or (status == 'completed' and task.display_task.value))
        self.view.update()
```

Filtering should occur when we click on a tab or change a task status. `TodoApp.update()` method is called when Tabs selected value is changed or Task item checkbox is clicked:

```python
class TodoApp():

    # ...

    def tabs_changed(self, e):
        self.update()

class Task():
    def __init__(self, app, name):
        self.display_task = Checkbox(value=False, label=name, on_change=self.status_changed)
        # ...

    def status_changed(self, e):
        self.app.update() 
```

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', borderLeft: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-filtering.gif" /></p>

You can find a full source code for this step [here](https://github.com/pglet/examples/blob/main/python/todo/todo-with-filter.py).

## Clear completed and tasks summary

Our Todo app is almost complete now. As a final touch we will add a footer (`Stack` control) displaying the number of incomplete tasks (`Text` control) and "Clear completed" button:

```python {5,15-18,26,31-33,36-39}
class TodoApp():
    def __init__(self):
        # ...

        self.items_left = Text('0 items left')

        self.view = Stack(width='70%', controls=[
            Text(value='Todos', size='large', align='center'),
            Stack(horizontal=True, controls=[
                self.new_task,
                Button(primary=True, text='Add', on_click=self.add_clicked)]),
            Stack(gap=25, controls=[
                self.filter,
                self.tasks_view,
                Stack(horizontal=True, horizontal_align='space-between', vertical_align='center', controls=[
                    self.items_left,
                    Button(text='Clear completed', on_click=self.clear_clicked)
                ])
            ])
        ])

    # ...

    def update(self):
        status = self.filter.value
        count = 0
        for task in self.tasks:
            task.view.visible = (status == 'all'
                or (status == 'active' and task.display_task.value == False)
                or (status == 'completed' and task.display_task.value))
            if task.display_task.value == False:
                count += 1
        self.items_left.value = f"{count} active item(s) left"
        self.view.update()        

    def clear_clicked(self, e):
        for task in self.tasks[:]:
            if task.display_task.value == True:
                self.delete_task(task)
```

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', border: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-4.png" /></p>

You can find a full source code for this step [here](https://github.com/pglet/examples/blob/main/python/todo/todo-complete.py).

## Deploying the app

Congratulations! You have created your first Python web app with Pglet and it looks awesome!

Now it's time to share the app with the world!

### Instant sharing

Pglet is not only a framework for building web apps, but it is also a service for hosting apps' UI.
You can have the application running on your computer while its UI is streaming to Pglet service in real-time.

To make the app instantly available on the Internet just add `web=True` to `pglet.app()` call:

```python
# ...

pglet.app(target=main, web=True)
```

A new browser windows will be opened with the URL like this:

```
https://app.pglet.io/public/{random}
```

:::note
[Pglet Service](/docs/pglet-service) is in technical preview now and you are sharing the app in a public namespace.

Please note that we have removed the name of the page from the call above, so it's generated randomly to avoid name collision on public Pglet service with other users.
:::

### Replit

Instant sharing is the great option to quickly share the app on the web, but it requires your computer to be constantly on all the time.

[Replit](https://replit.com/) is an online IDE and hosting platform for web apps written in any language. Their free tier allows running any number of apps with some limitations.

To run ToDo app on Replit:

* Click "New repl" button
* Select "Python" language from a list and provide repl name, e.g. `my-todo`
* Click "Packages" tab and search for `pglet` package; select its latest version
* Switch back to "Files" tab and copy-paste the [code of Todo app](https://github.com/pglet/examples/blob/main/python/todo/todo-complete.py) into `main.py`.
* Change page name in `pglet.app()` call to `index` to make the app available on the root domain:

```python
pglet.app("index", target=main)
```

* Run the app. Now both application code and UI are running on Replit service as a "standalone" app.

:::note
We are not affiliated with Replit - we just love the service. Todo app demo for this tutorial is [hosted on Replit](https://replit.com/@pglet/ToDo-web-app-in-Python) and you can just "fork" it there and play.
:::

## Summary

In this tutorial you have learned how to:

* Create a shared page and a multi-user web app;
* Work with Reusable UI components;
* Design UI layout using `Stack` control;
* Work with lists: view, edit and delete items, filtering;
* Deploy your app in two ways: Pglet Service and Replit;

For further reading you can explore [controls](/docs/controls) and [examples repository](https://github.com/pglet/examples/tree/main/python).

We would love to hear your feedback! Please drop us an [email](mailto:hello@pglet.io), join the discussion on [Discord](https://discord.gg/rWjf7xx), follow on [Twitter](https://twitter.com/pgletio).