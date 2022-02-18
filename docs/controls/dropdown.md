---
title: Dropdown
sidebar_label: Dropdown
slug: dropdown
---

A dropdown is a list in which the selected item is always visible while other items are visible on demand by clicking a dropdown button. Dropdowns are typically used for forms.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-dropdown-example.pgletio.repl.co" height="450px"
    python="https://github.com/pglet/examples/blob/main/python/controls/dropdown_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/dropdown.sh"
    />

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `value`        | string  |         | `key` value of the selected option. |
| `label`        | string  |         | Label to display above the control. |
| `placeholder`  | string  |         | The short hint displayed in the dropdown before the user selects a value. |
| `errorMessage` | string  |         | Static error message displayed below the dropdown. |
| `focused`      | bool    | `false` | When set to `true` the focus is set on the control when it's shown on the page or page opened. |
| `data`         | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a dropdown selected value. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the value of dropdown is changed. |
| `focus`   | Fires when the control has received focus. |
| `blur`    | Fires when the control has lost focus. |

## Child controls

* [`Option`](#option-control)

## `Option` control

`Option` represents an item within dropdown list.

| Name           | Type    | Default  | Description |
| -------------- | ------- | -------- | ----------- |
| `key`          | string  |          | Option's key. `text` value will be used instead if `key` is not specified. |
| `text`         | string  |          | Option's display text. `key` value will be used instead if `text` is not specified. |
| `itemType`     | string  | `normal` | Option type: `normal` (default), `divider`, `header`. |
| `disabled`     | bool    | `false`  | Defines whether an item in a dropdown is selectable or not. |