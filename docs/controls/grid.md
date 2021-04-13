---
title: Grid
sidebar_label: Grid
slug: grid
---

A Grid is a robust way to display an information-rich collection of items, and allow people to sort, group, and filter the content. Use Grid when information density is critical.

## Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `selection`     | string | `none`  | Items selection mode: `none`, `single` or `multiple`. |
| `compact`       | bool   | `false` | Whether to render Grid in a compact form. |
| `headerVisible` | bool   | `false` | Whether Grid header is visible. |
| `shimmerLines`  | int    | 0       | Whether to display shimmer lines if `items` collection is empty. `0` - do not display shimmer. |

## Events

| Name      | Description |
| --------- | ----------- |
| `select`  | Fires when one or more Grid items are selected or de-selected. |
| `itemInvoke`  | Fires when Grid item is invoked with double-click or Enter. |

## Child controls

* [`Columns`](#columns-control)
* [`Items`](#items-control)

## `Columns` control

Serves as a container for `column` controls.

### Child controls

* [`Column`](#column-control)

## `Items` control

Serves as a container for `item` controls.

### Child controls

* [`Item`](#item-control)

## `Column` control

Describes Grid column.

### Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `name`          | string |         | Column header text. |
| `icon`      | string |         | Column header icon next to the text. |
| `iconOnly`      | bool   | `false` | Display only header icon. |
| `fieldName`     | string |         | Item's property name to display in the column. |
| `sortable`      | string |         | Whether client-side sorting is enabled for this column. Supported values: `true` - column is sortable as a string; `number` - column is sortable as a number; `false` or empty - column is not sortable. |
| `sortField`     | string |         | Item's property name used for sorting. Sort by `fieldName` if not specified. |
| `sorted`        | string | `false` | Whether the items are sorted by `sortField` or `fieldName` and in what direction. Supported values: `false` (unsorted), `asc` or `desc`. |
| `resizable`     | bool   | `false` | Whether the column is resizable. |
| `minWidth`      | number |         | Minimum width of the column. |
| `maxWidth`      | number |         | Maximum width of the column. |
| `onClick`       | bool   | `false` | Whether column header is clickable. |

### Events

| Name      | Description |
| --------- | ----------- |
| `click`   | Fires when Grid column is clicked. |

### Child controls

Any controls to enable template column.

## `Item` control

Item control holds the data for a single row.

### Properties

Item control can have any properties.



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

[Grid control live demo in Bash](https://repl.it/@pglet/bash-grid-example)

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