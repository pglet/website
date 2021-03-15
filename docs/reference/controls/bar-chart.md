---
title: Horizontal Bar Chart
sidebar_label: Horizontal Bar Chart
slug: bar-chart
---

Horizontal Bar Chart (`BarChart`) is a chart control.

<a class="control-demo" href="https://repl.it/@pglet/bash-barchart-example" target="_blank">Live Demo</a>

## Properties

| Name       | Type   | Default | Description |
| -----------| ------ | ------- | ----------- |
| `tooltips` | bool   | `false` | Whether to show tooltips over bars. |
| `dataMode` | string | `default` | This property tells how to show data text on top right of bar chart. Possible values: `default` - show the datapoint.x value, `fraction` - show the fraction of datapoint.x/datapoint.y, `percentage` - show the percentage of (datapoint.x/datapoint.y)%. |

## Child controls

* [`Data`](#data-control)

## `Data` control

Serves as a container for `P` (point) controls.

### Child controls

* [`P`](#p-control)

## `P` control

Describes chart data point.

### Properties

| Name       | Type   | Default | Description |
| ---------- | ------ | ------- | ----------- |
| `x`        | number |         | Independent value of the data point, rendered along the x-axis. |
| `y`        | number |         | Dependent value of the data point, rendered along the y-axis. |
| `legend`   | string |         | Legend text for the datapoint in the chart.  |
| `color`    | string |         | Color for the legend in the chart. |
| `xTooltip` | string |         | Callout data for x axis. `legend` will be used if not provided. |
| `yTooltip` | string |         | Callout data for y axis. `y` will be used if not provided. |

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

```python
# TODO
```

</TabItem>

<TabItem value="bash">

[Horizontal Bar Chart live demo in Bash](https://repl.it/@pglet/bash-barchart-example)

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
