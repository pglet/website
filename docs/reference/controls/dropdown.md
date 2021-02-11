---
title: Dropdown
sidebar_label: Dropdown
slug: dropdown
---

A dropdown is a list in which the selected item is always visible while other items are visible on demand by clicking a dropdown button. Dropdowns are typically used for forms.

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

Adding a new dropdown with a couple of options defined as tuples:

```python
dd1 = page.add(Dropdown(label="Favorite color:", options=[
    ("r", "Red"),
    ("g", "Green"),
    ("b", "Blue")
]))
```

or as `Option` controls:

```python
dd1 = page.add(Dropdown(label="Favorite color:", options=[
    Option("r", "Red"),
    Option("g", "Green"),
    Option("b", "Blue")
]))
```

Get the key of selected option:

```python
favorite_color = page.get_value(dd1)
```

</TabItem>

<TabItem value="bash">

[Dropdown control live demo in Bash](https://repl.it/@pglet/bash-dropdown-example)

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