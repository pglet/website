---
title: Progress
sidebar_label: Progress
slug: progress
---

Progress are used to show the completion status of an operation lasting more than 2 seconds. If the state of progress cannot be determined, use a [Spinner](spinner) instead.

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `value`        | number  |         | Percentage of the operation's completeness, numerically between 0 and 100. If this is not set, the indeterminate progress animation will be shown instead. |
| `label`        | string  |         | Label to display above the control. |
| `description`  | string  |         | Text describing or supplementing the operation.  |

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

Adding a new "indeterminate" progress indicator onto the page:

```python
prog = page.add(Progress(label="Preparing tests...", width="100%"))
```

Updating progress indicator in a loop:

```python
for i = range(11):
    prog.label = f"Doing step {i}..."
    prog.value = i * 10
    page.update(prog, fire_and_forget=True)
```

:::info
When `fire_and_forget` is set to `True` the client is not awaiting for `update` command result to come back from Pglet server.
This could drastically speed up the interaction with a page, but you should be aware that possible errors could stay unnoticed.
:::

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