---
title: Dropdown
sidebar_label: Dropdown
slug: dropdown
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A dropdown is a list in which the selected item is always visible while other items are visible on demand by clicking a dropdown button. Dropdowns are typically used for forms.

## Examples

[Live demo](https://python-dropdown-example.pgletio.repl.co)

### Basic dropdown

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Dropdown, dropdown, Button, Text
with pglet.page("basic-dropdown") as page:
  
  def button_clicked(e):
    t.value = f"Dropdown value is:  {dd.value}"
    page.update()
  
  t = Text()
  b = Button(text='Submit', on_click=button_clicked)
  dd = Dropdown(width=100, options=[
    dropdown.Option('Red'),
    dropdown.Option('Green'),
    dropdown.Option('Blue')
  ])
  page.add(dd, b, t)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/basic-dropdown.gif" width="40%" />

### Dropdown with label and placeholder

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Dropdown, dropdown
with pglet.page("dropdown-with-label-and-placeholder") as page:
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

### Dropdown with `change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Dropdown, dropdown, Text
with pglet.page("dropdown-with-change-event") as page:

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

<img src="/img/docs/controls/dropdown/dropdown-with-change-event.gif" width="40%" />

### Change items in dropdown options

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Dropdown, dropdown, Textbox, Button, Stack
with pglet.page("change-dropdown-options") as page:

  def find_option(option_name):
    for option in d.options:
        if option_name == option.key:
          return option          
    return None

  def add_clicked(e):
    d.options.append(dropdown.Option(option_textbox.value))
    d.value = option_textbox.value
    option_textbox.value = ''
    page.update()

  def delete_clicked(e):
    option = find_option(d.value)
    if option !=None:
      d.options.remove(option)    
      page.update()

  d = Dropdown()
  option_textbox = Textbox(placeholder='Enter item name')
  add = Button("Add", on_click=add_clicked)
  delete = Button("Delete selected", on_click=delete_clicked)
  stack = Stack(controls = [d, Stack(horizontal=True, controls=[option_textbox, add, delete])])

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
| `focused`      | bool    | `false` | When set to `true` the focus is set on the control when it's shown on the page or page opened. |
| `data`         | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a dropdown selected value. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the value of dropdown is changed. |
| `focus`   | Fires when the control has received focus. |
| `blur`    | Fires when the control has lost focus. |

## Child controls

* [`Option`](#option-control)

## `Option` control

`Option` represents an item within dropdown list.

| Name           | Type    | Default  | Description |
| -------------- | ------- | -------- | ----------- |
| `key`          | string  |          | Option's key. `text` value will be used instead if `key` is not specified. |
| `text`         | string  |          | Option's display text. `key` value will be used instead if `text` is not specified. |
| `itemType`     | string  | `normal` | Option type: `normal` (default), `divider`, `header`. |
| `disabled`     | bool    | `false`  | Defines whether an item in a dropdown is selectable or not. |