---
title: Checkbox
sidebar_label: Checkbox
slug: checkbox
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Checkbox allows to select one or more items from a group, or switch between two mutually exclusive options (checked or unchecked, on or off).

## Examples

[Live demo](https://python-checkbox-example.pgletio.repl.co)

### Basic checkboxes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Checkbox, Button, Text
with pglet.page("basic-checkboxes") as page:
  def button_clicked(e):
        t.value = f"Checkboxes values are:  {c1.value}, {c2.value}, {c3.value}, {c4.value}."
        page.update()

  t = Text()
  c1 = Checkbox(label='Unchecked by default checkbox', value=False)
  c2 = Checkbox(label='Checked by default checkbox', value=True)
  c3 = Checkbox(label='Disabled checkbox', disabled=True)
  c4 = Checkbox(label="Checkbox with rendered box_side='end'", box_side='end')
  b = Button(text='Submit', on_click=button_clicked)
  page.add(c1, c2, c3, c4, b, t)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/checkbox/basic-checkboxes.gif" width="45%" />

### Checkbox with `change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Checkbox, Text

with pglet.page("checkbox-with-change-event") as page:
  def checkbox_changed(e):
    t.value = f"Checkbox value changed to {c.value}" 
    t.update()

  c = Checkbox("Checkbox with 'change' event", on_change=checkbox_changed)
  t = Text()

  page.add(c, t)
  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/checkbox/checkbox-with-change-event.gif" width="40%" />

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | bool    | `false` | Current value of the checkbox. |
| `label`   | string  |         | Label to display next to the checkbox. |
| `boxSide`   | string  | `start` | Allows you to set the checkbox to be at the before (start) or after (end) the label. |
| `data`     | string  |         | Additional data attached to the control. The value is passed in `change` event data along with a checkbox state. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the state of checkbox is changed. |

