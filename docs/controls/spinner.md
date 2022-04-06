---
title: Spinner
sidebar_label: Spinner
slug: spinner
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A Spinner is an outline of a circle which animates around itself indicating to the user that things are processing. A Spinner is shown when it's unsure how long a task will take making it the indeterminate version of a [Progress](progress).

## Examples

[Live demo](https://python-spinner-example.pgletio.repl.co)

### Spinner sizes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Spinner, Text

with pglet.page("spinner-size") as page:

    page.add(
        Text("Spinner sizes", size="xLarge"),
        Spinner("Extra small spinner", size="xSmall", label_position="left"),
        Spinner("Small spinner", size="small", label_position="left"),
        Spinner("Medium spinner", size="medium", label_position="left"),
        Spinner("Large spinner", size="large", label_position="left"),
    )
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/spinner/spinner-size.gif" width="25%" />

### Spinner label positioning

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Spinner, Text

with pglet.page("spinner-label-positioning") as page:

    page.add(
        Text("Spinner label positioning", size="xLarge"),
        Text("Spinner with label positioned below"),
        Spinner("I am definitely loading...", label_position="bottom"),
        Text("Spinner with label positioned above"),
        Spinner("Seriously, still loading...", label_position="top"),
        Text("Spinner with label positioned to right"),
        Spinner("Wait, wait...", label_position="right"),
        Text("Spinner with label positioned to left"),
        Spinner("Nope, still loading...", label_position="left"),
    )

```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/spinner/spinner-label-positioning.gif" width="35%" />

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `size`         | string  | `medium` | The size of Spinner to render: `xSmall`, `small`, `medium`, `large` |
| `label`        | string  |          | The label to show next to the Spinner. |
| `labelPosition` | string  | `bottom` | The position of the label in regards of the spinner animation: `top`, `right`, `left`, `bottom` |
