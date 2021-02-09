---
title: Checkbox
sidebar_label: Checkbox
slug: checkbox
---

Checkbox allows to select one or more items from a group, or switch between two mutually exclusive options (checked or unchecked, on or off).

[IMAGE]

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | bool    | `false` | Current value of the checkbox. |
| `label`   | string  |         | Label to display next to the checkbox. |
| `boxSide`   | string  | `start` | Allows you to set the checkbox to be at the before (start) or after (end) the label. |
| `data`     | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a checkbox state. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the state of checkbox is changed. |


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

Adding a new checkbox:

```python
chk_agree = page.add(Checkbox(label="I agree to the terms of services"))
```

To verify if the checkbox is checked:

```python
checked = page.get_value(chk_agree)
if checked == 'true':
    print("Yes, checked!")
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

<TabItem value="node">

```javascript
// TODO
```

</TabItem>

</Tabs>