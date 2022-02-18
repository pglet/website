---
title: SplitStack
sidebar_label: SplitStack
slug: splitstack
---

SplitStack is a container-type control that allows user to interactively resize children controls.
SplitStack is similar to [Stack](stack), but it fills the gaps between children with draggable gutters.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

The code below creates the page layout with 3 resizable columns.
Left column has initial width of 300 pixels and its minimal size is restricted to 200 pixels.
Right column has initial width of 30% and center column fills the rest.

```python
import pglet
from pglet import SplitStack, Stack, Text

def split_resize(e):
    for c in e.control.controls:
        print("size", c.width if e.control.horizontal else c.height)

page = pglet.page("split")
page.horizontal_align = "stretch"
page.vertical_fill = True
page.add(SplitStack(
    height="100%",
    horizontal=True,
    gutter_size=10,
    on_resize=split_resize,
    controls=[
        Stack(height="100%", width="300", min_width="200", controls=[Text("Column A")]),
        Stack(height="100%", controls=[Text("Column B")]),
        Stack(height="100%", width="30%", controls=[Text("Column C")]),
    ],
))

input()
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

## Properties

| Name               | Type      | Default | Description |
| ------------------ | --------- | ------- | ----------- |
| `horizontal`       | bool      | `false` | Defines whether to render SplitStack children horizontally. |
| `gutterSize`       | number    |         | The size of gutter in pixels. |
| `gutterColor`      | string    | transparent | Gutter color in normal state. |
| `gutterHoverColor` | string    |         | Gutter color when mouse cursor is over it. |
| `gutterDragColor`  | string    |         | Gutter color while dragging. |

## Events

| Name      | Description |
| --------- | ----------- |
| `resize`  | Fires after one of the gutters dragged. |

### Child controls

* Any control - will be rendered in the body of the SplitStack.