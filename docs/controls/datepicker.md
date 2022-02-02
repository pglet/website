---
title: DatePicker
sidebar_label: DatePicker
slug: datepicker
---

A date picker (DatePicker) offers a drop-down control that’s optimized for picking a single date from a calendar view where contextual information like the day of the week or fullness of the calendar is important.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

[Live demo](https://python-datepicker-example.pgletio.repl.co)

To run the examples below use the following wrapper:

```python
from datetime import datetime
import pglet
from pglet import DatePicker
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

### Basic DatePicker

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
now = datetime.now()
page.add(
  DatePicker(label="Start date", value=now, width=150),
  DatePicker(label="End date", width=150))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/datepicker/basic-datepicker.png" width="15%" />

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `value`        | date   |         | Current value of the DatePicker. |
| `label`        | string |         | Label to display above the DatePicker.  |
| `placeholder`  | string |         | The short hint displayed in the DatePicker before the user enters a value. |
| `required`     | bool   | `false` | Display DatePicker as required. |
| `allowTextInput` | bool   | `false` | Whether the DatePicker allows input a date string directly or not. |
| `borderless`   | bool   | `false` | Whether or not the DatePicker is borderless. |
| `underlined`   | bool   | `false` | Whether or not the DatePicker is underlined. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the selected date is changed (either selected from dropdown or entered if `allowTextInput` is enabled.) |

