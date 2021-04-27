---
title: Toolbar
sidebar_label: Toolbar
slug: toolbar
---

Toolbar is a surface that houses commands that operate on the content of the window, panel, or parent region it resides above. Toolbars are one of the most visible and recognizable ways to surface commands, and can be an intuitive method for interacting with content on the page; however, if overloaded or poorly organized, they can be difficult to use and hide valuable commands from your user. Toolbars can also display a search box for finding content, hold simple commands as well as menus, or display the status of ongoing actions.

Commands should be sorted in order of importance, from left-to-right or right-to-left depending on the culture. Secondarily, organize commands in logical groupings for easier recall. Toolbars work best when they display no more than 5-7 commands. This helps users quickly find your most valuable features. If you need to show more commands, consider using the overflow menu. If you need to render status or viewing controls, these go on the right side of the Toolbar (or left side if in a left-to-right experience). Do not display more than 2-3 items on the right side as it will make the overall Toolbar difficult to parse.

All command items should have an icon and a label. Commands can render as labels only as well. In smaller widths, commands can just use icon only, but only for the most recognizable and frequently used commands. All other commands should go into an overflow where text labels can be shown.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-toolbar-example.pgletio.repl.co" height="300px"
    python="https://github.com/pglet/examples/blob/main/python/controls/toolbar_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/toolbar.sh"
    />


## Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `inverted`      | bool   | `false` | Display toolbar with transparent background and white text to use as main navigation menu in the header with darker background. |

## Events

Toolbar control does not have any specific events.

## Child controls

* [`Item`](#item-control)
* [`Overflow`](#overflow-control)
* [`Far`](#far-control)

## `Item` control

Represents a menu item within Toolbar control.

### Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `text`          | string |         | Text of the menu item. If a standard hyphen (-) is passed in, then the item will be rendered as a divider. If a dash must appear as text, use an emdash (—), figuredash (‒), or minus symbol (−) instead. |
| `secondaryText` | string |         | Seconday description for the menu item to display. |
| `url`           | string |         | URL to navigate to for this menu item. |
| `newWindow`     | bool   | `false` | Whether to open link in a new browser window. |
| `icon`          | string |         | An optional icon to display next to the item. |
| `iconColor`     | string |         | Icon color. |
| `iconOnly`      | bool   | `false` | Show only an icon for this item, not text. Does not apply if item is in the overflow. |
| `split`         | bool   | `false` | Whether or not this menu item is a SplitButton. |
| `divider`       | bool   | `false` | Display menu item as a divider. |

### Events

| Name      | Description |
| --------- | ----------- |
| `click`   | Fires when menu item is invoked. |

### Child controls

`Item` control can contain other `item` controls to add nested menu items.

* [`Item`](#item-control)

## `Overflow` control

Group items to display in the overflow menu.

### Child controls

* [`Item`](#item-control)

## `Far` control

Group items to display on the right side of the toolbar.

### Child controls

* [`Item`](#item-control)
