---
title: ChoiceGroup
sidebar_label: ChoiceGroup
slug: choicegroup
---

Radio buttons let people select a single option from two or more choices.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-choicegroup-example.pgletio.repl.co" height="700px"
    python="https://github.com/pglet/examples/blob/main/python/controls/choicegroup_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/choicegroup.sh"
    />

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `value`        | string  |         | `key` value of the selected option. |
| `label`        | string  |         | Descriptive label for the choice group. |
| `data`         | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a ChoiceGroup selected value. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the choice has been changed. |

## Child controls

* [`Option`](#option-control)

## `Option` control

`Option` represents an item within ChoiceGroup.

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `key`          | string  |         | Option's key. `text` value will be used instead if `key` is not specified. |
| `text`         | string  |         | Option's display text. `key` value will be used instead if `text` is not specified. |
| `icon`         | string  |         | Icon name to display with this option. |
| `iconColor`    | string  |         | Icon color. |
