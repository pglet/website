---
title: Dropdown
sidebar_label: Dropdown
slug: dropdown
---

A dropdown is a list in which the selected item is always visible while other items are visible on demand by clicking a dropdown button. Dropdowns are typically used for forms.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

[Live demo](https://python-dropdown-example.pgletio.repl.co)

To run the examples below use the following wrapper:

```python
import pglet
from pglet import Dropdown
from pglet import dropdown
with pglet.page("myapp") as page:
  page.clean()
  # insert example code here
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

### Basic dropdown

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(Dropdown(width=100, options=[
  dropdown.Option('Red'),
  dropdown.Option('Green'),
  dropdown.Option('Blue')
]))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/basic-dropdown.png" width="25%" />

### Dropdown with label and placeholder

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(Dropdown(label='Color', placeholder='What\'s your favourite color?', options=[
  dropdown.Option('Red'),
  dropdown.Option('Green'),
  dropdown.Option('Blue')
]))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/dropdown-with-label-and-placeholder.png" width="25%" />

### Dropdown with on_change event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from pglet import Text

def dropdown_changed(e):
  t.value = f"Dropdown changed to {d.value}" 
  page.update()

d = Dropdown(width=100, on_change=dropdown_changed, options=[
  dropdown.Option('Red'),
  dropdown.Option('Green'),
  dropdown.Option('Blue')
])

t = Text()

page.add(d, t)

input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/dropdown-with-onchange-event.gif" width="40%" />

### Change items in dropdown options

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from pglet import Textbox, Button, Stack

def add_clicked(e):
  d.options.append(dropdown.Option(new_option.value))
  d.value = new_option.value
  new_option.value = ''
  page.update()

d = Dropdown()
new_option = Textbox(placeholder='Enter new item name')
add = Button("Add", on_click=add_clicked)
stack = Stack(controls = [d, Stack(horizontal=True, controls=[new_option, add])])

page.add(stack)

input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/change-dropdown-options.gif" width="50%" />

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `value`        | string  |         | `key` value of the selected option. |
| `label`        | string  |         | Label to display above the control. |
| `placeholder`  | string  |         | The short hint displayed in the dropdown before the user selects a value. |
| `errorMessage` | string  |         | Static error message displayed below the dropdown. |
| `data`         | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a dropdown selected value. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the value of dropdown is changed. |

## Child controls

* [`Option`](#option-control)

## `Option` control

`Option` represents an item within dropdown list.

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `key`          | string  |         | Option's key. `text` value will be used instead if `key` is not specified. |
| `text`         | string  |         | Option's display text. `key` value will be used instead if `text` is not specified. |
