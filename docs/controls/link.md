---
title: Link
sidebar_label: Link
slug: link
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Link navigates to an external web page or initiate command within the app.

## Examples

[Live demo](https://python-link-example.pgletio.repl.co)

### Basic links

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Link
with pglet.page("basic-links") as page:
    page.add(
        Link(url='http://google.com', value='Visit Google', new_window=True),
        Link(value='Link without URL', size='large'),
        Link(url='http://google.com', value='Disabled link', disabled=True))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/link/basic-links.png" width="25%" />

### Link with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Link, Text
with pglet.page("link-with-click-event") as page:

  def link_clicked(e):
    l.data += 1
    t.value = f"Link clicked {l.data} time(s)"
    page.update()

  l = Link(value="Link with 'click' event", on_click=link_clicked, title='Click me!', data=0)
  t = Text()
  
  page.add(l, t)
  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/link/link-with-click-event.gif" width="40%" />

### Link with child controls

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Link, Text, Icon, Button
with pglet.page("link-with-child-controls") as page:

    from pglet import Text, Icon, Button
    page.add(
        Link(url='http://google.com', controls=[
        Icon('Globe'),
        Button('Action Button', action = True),
        Text(' Link with child controls')
    ]))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/link/link-with-child-controls.png" width="40%" />

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