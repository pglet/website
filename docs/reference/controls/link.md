---
title: Link
sidebar_label: Link
slug: link
---

Link navigates to an external web page or initiate command within the app.

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | string  |         | Link text. |
| `url`     | string  |         | Link URL to navigate. If `url` is not specified the link will be firing `click` event. |
| `newWindow`    | bool    | `false` | Whether to open link in a new browser window. |
| `title`        | string |         | Popup hint for the link. |
| `size`    | string  |         | `tiny`, `xSmall`, `small`, `smallPlus`, `medium`, `mediumPlus`, `large`, `xLarge`, `xxLarge`, `superLarge`, `mega`  |
| `bold`    | bool    | `false` | Whether font weight is bold. |
| `italic`  | bool    | `false` | Whether font style is italic. |
| `pre`     | bool    | `false` | Preformatted text in monospace font. |
| `align`   | string  | `left`  | `left`, `center`, `right`, `justify`  |

## Events

| Name      | Description |
| --------- | ----------- |
| `click`   | Fires when a user clicks the link. |

## Child controls

* Any control - will be wrapped by the link.

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

Adding a new Link control onto the page:

```python
link1 = page.add(Link(url="https://pglet.io", value="Pglet website", new_window=True))
```

</TabItem>

<TabItem value="bash">

[Link control live demo in Bash](https://repl.it/@pglet/bash-link-example)

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