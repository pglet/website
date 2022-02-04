---
title: Textbox
sidebar_label: Textbox
slug: textbox
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Represents a textbox element with optional label, hint and validation messages.

## Examples

[Live demo](https://python-textbox-example.pgletio.repl.co)

### Basic textboxes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Textbox, Button, Text
with pglet.page("basic-textboxes") as page:
  def button_clicked(e):
        t.value = f"Textboxes values are:  '{tb1.value}', '{tb2.value}', '{tb3.value}', '{tb4.value}', '{tb5.value}'."
        page.update()

  t = Text()
  tb1 = Textbox(label='Standard')
  tb2 = Textbox(label='Disabled', disabled=True, value='First name')
  tb3 = Textbox(label='Read-only', read_only=True, value='Last name')  
  tb4 = Textbox(label="With placeholder", placeholder='Please enter text here')
  tb5 = Textbox(label='With an icon', icon='Emoji2')
  b = Button(text='Submit', on_click=button_clicked)
  page.add(tb1, tb2, tb3, tb4, tb5, b, t)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/textbox/basic-textboxes.gif" width="45%" />

### Required textboxes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Textbox, Button
with pglet.page("required-textboxes-with-error-messages") as page:
  def button_clicked(e):
    if tb1.value =='':
        tb1.error_message = 'Field is required'
    else:
        tb1.error_message = ''
    if tb2.value =='':
        tb2.error_message = 'Field is required'
    else:
        tb2.error_message = ''
    page.update()

  b = Button(text='Validate', on_click=button_clicked)
  tb1 = Textbox(label='Required:', required=True)
  tb2 = Textbox(required=True)

  page.add(tb1, tb2, b)
  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/textbox/required-textboxes.gif" width="45%" />

### Textbox with `change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Textbox, Button
with pglet.page("textbox-with-change-event") as page:
  def textbox_changed(e):
    if tb.value =='':
        tb.error_message = 'Field is required'
    else:
        tb.error_message = ''

    page.update()

  tb = Textbox(label='Required:', required=True, on_change=textbox_changed, error_message='Field is required')

  page.add(tb)
  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/textbox/textbox-with-change-event.gif" width="45%" />

### Password with reveal button

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Textbox
with pglet.page("password-with-reveal-button") as page:

  page.add(Textbox(label='Password with reveal button', password=True))
  
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/textbox/password-with-reveal-button.gif" width="45%" />

### Multiline textboxes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Textbox
with pglet.page("multiline-textboxes") as page:

  page.add(
      Textbox(label='standard', multiline=True),
      Textbox(label='disabled', multiline=True, disabled=True, value='line1\nline2\nline3\nline4\nline5\n'),
      Textbox(label='With auto adjusted height', multiline=True, auto_adjust_height=True))
  
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/textbox/multiline-textboxes.gif" width="45%" />

### Underlined and borderless textboxes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Textbox
with pglet.page("underlined-and-borderless-textboxes") as page:

  page.add(
    Textbox(label='Underlined', underlined=True, placeholder='Enter text here'),
    Textbox(label='Borderless', borderless=True, placeholder='Enter text here'))
  
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/textbox/underlined-and-borderless-textboxes.gif" width="45%" />

### Underlined and borderless textboxes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Textbox
with pglet.page("suffix-prefix-textboxes") as page:

  page.add(
    Textbox(label='With prefix', prefix='https://'),
    Textbox(label='With suffix', suffix='.com'),
    Textbox(label='With prefix and suffix', prefix='https://', suffix='.com'))
  
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/textbox/suffix-prefix-textboxes.png" width="45%" />

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `value`        | string |         | Current value of the textbox. |
| `label`        | string |         | Label to display above the textbox.  |
| `placeholder`  | string |         | The short hint displayed in the textbox before the user enters a value. |
| `errorMessage` | string |         | Static error message displayed below the textbox. |
| `description`  | string |         | Description displayed below the textbox to provide additional details about what text to enter. |
| `prefix`       | string |         | Prefix displayed before the textbox contents. This is not included in the value. |
| `suffix`       | string |         | Suffix displayed after the textbox contents. This is not included in the value. |
| `icon`         | string |         | Icon shown in the textbox. |
| `iconColor`    | string |         | Icon color. |
| `multiline`    | bool   | `false` | Whether or not the textbox is a multiline text field. |
| `required`     | bool   | `false` | Display textbox as required. |
| `readOnly`     | bool   | `false` | If true, the textbox is readonly. |
| `autoAdjustHeight`     | bool   | `false` | For multiline textboxes, whether or not to auto adjust textbox height. |
| `borderless`   | bool   | `false` | Whether or not the textbox is borderless. |
| `underlined`   | bool   | `false` | Whether or not the textbox is underlined. |
| `align`        | string | `left`  | Text alignment within textbox: `left` or `right`. |
| `password`     | bool   | `false` | Whether the textbox is a masked field for entering password. |
| `onChange`     | bool   | `false` | Whether `change` event should be fired while text is typed into the Textbox. This property is used by command-based client libraries only like Bash. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the typed input for the Textbox has changed. For performance optimization this event is disabled unless `onChange` property set to `true`. |
