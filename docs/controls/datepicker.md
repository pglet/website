---
title: DatePicker
sidebar_label: DatePicker
slug: datepicker
---

A date picker (DatePicker) offers a drop-down control that’s optimized for picking a single date from a calendar view where contextual information like the day of the week or fullness of the calendar is important.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-datepicker-example.pgletio.repl.co" height="450px"
    python="https://github.com/pglet/examples/blob/main/python/controls/datepicker_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/datepicker.sh"
    />

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `value`        | date   |         | Current value of the DatePicker. |
| `label`        | string |         | Label to display above the DatePicker.  |
| `placeholder`  | string |         | The short hint displayed in the DatePicker before the user enters a value. |
| `required`     | bool   | `false` | Display DatePicker as required. |
| `allowTextInput` | bool   | `false` | Whether the DatePicker allows input a date string directly or not. |
| `borderless`   | bool   | `false` | Whether or not the DatePicker is borderless. |
| `underlined`   | bool   | `false` | Whether or not the DatePicker is underlined. |
| `focused`      | bool   | `false` | When set to `true` the focus is set on the control when it's shown on the page or page opened. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the selected date is changed (either selected from dropdown or entered if `allowTextInput` is enabled.) |
| `focus`   | Fires when the control has received focus. |
| `blur`    | Fires when the control has lost focus. |
