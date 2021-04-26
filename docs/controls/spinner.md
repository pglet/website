---
title: Spinner
sidebar_label: Spinner
slug: spinner
---

A Spinner is an outline of a circle which animates around itself indicating to the user that things are processing. A Spinner is shown when it's unsure how long a task will take making it the indeterminate version of a [Progress](progress).

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-spinner-example.pgletio.repl.co" height="500px"
    python="https://github.com/pglet/examples/blob/main/python/controls/spinner_control.py"
    />

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `size`         | string  | `medium` | The size of Spinner to render: `xSmall`, `small`, `medium`, `large` |
| `label`        | string  |          | The label to show next to the Spinner. |
| `labelPosition` | string  | `bottom` | The position of the label in regards of the spinner animation: `top`, `right`, `left`, `bottom` |
