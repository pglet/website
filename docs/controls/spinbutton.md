---
title: SpinButton
sidebar_label: SpinButton
slug: spinbutton
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A spin button allows someone to incrementally adjust a value in small steps. It’s mainly used for numeric values, but other values are supported too.

## Examples

[Live demo](https://python-spinbutton-example.pgletio.repl.co)

### Basic SpinButton

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import SpinButton, Button, Text
with pglet.page("basic-spinbutton") as page:
  def button_clicked(e):
        t.value = f"Spinbutton value is:  {sb.value}."
        page.update()

  t = Text()
  sb = SpinButton(width='50%', label='Default SpinButton')
  b = Button(text='Submit', on_click=button_clicked)
  page.add(sb, b, t)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/spinbutton/basic-spinbutton.gif" width="75%" />

### SpinButton with `change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import SpinButton, Text
with pglet.page("spinbutton-with-change-event") as page:
  def spinbutton_changed(e):
    t.value = f"SpinButton value changed to {sb.value}" 
    page.update()

  t = Text()
  sb = SpinButton(width='50%', label='Default SpinButton', on_change=spinbutton_changed)
  page.add(sb, t)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/spinbutton/spinbutton-with-change-event.gif" width="75%" />

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | number  |         | Current value of the SpinButton. |
| `label`   | string  |         | Descriptive label for the control. |
| `labelPosition`   | string  |  `left`  | Label position: `left` (default), `top`, `right`, `bottom`. |
| `min`     | number  |         | The min value of the SpinButton. |
| `max`     | number  |         | The max value of the SpinButton. |
| `step`    | number  |         | The difference between the two adjacent values of the SpinButton. |
| `icon`    | string  |         | Icon to display alongside the control's label. |
| `focused` | bool    | `false` | When set to `true` the focus is set on the control when it's shown on the page or page opened. |

| `data`    | string  |         | Additional data attached to the control. The value is passed in `change` event data along with the SpinButton value. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the value of the SpinButton has been changed. |
| `focus`   | Fires when the control has received focus. |
| `blur`    | Fires when the control has lost focus. |