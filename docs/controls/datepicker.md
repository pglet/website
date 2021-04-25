---
title: DatePicker
sidebar_label: DatePicker
slug: datepicker
---

A date picker (DatePicker) offers a drop-down control that’s optimized for picking a single date from a calendar view where contextual information like the day of the week or fullness of the calendar is important.

## Usage



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

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the selected date is changed (either selected from dropdown or entered if `allowTextInput` is enabled.) |

