---
title: Nav
sidebar_label: Nav
slug: nav
---

A navigation pane provides links to the main areas of an app or site.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-nav-example.pgletio.repl.co" height="700px"
    python="https://github.com/pglet/examples/blob/main/python/controls/nav_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/nav.sh"
    />

## Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `value`         | string |         | Key of the selected nav item. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the selected nav item is changed. |
| `expand`  | Fires when nav item is expanded. Item's `key` is passed in event data. |
| `collapse`  | Fires when nav item is collapsed. Item's `key` is passed in event data. |

## Child controls

* [`Item`](#item-control)

## `Item` control

Represents a group or a link item within Nav control. Top level `item` controls are rendered as groups.

### Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `key`           | string |         | An key to uniquely identify a link. `text` value is used if `key` is not specified.  |
| `text`          | string |         | Text to render for this link. `key` value is used if `text` is not specified. |
| `icon`          | string |         | An optional icon to show next to the nav link. |
| `iconColor`     | string |         | Icon color. |
| `url`           | string |         | URL to navigate to for this link. |
| `newWindow`     | bool   | `false` | Whether to open link in a new browser window. |
| `expanded`      | bool   | `false` | Whether or not the link is in an expanded state. By default group is expanded and link is collapsed. |

### Child controls

`Item` control can contain other `item` controls to build links tree.

* [`Item`](#item-control)
