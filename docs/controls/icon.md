---
title: Icon
sidebar_label: Icon
slug: icon
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Displays an icon.

## Examples

[Live demo](https://python-dropdown-example.pgletio.repl.co)

[Icon browser](https://python-icon-browser.pgletio.repl.co/)

### Icons with different colors and sizes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Icon, Stack
with pglet.page("icons") as page:
  page.add(
    Stack(horizontal=True, controls=[
      Icon("ChangeEntitlements", color='Magenta20'),
      Icon("shop", color='CyanBlue10'),
      Icon("TrainSolid")
    ]),
    Stack(horizontal=True, vertical_align='center', controls=[
      Icon("BlockedSite", color='Orange20', size=25),
      Icon("settings", color='Gray20', size=50),
      Icon("save", color='Blue10', size=100)
    ])        
  )
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/icon/icons.png" width="40%" />

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `name`    | string  |         | The name of the icon. You can search through the list of all available icons on [Fluent UI Icons](https://developer.microsoft.com/en-us/fluentui#/styles/web/icons#fabric-react) page. |
| `color`     | string  |         | Icon color. |
| `size`     | string  |         | Icon size. |
