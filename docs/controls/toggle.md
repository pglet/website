---
title: Toggle
sidebar_label: Toggle
slug: toggle
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A toggle represents a physical switch that allows someone to choose between two mutually exclusive options.  For example, "On/Off", "Show/Hide". Choosing an option should produce an immediate result.

## Examples

[Live demo](https://python-toggle-example.pgletio.repl.co)

### Basic toggles

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Toggle, Button, Text
with pglet.page("basic-toggles") as page:
  def button_clicked(e):
        t.value = f"Toggles values are:  {t1.value}, {t2.value}, {t3.value}, {t4.value}."
        page.update()

  t = Text()
  t1 = Toggle(label='Enabled and checked', value=True)
  t2 = Toggle(label='Enabled and unchecked')
  t3 = Toggle(disabled=True, label='Disabled and checked', value=True)
  t4 = Toggle(disabled=True, label='Disabled and unchecked')
  b = Button(text='Submit', on_click=button_clicked)
  page.add(t1, t2, t3, t4, b, t)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/toggle/basic-toggles.gif" width="45%" />

### Toggles with inline labels

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Toggle
with pglet.page("toggles-with-inline-labels") as page:

  page.add(
    Toggle(inline=True, label='With inline label', on_text='On', off_text='Off'),
    Toggle(disabled=True, inline=True, label='Disabled with inline label', on_text='On', off_text='Off'),
    Toggle(inline=True, label='With inline label and without onText and offText'),
    Toggle(disabled=True, inline=True, label='Disabled with inline label and without onText and offText'))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/toggle/toggles-with-inline-labels.gif" width="45%" />

### Toggle with `change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Toggle
with pglet.page("toggle-with-change-event") as page:
  def toggle_changed(e):
    if t.value:
      page.theme = 'dark'
    else:
      page.theme = 'light'
    page.update()

  t = Toggle(label="With 'change' event", on_text="Dark theme", off_text="Light theme", value=False, on_change=toggle_changed)

  page.theme = 'light'
  page.add(t)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/toggle/toggle-with-change-event.gif" width="45%" />

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | bool    | `false` | Current value of the toggle. |
| `label`   | string  |         | A label for the toggle. |
| `inline`   | bool    | `false` | Whether the label (not the onText/offText) should be positioned inline with the toggle control. |
| `onText`   | string  |         | Text to display when toggle is ON. Caution: when not providing on/off text user may get confused in differentiating the on/off states of the toggle. |
| `offText`  | string  |         | Text to display when toggle is OFF. Caution: when not providing on/off text user may get confused in differentiating the on/off states of the toggle. |
| `focused`  | bool    | `false` | When set to `true` the focus is set on the control when it's shown on the page or page opened. |
| `data`     | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a toggle state. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the state of toggle is changed. |
| `focus`   | Fires when the control has received focus. |
| `blur`    | Fires when the control has lost focus. |
