---
title: Vertical Bar Chart
sidebar_label: Vertical Bar Chart
slug: vertical-bar-chart
---

Vertical Bar Chart (`VerticalBarChart`) is a chart control.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-verticalbarchart-example.pgletio.repl.co" height="820px"
    python="https://github.com/pglet/examples/blob/main/python/controls/vertical_barchart_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/vertical_barchart.sh"
    />

## Properties

| Name       | Type   | Default | Description |
| -----------| ------ | ------- | ----------- |
| `legend`   | bool   | `false` | Whether to show legend. |
| `tooltips` | bool   | `false` | Whether to show tooltips over bars. |
| `barWidth` | int    | `32`    | Bar width in pixels. |
| `colors`   | string |         | ` ` (space) or `,` (comma) delimited list of colors for gradient fill of bars. First colors is used to fill bars with lesser `y` values and last color - bars with greater `y` values. |
| `yMin`     | number |         | Minimum display value of Y axis. |
| `yMax`     | number |         | Maximum display value of Y axis. |
| `yTicks`   | int    |         | The number of ticks on Y axis. |
| `yFormat`  | string | `{y}`   | Formatting for y axis labels. `{y}` in a format string is replaced with point `y` value. |
| `xType`    | string | `string` | The data type of X axis: `string` (default) or `number`. If data type is `string` then all bars are distributed evenly across X axis. |

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
| `x`        | number or string | | Independent value of the data point, rendered along the x-axis. If chart's `xType` is `number`, then each y-coordinate is plotted at its x-coordinate. If xType is `string`, then the data is evenly spaced along the x-axis. |
| `y`        | number |         | Dependent value of the data point, rendered along the y-axis. |
| `legend`   | string |         | Legend text for the datapoint in the chart.  |
| `color`    | string |         | Color for the legend in the chart. |
| `xTooltip` | string |         | Callout data for x axis. `legend` will be used if not provided. |
| `yTooltip` | string |         | Callout data for y axis. `y` will be used if not provided. |
