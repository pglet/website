---
title: Textbox
sidebar_label: Textbox
slug: textbox
---

Represents a textbox element with optional label, hint and validation messages.

[IMAGE]

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `value`        | string |         | Current value of the textbox. |
| `label`        | string |         | The label on top of the textbox.  |
| `placeholder`  | string |         | The short hint displayed in the textbox before the user enters a value. |
| `errorMessage` | string |         | Static error message displayed below the textbox. |
| `description`  | string |         | Description displayed below the textbox to provide additional details about what text to enter. |
| `multiline`    | bool   | `false` | Whether or not the text field is a multiline text field. |
| `password`     | bool   | `false` | Whether the textbox is a masked field for entering password. |