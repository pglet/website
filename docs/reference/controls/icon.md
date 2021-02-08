---
title: Icon
sidebar_label: Icon
slug: icon
---

Displays an icon.

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `name`    | string  |         | The name of the icon. You can search through the list of all available icons on [Fluent UI Icons](https://developer.microsoft.com/en-us/fluentui#/styles/web/icons#fabric-react) page. |
| `color`     | string  |         | Icon color. |
| `size`     | string  |         | Icon size. |

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

Adding a new Icon control onto the page:

```python
link1 = page.add(Icon(name="Dictionary", color="green", size="50"))
```

</TabItem>

<TabItem value="bash">

[Icon control live demo in Bash](https://repl.it/@pglet/bash-icon-example)

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