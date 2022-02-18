---
title: Checkbox
sidebar_label: Checkbox
slug: checkbox
---

Checkbox allows to select one or more items from a group, or switch between two mutually exclusive options (checked or unchecked, on or off).

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-checkbox-example.pgletio.repl.co" height="300px"
    python="https://github.com/pglet/examples/blob/main/python/controls/checkbox_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/checkbox.sh"
    />

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | bool    | `false` | Current value of the checkbox. |
| `label`   | string  |         | Label to display next to the checkbox. |
| `boxSide` | string  | `start` | Allows you to set the checkbox to be at the before (start) or after (end) the label. |
| `focused` | bool   | `false` | When set to `true` the focus is set on the control when it's shown on the page or page opened. |
| `data`    | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a checkbox state. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the state of checkbox is changed. |

