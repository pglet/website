---
title: Line Chart
sidebar_label: Line Chart
slug: line-chart
---

Line Chart (`LineChart`) is a chart control.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-linechart-example.pgletio.repl.co" height="1000px"
    python="https://github.com/pglet/examples/blob/main/python/controls/linechart_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/linechart.sh"
    />

## Properties

| Name       | Type   | Default | Description |
| -----------| ------ | ------- | ----------- |
| `legend`   | bool   | `false` | Whether to show legend. |
| `tooltips` | bool   | `false` | Whether to show tooltips over bars. |
| `strokeWidth` | int    | `2`    | Stroke width in pixels. |
| `yMin`     | number |         | Minimum display value of Y axis. |
| `yMax`     | number |         | Maximum display value of Y axis. |
| `yTicks`   | int    |         | The number of ticks on Y axis. |
| `yFormat`  | string | `{y}`   | Formatting for y axis labels. `{y}` in a format string is replaced with point `y` value. |
| `xType`    | string | `number` | The data type of X axis: `number` (default) or `date`. |

## Child controls

* [`Data`](#data-control)

## `Data` control

Serves as a container for `P` (point) controls. Line chart control can contain multiple `data` controls to draw several lines on the same chart.

### Properties

| Name       | Type   | Default | Description |
| -----------| ------ | ------- | ----------- |
| `color`    | string |         | Stroke color of the data set. |

### Child controls

* [`P`](#p-control)

## `P` control

Describes chart data point.

### Properties

| Name       | Type   | Default | Description |
| ---------- | ------ | ------- | ----------- |
| `x`        | number or date |         | Independent value of the data point, rendered along the x-axis. Date should be a string in format 'YYYY-MM-DD' or datetime odject (for Python)|
| `y`        | number |         | Dependent value of the data point, rendered along the y-axis. |
| `tick`     | number or date |         | Tick value for the datapoint. If at least one tick value is provided all X axis labels will be replaced with ticks. Date should be a string in format 'YYYY-MM-DD' or datetime odject (for Python)|
| `legend`   | string |         | Legend text for the datapoint in the chart. |
| `xTooltip` | string |         | Callout data for x axis. `legend` will be used if not provided. |
| `yTooltip` | string |         | Callout data for y axis. `y` will be used if not provided. |
