---
title: Textbox
sidebar_label: Textbox
slug: textbox
---

Represents a textbox element with optional label, hint and validation messages.

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

Adding a new textbox control onto the page:

```python
txt_name = page.add(Textbox(label="Your name", placeholder="Enter your name", description="This is your full name"))
```

Retrieving the value entered into textbox:

```python
your_name = page.get_value(txt_name)
print(f'Your name: {your_name}')
```

Add multiline textbox and then output a couple of lines into it:

```python
txt_log = page.add(Textbox(label="Operations", multiline=True))

for i in range(5):
    page.append(txt_log, f'Line {i}\n')
```

</TabItem>

<TabItem value="bash">

```bash
# TODO
```

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