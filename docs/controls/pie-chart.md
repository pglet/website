---
title: Pie Chart
sidebar_label: Pie Chart
slug: pie-chart
---

Pie Chart (`PieChart`) is a chart control.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-piechart-example.pgletio.repl.co" height="600px"
    python="https://github.com/pglet/examples/blob/main/python/controls/piechart_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/piechart.sh"
    />

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
