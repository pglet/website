---
title: ChoiceGroup
sidebar_label: ChoiceGroup
slug: choicegroup
---

Radio buttons let people select a single option from two or more choices.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<!-- <CodeSample src="https://python-choicegroup-example.pgletio.repl.co" height="700px"
    python="https://github.com/pglet/examples/blob/main/python/controls/choicegroup_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/choicegroup.sh"
    /> -->

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
page.add(ChoiceGroup(label='Select color', options=[
  choicegroup.Option('Red'),
  choicegroup.Option('Green'),
  choicegroup.Option('Blue')]))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/choicegroup/basic-choicegroup.png" width="15%" />

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

<img src="/img/docs/controls/choicegroup/choicegroup-with-onchange-event.gif" width="25%" />

### Change items in ChoiceGroup options

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
