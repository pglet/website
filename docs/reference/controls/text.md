---
title: Text
sidebar_label: Text
slug: text
---

Text is a component for displaying text.

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | string  |         | The text displayed. |
| `align`   | string  | `left`  | `left`, `center`, `right`, `justify`  |
| `size`    | string  |         | `tiny`, `xSmall`, `small`, `smallPlus`, `medium`, `mediumPlus`, `large`, `xLarge`, `xxLarge`, `superLarge`, `mega`  |
| `bold`    | bool    | `false` | Whether font weight is bold. |
| `italic`  | bool    | `false` | Whether font style is italic. |
| `nowrap`  | bool    | `false` | Whether the text is not wrapped. |
| `block`   | bool    | `false` | Whether the text is displayed as a block element. |

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="languages" defaultValue="python" values={[
  { label: 'Python', value: 'python', },
  { label: 'Bash', value: 'bash', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'JavaScript', value: 'javascript', },
]}>

<TabItem value="python">

Adding a new text control onto the page:

```python
t1 = page.add(Text(value="Hello, world!"))
```

Updating just added text:

```python
t1.value = "Running step A..."
page.update(t1)
```

or shorter:

```python
page.set_value(t1, "Running step A...")
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

<TabItem value="javascript">

```javascript
// TODO
```

</TabItem>

</Tabs>