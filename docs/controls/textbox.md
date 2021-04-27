---
title: Textbox
sidebar_label: Textbox
slug: textbox
---

Represents a textbox element with optional label, hint and validation messages.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-textbox-example.pgletio.repl.co" height="600px"
    python="https://github.com/pglet/examples/blob/main/python/controls/textbox_control.py"
    />

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `value`        | string |         | Current value of the textbox. |
| `label`        | string |         | Label to display above the textbox.  |
| `placeholder`  | string |         | The short hint displayed in the textbox before the user enters a value. |
| `errorMessage` | string |         | Static error message displayed below the textbox. |
| `description`  | string |         | Description displayed below the textbox to provide additional details about what text to enter. |
| `prefix`       | string |         | Prefix displayed before the textbox contents. This is not included in the value. |
| `suffix`       | string |         | Suffix displayed after the textbox contents. This is not included in the value. |
| `icon`         | string |         | Icon shown in the textbox. |
| `iconColor`    | string |         | Icon color. |
| `multiline`    | bool   | `false` | Whether or not the textbox is a multiline text field. |
| `required`     | bool   | `false` | Display textbox as required. |
| `readOnly`     | bool   | `false` | If true, the textbox is readonly. |
| `autoAdjustHeight`     | bool   | `false` | For multiline textboxes, whether or not to auto adjust textbox height. |
| `borderless`   | bool   | `false` | Whether or not the textbox is borderless. |
| `underlined`   | bool   | `false` | Whether or not the textbox is underlined. |
| `align`        | string | `left`  | Text alignment within textbox: `left` or `right`. |
| `password`     | bool   | `false` | Whether the textbox is a masked field for entering password. |
| `onChange`     | bool   | `false` | Whether `change` event should be fired while text is typed into the Textbox. This property is used by command-based client libraries only like Bash. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the typed input for the Textbox has changed. For performance optimization this event is disabled unless `onChange` property set to `true`. |
