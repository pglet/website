---
title: Button
sidebar_label: Button
slug: button
---

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

[Live demo](https://python-button-example.pgletio.repl.co)

To run the examples below use the following wrapper:

```python
import pglet
from pglet import Button, Text, Stack
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

### Regular buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(
    Button("Standard"),
    Button("Standard disabled", disabled=True))
    Button("Primary", primary=True),
    Button("Primary disabled", primary=True, disabled=True))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/regular-buttons.png" width="25%" />

### Button with on_click event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
def button_clicked(e):
  b.data += 1
  t.value = f"Button clicked {b.data} time(s)"
  page.update()

b = Button('Button with on_click event', on_click=button_clicked, title='Click me!', data=0)
t = Text()
page.add(b, t)
input()
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/button-with-onclick-event.gif" width="50%" />

### Compound buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(
  Button("Compound", secondary_text='This is a secondary text', compound=True),
  Button("Primary compound", secondary_text='This is a secondary text', compound=True, primary=True))
)
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/compound-buttons.png" width="25%" />

### Buttons with icons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(
  Button("Create account", icon='AddFriend', primary=True),
  Button("New item", icon='Add'),
  Button("Delete", icon='Delete'))
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/buttons-with-icons.png" width="25%" />

### Icon only buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(
  Button(icon='Emoji2', title='Emoji!'),
  Button(icon='Calendar', title='Calendar!'))
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/icon-only-buttons.png" width="5%" />

### Toolbar buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(Stack(horizontal=True, controls=[
  Button(text="New item", toolbar=True, icon='Add'),
  Button(text="Send", toolbar=True, icon='Mail'),
  Button(text="Show example", toolbar=True, icon='ChevronDown'),
  Button(text="Delete", toolbar=True, icon_color='red', icon='Delete')
  ]))
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

### Link buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(
  Button(action=True, icon='Globe', text='Pglet website',url='https://pglet.io', new_window=True),
  Button(icon='MyMoviesTV', text='Go to Disney', url='https://disney.com', new_window=True))
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/link-buttons.png" width="25%" />

### Context menu buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from pglet import button
page.add(Stack(horizontal=True, controls=[
  Button(icon='Add', text='New item', menu_items=[
    button.MenuItem(text='Email message', icon='Mail'),
    button.MenuItem(text='Calendar event', icon='Calendar')
    ]),
  Button(text='Button with sub-menus', menu_items=[
    button.MenuItem(text='New', icon='Add', sub_menu_items=[
      button.MenuItem(text='Email message', icon='Mail'),
      button.MenuItem(text='Calendar event', icon='Calendar')
    ]),
    button.MenuItem(text='Share', icon='Share', split=True, sub_menu_items=[
      button.MenuItem(text='Share to Twitter'),
      button.MenuItem(text='Share to Facebook'),
      button.MenuItem('Share to Somewhere'),
      button.MenuItem('Share to email', sub_menu_items=[
        button.MenuItem('Share to Outlook'),
        button.MenuItem('Share to Gmail')
      ])
    ]),
    button.MenuItem(divider=True),
    button.MenuItem(text='To Pglet', icon='Globe', icon_color='green', url='https://pglet.io', new_window=True, secondary_text='New Window')
  ]),
]))
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/context-menu-buttons.png" width="75%" />

### Split buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from pglet import button
page.add(Stack(horizontal=True, controls=[
  Button(split=True, text='Standard', menu_items=[
    button.MenuItem('Email message', icon='Mail'),
    button.MenuItem('Calendar event', icon='Calendar')
  ]),
  Button(split=True, primary=True, text='Primary', menu_items=[
    button.MenuItem('Email message', icon='Mail'),
    button.MenuItem('Calendar event', icon='Calendar')
  ])
]))
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

### Action buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(Stack(horizontal=True, controls=[
  Button(action=True, text='<'),
  Button(action=True, text='<<'),
  Button(action=True, text='>'),
  Button(action=True, text='>>'),
]))
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/action-buttons.png" width="25%" />

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `primary`      | bool   | `false` | The button with a theme color background. Usually, there is only one primary button on a form. |
| `compound`     | bool   | `false` | Render compound button with primary and `secondaryText` on a second line. |
| `action`       | bool   | `false` | Render button as a link without a border. |
| `toolbar`      | bool   | `false` | Render toolbar-like button. |
| `split`        | bool   | `false` | If set to `true`, and if menu items are provided, the button will render as a SplitButton. |
| `text`         | string |         | The text displayed on a button. |
| `secondaryText` | string |        | Description of the action this button takes. Only used for compound buttons. |
| `url`          | string |         | If provided, the button will be rendered as a link. |
| `newWindow`    | bool   | `false` | Whether to open link in a new browser window. |
| `title`        | string |         | Popup hint for the button. |
| `icon`         | string |         | Icon shown in the button. |
| `iconColor`    | string |         | Icon color. |
| `data`         | string |         | Additional data attached to the control. The value is passed in `click` event data. |

## Events

| Name      | Description |
| --------- | ----------- |
| `click`   | Fires when a user clicks the button.  |

## Child controls

* [`Item`](#item-control)

## `Item` control

Represents a menu item within a context menu button.

### Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `text`          | string |         | Text of the menu item. If a standard hyphen (-) is passed in, then the item will be rendered as a divider. If a dash must appear as text, use an emdash (—), figuredash (‒), or minus symbol (−) instead. |
| `secondaryText` | string |         | Seconday description for the menu item to display. |
| `url`           | string |         | URL to navigate to for this menu item. |
| `newWindow`     | bool   | `false` | Whether to open link in a new browser window. |
| `icon`          | string |         | An optional icon to display next to the item. |
| `iconColor`     | string |         | Icon color. |
| `iconOnly`      | bool   | `false` | Show only an icon for this item, not text. Does not apply if item is in the overflow. |
| `split`         | bool   | `false` | Whether or not this menu item is a SplitButton. |
| `divider`       | bool   | `false` | Display menu item as a divider. |

### Events

| Name      | Description |
| --------- | ----------- |
| `click`   | Fires when menu item is invoked. |

### Child controls

`Item` control can contain other `item` controls to add nested menu items.

* [`Item`](#item-control)