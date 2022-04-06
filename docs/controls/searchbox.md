---
title: SearchBox
sidebar_label: SearchBox
slug: searchbox
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A search box provides an input field for searching content within a site or app to find specific items.

## Examples

[Live demo](https://python-searchbox-example.pgletio.repl.co)

### Basic searchboxes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import SearchBox
with pglet.page("basic-searchboxes") as page:
  page.add(
    SearchBox(),
    SearchBox(underlined=True, placeholder='Underlined SearchBox'),
    SearchBox(disabled=True, placeholder='Disabled SearchBox'),
    SearchBox(placeholder='SearchBox with icon', icon='Filter', icon_color='red'))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/searchbox/basic-searchboxes.png" width="25%" />

### SearchBox with `search`, `clear` and `escape` events

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import SearchBox, Stack, Text

with pglet.page("searchbox-with-search-clear-and-escape-events") as page:
   
  def enter_clicked(e):
    messages.controls.append(Text(f'You have searched for {sb.value}.'))
    sb.value = ''
    page.update()

  def clear_or_esc_clicked(e):
    sb.value = ''
    messages.controls.append(Text('You have cleared the box.'))
    page.update()

  sb = SearchBox(width=300, placeholder='Search something and click Enter, X or Esc', on_search=enter_clicked, on_clear=clear_or_esc_clicked)
  messages = Stack()

  page.add(sb, messages)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/searchbox/searchbox-with-search-clear-and-escape-events.gif" width="50%" />

### SearchBox with `change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import SearchBox, Text

with pglet.page("searchbox-with-change-event") as page:
   
  def searchbox_changed(e):
    t.value = f'You have searched for {sb.value}.'
    page.update()

  sb = SearchBox(placeholder='Search something...', on_change=searchbox_changed)
  t = Text()

  page.add(sb, t)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/searchbox/searchbox-with-change-event.gif" width="50%" />

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `value`        | string |         | The value of the text in the SearchBox. |
| `placeholder`  | string |         | Placeholder for the search box. |
| `underlined`   | bool   | `false` | Whether or not the SearchBox is underlined. |
| `icon`         | string |         | Replace "search" icon with a custom one. |
| `iconColor`    | string |         | Icon color. |
| `focused`      | bool   | `false` | When set to `true` the focus is set on the control when it's shown on the page or page opened. |
| `data`         | string |         | Additional data attached to the control. The value is passed in event data. |
| `onChange`     | bool   | `false` | Whether `change` event should be fired while text is typed into the SearchBox. This property is used by command-based client libraries only, e.g. Bash. |

## Events

| Name      | Description |
| --------- | ----------- |
| `search`  | Fires when the user presses Enter in the search box. |
| `clear`   | Fires when the user clears the search box by either clicking 'X' or hitting escape. |
| `change`  | Fires when the typed input for the SearchBox has changed. For performance optimization this event is disabled unless `onChange` property set to `true`. |
| `focus`   | Fires when the control has received focus. |
| `blur`    | Fires when the control has lost focus. |