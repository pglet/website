---
title: Message
sidebar_label: Message
slug: message
---

A banner displays errors, warnings, or important information about an open app or file. For example, if a file failed to upload an error message bar should appear.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-message-example.pgletio.repl.co" height="600px"
    python="https://github.com/pglet/examples/blob/main/python/controls/message_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/message.sh"
    />

## Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `value`         | string |         | Message text. |
| `type`          | string | `info`  | Message type: `info` (default), `error`, `blocked`, `severeWarning`, `success`, `warning` |
| `multiline`     | bool   | `false` | Determines if the message bar is multi lined. If false, and the text overflows over buttons or to another line, it is clipped. |
| `truncated`     | bool   | `false` | Determines if the message bar text is truncated. If true, a button will render to toggle between a single line view and multiline view. This prop is for single line message bars with no buttons only in a limited space scenario. |
| `dismiss`       | bool   | `false` | Whether to display "dismiss" button. |
| `icon`          | string |         | Custom icon to replace the message bar icon. If unset, default will be the icon set by message `type`. |
| `iconColor`     | string |         | Message icon color. |
| `dismissIcon`   | string |         | Custom icon to replace the dismiss icon. If unset, default will be "Clear" icon. |
| `dismissIconColor` | string |      | Custom dismiss icon color. |
| `data`          | string |         | Additional data attached to the control. The value is passed in `click` event data. |

## Events

| Name      | Description |
| --------- | ----------- |
| `dismiss` | Fires when the message is dismissed. |

## Child controls

* [`Button`](#button-control)

## `Button` control

Allows adding custom action buttons on the right side or message, e.g. "Yes/No", "Abort/Retry/Ignore".

### Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `text`          | string |         | Button text. |
| `action`        | string |         | The value to pass into `dismiss` event when the button is clicked. The `text` value is used if `action` is not specified. |
