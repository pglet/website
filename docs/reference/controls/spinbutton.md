---
title: SpinButton
sidebar_label: SpinButton
slug: spinbutton
---

A spin button allows someone to incrementally adjust a value in small steps. It’s mainly used for numeric values, but other values are supported too.

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | number  |         | Current value of the SpinButton. |
| `label`   | string  |         | Descriptive label for the control. |
| `min`     | number  |         | The min value of the SpinButton. |
| `max`     | number  |         | The max value of the SpinButton. |
| `step`    | number  |         | The difference between the two adjacent values of the SpinButton. |
| `icon`    | string  |         | Icon to display alongside the control's label. |
| `data`    | string  |         | Additional data attached to the control. The value is passed in `change` event data along with the SpinButton value. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the value of the SpinButton has been changed. |


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

Adding a new slider:

```python
enabled = page.add(SpinButton(label="Basic SpinButton", min=0, max=100))
```

</TabItem>

<TabItem value="bash">

[SpinButton control live demo in Bash](https://repl.it/@pglet/bash-spinbuttons-example)

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