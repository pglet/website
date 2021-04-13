---
title: Toggle
sidebar_label: Toggle
slug: toggle
---

A toggle represents a physical switch that allows someone to choose between two mutually exclusive options.  For example, "On/Off", "Show/Hide". Choosing an option should produce an immediate result.

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | bool    | `false` | Current value of the toggle. |
| `label`   | string  |         | A label for the toggle. |
| `inline`   | bool    | `false` | Whether the label (not the onText/offText) should be positioned inline with the toggle control. |
| `onText`   | string  |         | Text to display when toggle is ON. Caution: when not providing on/off text user may get confused in differentiating the on/off states of the toggle. |
| `offText`  | string  |         | Text to display when toggle is OFF. Caution: when not providing on/off text user may get confused in differentiating the on/off states of the toggle. |
| `data`     | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a toggle state. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the state of toggle is changed. |


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

Adding a new toggle:

```python
enabled = page.add(Toggle(label="Dark mode", on_text="On", off_text="Off"))
```

</TabItem>

<TabItem value="bash">

[Toggle control live demo in Bash](https://repl.it/@pglet/bash-toggle-example)

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