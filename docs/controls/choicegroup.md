---
title: ChoiceGroup
sidebar_label: ChoiceGroup
slug: choicegroup
---

Radio buttons let people select a single option from two or more choices.

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

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="languages" defaultValue="python" values={[
  { label: 'Python', value: 'python', },
  { label: 'Bash', value: 'bash', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'Node.js', value: 'node', },
]}>

<TabItem value="python">

Adding a new ChoiceGroup with a couple of options defined as tuples:

```python
cg1 = page.add(ChoiceGroup(label="Favorite color:", options=[
    ("r", "Red"),
    ("g", "Green"),
    ("b", "Blue")
]))
```

or as `Option` controls:

```python
cg1 = page.add(ChoiceGroup(label="Favorite color:", options=[
    Option("r", "Red"),
    Option("g", "Green"),
    Option("b", "Blue")
]))
```

Get the key of selected option:

```python
favorite_color = page.get_value(cg1)
```

</TabItem>

<TabItem value="bash">

[ChoiceGroup control live demo in Bash](https://repl.it/@pglet/bash-choicegroup-example)

</TabItem>

<TabItem value="powershell">

```powershell
# TODO
```

</TabItem>

<TabItem value="node">

```javascript
// TODO
```

</TabItem>

</Tabs>