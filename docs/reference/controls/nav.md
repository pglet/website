---
title: Nav
sidebar_label: Nav
slug: nav
---

A navigation pane provides links to the main areas of an app or site.

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

Represents a link item within Nav control.

### Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `key`           | string |         | An key to uniquely identify a link. `text` value is used if `key` is not specified.  |
| `text`          | string |         | Text to render for this link. `key` value is used if `text` is not specified. |
| `icon`          | string |         | An optional icon to show next to the nav link. |
| `iconColor`     | string |         | Icon color. |
| `url`           | string |         | URL to navigate to for this link. |
| `newWindow`     | bool   | `false` | Whether to open link in a new browser window. |
| `expanded`      | bool   | `false` | Whether or not the link is in an expanded state. |
| `collapsed`     | bool   | `false` | If true, the group should render collapsed by default. |

### Child controls

`Item` control can contain other `item` controls to build links tree.

* [`Item`](#item-control)

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="languages" defaultValue="python" values={[
  { label: 'Python', value: 'python', },
  { label: 'Bash', value: 'bash', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'Node.js', value: 'node', },
]}>

<TabItem value="python">

```python
# TODO
```

</TabItem>

<TabItem value="bash">

[Nav control live demo in Bash](https://repl.it/@pglet/bash-nav-example)

</TabItem>

<TabItem value="powershell">

```powershell
# TODO
```

</TabItem>

<TabItem value="node">

```javascript
// TODO
```

</TabItem>

</Tabs>