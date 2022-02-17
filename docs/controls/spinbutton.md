---
title: SpinButton
sidebar_label: SpinButton
slug: spinbutton
---

A spin button allows someone to incrementally adjust a value in small steps. It’s mainly used for numeric values, but other values are supported too.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-spinbutton-example.pgletio.repl.co" height="100px"
    python="https://github.com/pglet/examples/blob/main/python/controls/spinbutton_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/spinbutton.sh"
    />


## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | number  |         | Current value of the SpinButton. |
| `label`   | string  |         | Descriptive label for the control. |
| `min`     | number  |         | The min value of the SpinButton. |
| `max`     | number  |         | The max value of the SpinButton. |
| `step`    | number  |         | The difference between the two adjacent values of the SpinButton. |
| `icon`    | string  |         | Icon to display alongside the control's label. |
| `focused` | bool    | `false` | When set to `true` the focus is set on the control when it's shown on the page or page opened. |

| `data`    | string  |         | Additional data attached to the control. The value is passed in `change` event data along with the SpinButton value. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the value of the SpinButton has been changed. |
| `focus`   | Fires when the control has received focus. |
| `blur`    | Fires when the control has lost focus. |