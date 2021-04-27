---
title: Slider
sidebar_label: Slider
slug: slider
---

A slider provides a visual indication of adjustable content, as well as the current setting in the total range of content. Use a slider when you want people to set defined values (such as volume or brightness), or when people would benefit from instant feedback on the effect of setting changes.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-slider-example.pgletio.repl.co" height="750px"
    python="https://github.com/pglet/examples/blob/main/python/controls/slider_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/slider.sh"
    />

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | number  |         | Current value of the slider. |
| `label`   | string  |         | Description label of the slider. |
| `min`     | number  |         | The min value of the slider. |
| `max`     | number  |         | The max value of the slider. |
| `step`    | number  |         | The difference between the two adjacent values of the slider. |
| `showValue`   | bool    | `false` | Whether to show the value on the right of the slider. |
| `valueFormat` | string  | `{value}` | Optional format string for the slider value, for example `{value}%`. |
| `vertical`    | bool    | `false` | Optional flag to render the slider vertically. Defaults to rendering horizontal. |
| `data`     | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a slider value. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the value of a slider has been changed. |
