---
title: Image
sidebar_label: Image
slug: image
---

An image is a graphic representation of something (e.g photo or illustration).

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `src`         | string  |  | Image source URL. |
| `alt`        | string  |          | Image alternative text. |
| `title` | string  |  | Popup hint. |
| `fit`        | string  |          | Used to determine how the image is scaled and cropped to fit the frame. Allowed values: `none`, `contain`, `cover`, `center`, `centerContain`, `centerCover` |
| `maximizeFrame` | boolean | `false` | If true, the image frame will expand to fill its parent container. |

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

[Image control live demo in Bash](https://repl.it/@pglet/bash-image-example)

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