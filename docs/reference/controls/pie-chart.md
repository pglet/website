---
title: Pie Chart
sidebar_label: Pie Chart
slug: pie-chart
---

Pie Chart (`PieChart`) is a chart control.

<a class="control-demo" href="https://repl.it/@pglet/bash-piechart-example" target="_blank">Live Demo</a>

## Properties

| Name       | Type   | Default | Description |
| -----------| ------ | ------- | ----------- |
| `legend`   | bool   | `false` | Whether to show legend. |
| `tooltips` | bool   | `false` | Whether to show tooltips over bars. |
| `innerValue` | string or number   |  | The value to display in the center of the chart. |
| `innerRadius` | number   |  | Hole radius in the center to draw chart as a donut. |

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
| `value`        | number |         | Data point (sector) value. |
| `legend`   | string |         | Legend text for the datapoint in the chart.  |
| `color`    | string |         | Color for the legend in the chart. |
| `tooltip` | string |         | Callout data the value. `legend` will be used if not provided. |

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

[Pie Chart live demo in Bash](https://repl.it/@pglet/bash-piechart-example)

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