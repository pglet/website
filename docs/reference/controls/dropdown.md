---
title: Dropdown
sidebar_label: Dropdown
slug: dropdown
---

A dropdown is a list in which the selected item is always visible while other items are visible on demand by clicking a dropdown button. Dropdowns are typically used for forms.

[IMAGE]

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `value`        | string  |         | Current value of the dropdown. |
| `label`        | string  |         | Label to display above the control. |
| `placeholder`  | string  |         | The short hint displayed in the dropdown before the user selects a value. |
| `errorMessage` | string  |         | Static error message displayed below the dropdown. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the value of dropdown is changed. |


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="languages" defaultValue="python" values={[
  { label: 'Python', value: 'python', },
  { label: 'Bash', value: 'bash', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'JavaScript', value: 'javascript', },
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

```bash
# TODO
```

</TabItem>

<TabItem value="powershell">

```powershell
# TODO
```

</TabItem>

<TabItem value="javascript">

```javascript
// TODO
```

</TabItem>

</Tabs>