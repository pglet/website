---
title: ChoiceGroup
sidebar_label: ChoiceGroup
slug: choicegroup
---

Radio buttons let people select a single option from two or more choices.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

[Live demo](https://python-choicegroup-example.pgletio.repl.co)

To run the examples below use the following wrapper:

```python
import pglet
from pglet import ChoiceGroup
from pglet import choicegroup
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

### Basic ChoiceGroup

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from pglet import Button, Text
def button_clicked(e):
  t.value = f"ChoiceGroup value is:  {cg.value}"
  page.update()

t = Text()
b = Button(text='Submit', on_click=button_clicked)
cg = ChoiceGroup(label='Select color', options=[
  choicegroup.Option('Red'),
  choicegroup.Option('Green'),
  choicegroup.Option('Blue')])
  
page.add(cg, b, t)
input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/choicegroup/basic-choicegroup.gif" width="25%" />

### ChoiceGroup with icons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(ChoiceGroup(label='Pick one icon', options=[
  choicegroup.Option(key='day', text='Day', icon='CalendarDay'),
  choicegroup.Option(key='week', text='Week', icon='CalendarWeek'),
  choicegroup.Option(key='month', text='Month', icon='Calendar')
  ]))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/choicegroup/choicegroup-with-icons.png" width="35%" />

### ChoiceGroup with on_change event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from pglet import Text
def choicegroup_changed(e):
  t.value = f"ChoiceGroup value changed to {cg.value}" 
  t.update()

cg = ChoiceGroup(label='Select color', on_change=choicegroup_changed, options=[
  choicegroup.Option('Red'),
  choicegroup.Option('Green'),
  choicegroup.Option('Blue')
])

t = Text()

page.add(cg, t)

input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/choicegroup/choicegroup-with-onchange-event.gif" width="35%" />

### Change items in ChoiceGroup options

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
  from pglet import Textbox, Button, Stack

  def find_option(option_name):
    for option in cg.options:
        if option_name == option.key:
          return option          
    return None

  def add_clicked(e):
    cg.options.append(choicegroup.Option(option_textbox.value))
    option_textbox.value = ''
    page.update()

  def delete_clicked(e):
    option = find_option(option_textbox.value)
    if option !=None:
      cg.options.remove(option)    
    else:
      option_textbox.error_message = 'Option not found.'
    
    option_textbox.value = ''
    page.update()

  cg = ChoiceGroup()
  option_textbox = Textbox(placeholder='Enter item name')
  
  add = Button("Add", on_click=add_clicked)
  delete = Button("Delete", on_click=delete_clicked)
  stack = Stack(controls = [cg, Stack(horizontal=True, controls=[option_textbox, add, delete])])

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

<img src="/img/docs/controls/choicegroup/change-choicegroup-options.gif" width="50%" />

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `value`        | string  |         | `key` value of the selected option. |
| `label`        | string  |         | Descriptive label for the choice group. |
| `data`         | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a ChoiceGroup selected value. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the choice has been changed. |

## Child controls

* [`Option`](#option-control)

## `Option` control

`Option` represents an item within ChoiceGroup.

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `key`          | string  |         | Option's key. `text` value will be used instead if `key` is not specified. |
| `text`         | string  |         | Option's display text. `key` value will be used instead if `text` is not specified. |
| `icon`         | string  |         | Icon name to display with this option. |
| `iconColor`    | string  |         | Icon color. |
