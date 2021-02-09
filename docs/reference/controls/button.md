---
title: Button
sidebar_label: Button
slug: button
---

Button allows to trigger an action.

[IMAGE]

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `primary`      | bool   | `false` | The button with a theme color background. Usually, there is only one primary button on a form. |
| `text`         | string |         | The text displayed on a button. |
| `disabled`     | string |         | Whether the button is disabled. |
| `data`         | string  |         | Additional data attached to the control. The value is passed in `click` event data. |

## Events

| Name      | Description |
| --------- | ----------- |
| `click`   | Fires when a user clicks the button.  |


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

Adding a button with event handler:

```python
btn_next = page.add(Button(text="Next", onclick=lambda e: print("Clicked!")))
```

or without lambda:

```python
btn_next = Button(text="Next", onclick=next_onclick)

def next_onclick(e):
    page.disable(btn_next)
    time.sleep(2) # simulate doing something
    page.enable(btn_next)

page.add(btn_next)
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