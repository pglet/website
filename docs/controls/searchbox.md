---
title: SearchBox
sidebar_label: SearchBox
slug: searchbox
---

A search box provides an input field for searching content within a site or app to find specific items.

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `value`        | string |         | The value of the text in the SearchBox. |
| `placeholder`  | string |         | Placeholder for the search box. |
| `underlined`   | bool   | `false` | Whether or not the SearchBox is underlined. |
| `icon`         | string |         | Replace "search" icon with a custom one. |
| `iconColor`    | string |         | Icon color. |
| `data`         | string |         | Additional data attached to the control. The value is passed in event data. |
| `onChange`     | bool   | `false` | Whether `change` event should be fired while text is typed into the SearchBox. This property is used by command-based client libraries only like Bash. |

## Events

| Name      | Description |
| --------- | ----------- |
| `search`  | Fires when the user presses Enter in the search box. |
| `clear`  | Fires when the user clears the search box by either clicking 'X' or hitting escape. |
| `change`  | Fires when the typed input for the SearchBox has changed. For performance optimization this event is disabled unless `onChange` property set to `true`. |

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

Adding a new SearchBox control onto the page:

```python
sb = page.add(SearchBox(placeholder="Search by city name", on_search=perform_search))
```

</TabItem>

<TabItem value="bash">

```bash
[SearchBox control live demo in Bash](https://repl.it/@pglet/bash-searchbox-example)
```

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