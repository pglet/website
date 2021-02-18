---
title: Tabs
sidebar_label: Tabs
slug: tabs
---

The Tabs control and related tabs pattern are used for navigating frequently accessed, distinct content categories. Tabs allow for navigation between two or more content views and relies on text headers to articulate the different sections of content.

## Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `value`         | string |         | Key of the selected tab item. |
| `solid`         | bool   | `false` | `true` to display tabs as solid rectangles instead of links. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the selected tab item is changed. |

## Child controls

* [`Tab`](#tab-control)

## `Tab` control

Represents a tab within Tabs control.

### Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `key`           | string |         | An key to uniquely identify a tab. `text` value is used if `key` is not specified.  |
| `text`          | string |         | The text displayed of each tab link. `key` value is used if `text` is not specified. |
| `icon`          | string |         | An optional icon to show next to the tab link. |
| `count`         | string |         | Defines an optional item count displayed in parentheses just after the linkText. Examples: Completed (4), Unread (99+). |

### Child controls

* Any control - will be rendered in the body of the tab.

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

[Tabs control live demo in Bash](https://repl.it/@pglet/bash-tabs-example)

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