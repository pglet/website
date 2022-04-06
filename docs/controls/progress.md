---
title: Progress
sidebar_label: Progress
slug: progress
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Progress are used to show the completion status of an operation lasting more than 2 seconds. If the state of progress cannot be determined, use a [Spinner](spinner) instead.

## Examples

[Live demo](https://python-spinner-example.pgletio.repl.co)

### Basic progress

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import time

import pglet
from pglet import Progress, Text

with pglet.page("basic-progress") as page:

    prog1 = Progress("Copying file1.txt to file2.txt", value=0, width="50%")
    page.add(Text("Default Progress", size="xLarge"), prog1)

    for i in range(0, 101):
        prog1.value = i
        prog1.update()
        time.sleep(0.005)

    prog2 = Progress("Provisioning your account", value=0, width="50%")
    page.add(prog2)

    prog2.description = "Preparing environment..."
    prog2.value = 0
    prog2.update()
    time.sleep(2)

    prog2.description = "Collecting information..."
    prog2.value = 20
    prog2.update()
    time.sleep(2)

    prog2.description = "Creatring database entities..."
    prog2.value = 40
    prog2.update()
    time.sleep(2)

    prog2.description = "Verifying the data..."
    prog2.value = 60
    prog2.update()
    time.sleep(2)

    prog2.description = "Finishing the process, almost done..."
    prog2.value = 80
    prog2.update()
    time.sleep(2)

    prog2.description = "Your account has been created!"
    prog2.value = 100
    prog2.update()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/progress/basic-progress.gif" width="75%" />

### Indeterminate progress

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Progress, Text

with pglet.page("basic-progress") as page:

    page.add(
        Text("Indeterminate Progress", size='xLarge'),
        Progress("Operation progress", description="Doing something indefinite...", width='50%')
    )
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/progress/indeterminate-progress.gif" width="75%" />

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `value`        | number  |         | Percentage of the operation's completeness, numerically between 0 and 100. If this is not set, the indeterminate progress animation will be shown instead. |
| `label`        | string  |         | Label to display above the control. |
| `description`  | string  |         | Text describing or supplementing the operation.  |
