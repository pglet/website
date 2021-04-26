---
title: Toggle
sidebar_label: Toggle
slug: toggle
---

A toggle represents a physical switch that allows someone to choose between two mutually exclusive options.  For example, "On/Off", "Show/Hide". Choosing an option should produce an immediate result.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-toggle-example.pgletio.repl.co" height="600px"
    python="https://github.com/pglet/examples/blob/main/python/controls/toggle_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/theme_example.sh"
    />

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | bool    | `false` | Current value of the toggle. |
| `label`   | string  |         | A label for the toggle. |
| `inline`   | bool    | `false` | Whether the label (not the onText/offText) should be positioned inline with the toggle control. |
| `onText`   | string  |         | Text to display when toggle is ON. Caution: when not providing on/off text user may get confused in differentiating the on/off states of the toggle. |
| `offText`  | string  |         | Text to display when toggle is OFF. Caution: when not providing on/off text user may get confused in differentiating the on/off states of the toggle. |
| `data`     | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a toggle state. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the state of toggle is changed. |
