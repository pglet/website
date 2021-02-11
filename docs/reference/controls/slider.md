---
title: Slider
sidebar_label: Slider
slug: slider
---

A slider provides a visual indication of adjustable content, as well as the current setting in the total range of content. Use a slider when you want people to set defined values (such as volume or brightness), or when people would benefit from instant feedback on the effect of setting changes.

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | number  |         | Current value of the slider. |
| `label`   | string  |         | Description label of the slider. |
| `min`     | number  |         | The min value of the slider. |
| `max`     | number  |         | The max value of the slider. |
| `step`    | number  |         | The difference between the two adjacent values of the slider. |
| `showValue`   | bool    | `false` | Whether to show the value on the right of the slider. |
| `valueFormat` | string  | `{value}` | Optional format string for the slider value, for example `{value}%`. |
| `vertical`    | bool    | `false` | Optional flag to render the slider vertically. Defaults to rendering horizontal. |
| `data`     | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a slider value. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the value of a slider has been changed. |


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
enabled = page.add(Slider(label="Default slider", min=0, max=100))
```

</TabItem>

<TabItem value="bash">

[Slider control live demo in Bash](https://repl.it/@pglet/bash-slider-example)

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