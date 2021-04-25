---
title: Button
sidebar_label: Button
slug: button
---

import { CodeSample } from '@site/src/components/code-sample';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

<CodeSample src="https://bash-buttons-example.pglet.repl.co/" height="600px"
    python="https://github.com/pglet/examples/blob/python-examples/python/controls/button_control.py"
    powershell="powershell-url"
    csharp="ddddd" />

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `primary`      | bool   | `false` | The button with a theme color background. Usually, there is only one primary button on a form. |
| `compound`     | bool   | `false` | Render compound button with primary and `secondaryText` on a second line. |
| `action`       | bool   | `false` | Render button as a link without a border. |
| `toolbar`      | bool   | `false` | Render toolbar-like button. |
| `split`        | bool   | `false` | If set to `true`, and if menu items are provided, the button will render as a SplitButton. |
| `text`         | string |         | The text displayed on a button. |
| `secondaryText` | string |        | Description of the action this button takes. Only used for compound buttons. |
| `url`          | string |         | If provided, the button will be rendered as a link. |
| `newWindow`    | bool   | `false` | Whether to open link in a new browser window. |
| `title`        | string |         | Popup hint for the button. |
| `icon`         | string |         | Icon shown in the button. |
| `iconColor`    | string |         | Icon color. |
| `data`         | string |         | Additional data attached to the control. The value is passed in `click` event data. |

## Events

| Name      | Description |
| --------- | ----------- |
| `click`   | Fires when a user clicks the button.  |

## Child controls

* [`Item`](#item-control)

## `Item` control

Represents a menu item within a context menu button.

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