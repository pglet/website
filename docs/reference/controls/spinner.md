---
title: Spinner
sidebar_label: Spinner
slug: spinner
---

A Spinner is an outline of a circle which animates around itself indicating to the user that things are processing. A Spinner is shown when it's unsure how long a task will take making it the indeterminate version of a [Progress](progress).

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `size`         | string  | `medium` | The size of Spinner to render: `extraSmall`, `small`, `medium`, `large` |
| `label`        | string  |          | The label to show next to the Spinner. |
| `labelPosition` | string  | `bottom` | The position of the label in regards of the spinner animation: `top`, `right`, `left`, `bottom` |

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

Adding a new spinner:

```python
spin1 = page.add(Spinner(label="Please wait while we are doing something..."))
```

Remove spinner when a long operation is complete:

```python
page.remove(spin1)
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