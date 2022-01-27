---
title: Checkbox
sidebar_label: Checkbox
slug: checkbox
---

Checkbox allows to select one or more items from a group, or switch between two mutually exclusive options (checked or unchecked, on or off).

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

[Live demo](https://python-checkbox-example.pgletio.repl.co)

To run the examples below use the following wrapper:

```python
import pglet
from pglet import Checkbox
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

### Checkboxes with different properties

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(
  Checkbox(label='Unchecked checkbox', value=False),
  Checkbox(label='Checked checkbox', value=True),
  Checkbox(label='Disabled checkbox', disabled=True),
  Checkbox(label="Checkbox with rendered box_side='End'", box_side='End'))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/checkbox/checkboxes.png" width="35%" />

### Checkbox with on_change event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from pglet import Text
def checkbox_changed(e):
    t.value = f"Checkbox value changed to {c.value}" 
    t.update()

c = Checkbox('Checkbox with on_change event', on_change=checkbox_changed)
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

<img src="/img/docs/controls/checkbox/checkbox-with-onchange-event.gif" width="40%" />

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

