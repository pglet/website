---
title: Panel
sidebar_label: Panel
slug: panel
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Panels are overlays that contain supplementary content and are used for complex creation, edit, or management experiences.  For example, viewing details about an item in a list or editing settings.

## Examples

[Panel control live demo in Bash](https://repl.it/@pglet/bash-panel-example)

### Basic panel

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Button, Panel, Text

with pglet.page("basic-panel") as page:

    def button_clicked(e):
        p.open = True
        page.update()

    b = Button(text="Open panel", on_click=button_clicked)
    page.add(b)

    p = Panel(title="Basic panel", controls=[Text(value="Content goes here")])

    page.add(p)

    input()

```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/panel/basic-panel.gif" width="70%" />

### Panel size options

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Button, Dropdown, Panel, Text, dropdown

with pglet.page("panel-size") as page:

    def button_clicked(e):
        p.type = dd.value
        p.open = True
        page.update()

    dd = Dropdown(
        width=100,
        value="small",
        options=[
            dropdown.Option("small"),
            dropdown.Option("smallLeft"),
            dropdown.Option("medium"),
            dropdown.Option("large"),
            dropdown.Option("largeFixed"),
            dropdown.Option("extraLarge"),
            dropdown.Option("fluid"),
        ],
    )
    b = Button(text="Open panel", on_click=button_clicked)
    page.add(dd, b)

    p = Panel(title="Basic panel", controls=[Text(value="Content goes here")])

    page.add(p)

    input()

```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/panel/panel-size.gif" width="70%" />

### Custom panel

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Button, Dropdown, Panel, Text, Textbox, dropdown

with pglet.page("panel-custom") as page:

    def button_clicked(e):
        p.type = dd.value
        p.width = tb.value
        tb.value = ""
        p.open = True
        page.update()

    dd = Dropdown(
        width=100,
        value="custom",
        options=[
            dropdown.Option("custom"),
            dropdown.Option("customLeft"),
        ],
    )
    b = Button(text="Open panel", on_click=button_clicked)
    tb = Textbox(label="Width", placeholder="For example, 888px, 888 or 50%", width=500)
    page.add(dd, tb, b)

    p = Panel(title="Basic panel", controls=[Text(value="Content goes here")])

    page.add(p)

    input()

```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/panel/panel-custom.gif" width="70%" />

### Panel with light dismiss

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Button, Panel, Text

with pglet.page("panel-custom") as page:

    def button_clicked(e):
        p.open = True
        page.update()

    b = Button(text="Open panel", on_click=button_clicked)
    page.add(b)

    p = Panel(
        title="Panel with light dismiss",
        light_dismiss=True,
        controls=[Text(value="Click anywhere outside the panel to close it")],
    )

    page.add(p)

    input()

```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/panel/panel-light-dismiss.gif" width="70%" />

## Properties

| Name          | Type    | Default | Description |
| ------------- | ------- | ------- | ----------- |
| `open`        | bool    | `false` | Whether the panel is shown. |
| `title`       | string  |         | The title text to display at the top of the panel. |
| `type`        | string  |         | Type of the panel: `small`, `smallLeft`, `medium`, `large`, `largeFixed`, `extraLarge`, `fluid`, `custom`, `customLeft`. |
| `autoDismiss` | bool    | `true` | Whether panel should be automatically hidden when dismissed. |
| `lightDismiss` | bool    | `false` | Whether the panel can be light dismissed. |
| `width`       | string  |         | Custom width of `custom` or `customLeft` type panel. |
| `blocking`    | bool    | `true` | Whether the panel uses a modal overlay or not. If `blocking` is `false`, `lightDismiss` will not work |
| `data`        | string  |         | Additional data attached to the control. The value is passed in `dismiss` event data. |

## Events

| Name      | Description |
| --------- | ----------- |
| `dismiss` | Fires when the panel is dismissed. Panel is dismissed when a user clicks "close" button or clicks outside of non-blocking panel. |

## Child controls

* Any control - will be rendered in the body of the panel.
* [`Footer`](#footer-control)

## `Footer` control

Serves as a container for panel footer controls.

### Child controls

Any control.