---
title: ComboBox
sidebar_label: ComboBox
slug: combobox
---

A ComboBox combines a text field and a dropdown giving people a way to select an option from a list or enter their own choice.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import ComboBox, combobox

page = pglet.page("combobox-test")
page.horizontal_align = "stretch"
page.add(
    ComboBox(
        label="Your favorite car makers",
        multi_select=True,
        value=["BMW, Volkswagen"],
        width="50%",
        on_change=lambda e: print("selected cars:", e.control.value),
        options=[
            combobox.Option("Select all", item_type="select_all"),
            combobox.Option("div1", item_type="divider"),
            combobox.Option("BMW"),
            combobox.Option("Toyota"),
            combobox.Option("Volkswagen"),
            combobox.Option("Mercedes-Benz"),
        ],
    ),
    ComboBox(
        label="Allows free form",
        multi_select=False,
        width="50%",
        allow_free_form=True,
        on_focus=lambda e: print("on_focus!"),
        on_blur=lambda e: print("on_blur!"),
        options=[
            combobox.Option("One"),
            combobox.Option("Two"),
            combobox.Option("Five"),
        ],
    ),
    ComboBox(
        label="Allows free form with multi-select and error message",
        multi_select=True,
        width="50%",
        allow_free_form=True,
        error_message="This field cannot be left blank!",
        options=[
            combobox.Option("Red"),
            combobox.Option("Green"),
            combobox.Option("Blue"),
        ],
    ),
)

input()
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

## Properties

| Name            | Type    | Default | Description |
| --------------- | ------- | ------- | ----------- |
| `value`         | string  |         | `key` value of the selected option, comma-separated list of selected options' keys if `multiSelect` is set to `true` or a text entered by a user if `allowFreeForm` is set to `true`. |
| `label`         | string  |         | Label to display above the control. |
| `placeholder`   | string  |         | The short hint displayed in the control before the user selects or types a value. |
| `errorMessage`  | string  |         | Static error message displayed below the ComboBox. |
| `multiSelect`   | bool    | `false` | Whether multi-choice selections are allowed or not. |
| `allowFreeForm` | bool    | `false` | Whether the ComboBox allows freeform user input, rather than restricting to the provided options. |
| `autoComplete`  | bool    | `true`  | Whether the ComboBox auto completes. As the user is entering text, potential matches will be suggested from the list of options. If the ComboBox is expanded, this will also scroll to the suggested option and give it a selected style. |
| `focused`       | bool    | `false` | When set to `true` the focus is set on the control when it's shown on the page or page opened. |
| `data`          | string  |         | Additional data attached to the control. The value is passed in `change` event data along with ComboBox selected value. |

## Events

| Name      | Description |
| --------- | ----------- |
| `change`  | Fires when the value of ComboBox is changed. |
| `focus`   | Fires when the control has received focus. |
| `blur`    | Fires when the control has lost focus. |

## Child controls

* [`Option`](#option-control)

## `Option` control

`Option` represents an item within ComboBox list.

| Name           | Type    | Default  | Description |
| -------------- | ------- | -------- | ----------- |
| `key`          | string  |          | Option's key. `text` value will be used instead if `key` is not specified. |
| `text`         | string  |          | Option's display text. `key` value will be used instead if `text` is not specified. |
| `itemType`     | string  | `normal` | Option type: `normal` (default), `divider`, `header`, `select_all`. |
| `disabled`     | bool    | `false`  | Defines whether an item in a ComboBox is selectable or not. |