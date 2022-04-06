---
title: Callout
sidebar_label: Callout
slug: callout
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A callout is an anchored tip that can be used to teach people or guide them through the app without blocking them.

<div class="control-screenshot">
  <img src="/img/docs/callout-demo.gif" width="70%" />
</div>

Callout can be "attached" to the following controls:

* Button
* MenuItem (Button and Toolbar)
* Checkbox
* Dropdown
* Link
* Slider
* SearchBox
* ChoiceGroup
* SpinButton
* Textbox
* Toogle

## Examples

[Live demo - TBD](https://python-callout-example.pgletio.repl.co)

### Basic callout

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Callout, Button, Text, Stack
with pglet.page("basic-callout") as page:
      
  def button_clicked(e):
        c.visible = True
        page.update()


  b = Button(text='Show callout', on_click=button_clicked)
  page.add(b)

  c = Callout(target=b.uid, width=200, height=100, visible = False, controls=[
        Stack(controls=[
          Text(size='large', align='center', value='Callout title'),
          Text(size='small', align='center', value='This is a basic callout')
      ])
  ])
  
  page.add(c)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/callout/basic-callout.gif" width="50%" />

### Callout with directional hint

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Callout, Button, Text, Stack, Toggle, Slider, Dropdown, dropdown
with pglet.page("callout-with-directional-hint") as page:
      
  def button_clicked(e):
        c.beak = beak.value
        c.gap = int(gap_space.value)
        c.beak_width = int(beak_width.value)
        c.position = position.value
        c.visible = True
        page.update()


  beak = Toggle(label='Show beak', value=True)
  gap_space = Slider(width='50%', label='Gap space', show_value=True, min=0, max=30, step=1, value=0)
  beak_width = Slider(width='50%', label='Beak width', show_value=True, min=10, max=50, step=1, value=16)
  show_callout = Button(text='Show callout', on_click=button_clicked)
  position = Dropdown(width=100, label='Position', value='bottomLeft', options=[
    dropdown.Option('topLeft'),
    dropdown.Option('topCenter'),
    dropdown.Option('topRight'),
    dropdown.Option('bottomLeft'),
    dropdown.Option('bottomCenter'),
    dropdown.Option('bottomRight')
  ])

  stack = Stack(horizontal_align='center', width='50%', controls=[show_callout])

  page.add(beak, gap_space, beak_width, position, stack)

  c = Callout(target=show_callout.uid, width=200, height=100, visible = False, controls=[
        Stack(controls=[
          Text(size='large', align='center', value='Callout title'),
          Text(size='small', align='center', value='This is a basic callout')
      ])
  ])
  
  page.add(c)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/callout/callout-with-directional-hint.gif" width="70%" />

### Callout that covers target

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Callout, Button, Text, Stack
with pglet.page("callout-cover-target") as page:
      
  def button_clicked(e):
        c.visible = True
        page.update()


  b = Button(text='Show callout', on_click=button_clicked)
  page.add(b)

  c = Callout(target=b.uid, width=200, height=100, visible = False, cover=True, controls=[
        Stack(controls=[
          Text(size='large', align='center', value='Callout title'),
          Text(size='small', align='center', value='This callout covers target')
      ])
  ])
  
  page.add(c)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/callout/callout-cover-target.gif" width="50%" />

## Properties

| Name          | Type    | Default | Description |
| ------------- | ------- | ------- | ----------- |
| `target`      | string  |         | Id of the control to which the collout is attached. |
| `position`    | string  | `bottomAuto` | The position of the callout relative to the target control: `topLeft`, `topCenter`, `topRight`, `topAuto`, `bottomLeft`, `bottomCenter`, `bottomRight`, `bottomAuto` (default), `leftTop`, `leftCenter`, `leftBottom`, `rightTop`, `rightCenter`, `rightBottom`. |
| `gap`         | number  | 0       | The gap between the callout and the target control. |
| `beak`        | bool    | `true`  | Whether the beak is visible. |
| `beakWidth`   | number  | 16      | Beak width. |
| `pagePadding` | number  | 8       | The minimum distance the callout will be away from the edge of the screen. |
| `focus`       | bool    | `false` | If true then the callout will attempt to focus the first focusable element that it contains. If it doesn't find an element, no focus will be set and the method will return false. This means that it's the contents responsibility to either set focus or have focusable items. |
| `cover`       | bool    | `false` | If true the position returned will have the menu element cover the target. If false then it will position next to the target. |
| `visible`     | bool    | `false`  | Whether the callout is visible or not. |

## Events

| Name      | Description |
| --------- | ----------- |
| `dismiss` | Fires when the callout is dismissed. Callout is dismissed when a user clicks outside of the callout area. |

## Child controls

* Any control - will be rendered in the body of the callout.

