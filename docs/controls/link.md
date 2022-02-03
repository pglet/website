---
title: Link
sidebar_label: Link
slug: link
---

Link navigates to an external web page or initiate command within the app.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

[Live demo](https://python-link-example.pgletio.repl.co)

To run the examples below use the following wrapper:

```python
import pglet
from pglet import Link
with pglet.page("myapp") as page:
  page.clean()
  # insert example code here
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

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