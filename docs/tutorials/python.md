---
title: Create web app in Python with Pglet
sidebar_label: Python
slug: python
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this tutorial we will show step-by-step how to create a ToDo web app in Python (and only Python) using Pglet library and then share it on the internet. The app is under 100 lines of code yet it is a multi-user, professionally looking full-featured web app. You can browse live demo and view source code here:

[SCREENSHOT]/[URL]

We chose ToDo for the tutorial because it is CRUD (create/read/update/delete) app that covers main concepts of creating and deploying web app with Pglet: making reusable UI components, building page layout, working with lists and deploy options.

To write the app you don't need to know HTML/CSS/... but you need a basic knowledge of Python, classes, etc.

The tutorial consists of 6 parts:

1. [Getting started with Pglet](#getting-started-with-pglet)
2. [Pglet app structure](#pglet-app-structure)
3. [Adding page controls and handling events](#adding-page-controls-and-handling-events)
4. [View, edit and delete list items](#view-edit-and-delete-list-items)
5. [Filtering list items](#filtering-list-items)
6. [Deploying the app](#deploying-the-app)

## Getting started with Pglet

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

### Shared page vs multi-user app

Previous section contains an example of "shared" page. All users work with the same page contents. Try adding `Textbox` control instead of `Text`:

```python title="hello.py"
import pglet
from pglet import Textbox

page = pglet.page()
page.add(Textbox())
```

Run the app and open its URL in multiple browser tabs. You'll see that changing Textbox contents in one tab is instantly reflected in others.

Shared page may be useful for some types of apps: dashboards, status pages, reports. For ToDo app though we want every user to see their own set of tasks. To achieve that we need to create a multi-user app:

[CODE EXAMPLE] - everything is in `main`

For every session `main` method is called in a new thread.

Entry point ..., diagram ..., thread ...,

### Reusable UI components

(MyApp class, app structure diagram, reusable app component with two components on the page). Composability and reusability.

...

For Textbox it doesn't make much sense but imagine you have a side panel, or header, or even a chat component that you can add anywhere, ... composability and re-use.

## Adding page controls and handling events

(stack, create new tasks and displaying the list).


## View, edit and delete list items


## Filtering list items


## Deploying the app


### Instant sharing


### Replit


### Heroku
