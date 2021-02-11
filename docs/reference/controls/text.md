---
title: Text
sidebar_label: Text
slug: text
---

Text is a control for displaying text.

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | string  |         | The text displayed. |
| `align`   | string  | `left`  | `left`, `center`, `right`, `justify`  |
| `verticalAlign`   | string  |   | `top`, `center`, `bottom`  |
| `size`    | string  |         | `tiny`, `xSmall`, `small`, `smallPlus`, `medium`, `mediumPlus`, `large`, `xLarge`, `xxLarge`, `superLarge`, `mega`  |
| `bold`    | bool    | `false` | Whether font weight is bold. |
| `italic`  | bool    | `false` | Whether font style is italic. |
| `pre`     | bool    | `false` | Preformatted text in monospace font. |
| `nowrap`  | bool    | `false` | Whether the text is not wrapped. |
| `block`   | bool    | `false` | Whether the text is displayed as a block element. |
| `color`   | string  |         | Font color. |
| `bgcolor` | string  |         | Text background color. |
| `border`  | string  |         | Border around text in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `borderRadius` | string  |         | Border radius. |
| `borderLeft`   | string  |         | Border of the left side of text in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `borderRight`  | string  |         | Border of the right side of text in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `borderTop`    | string  |         | Border of the top side of text in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `borderBottom` | string  |         | Border of the bottom side of text in `<width> <style> <color>` format, e.g. `1px solid #550000` |


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

[Text control live demo in Bash](https://repl.it/@pglet/bash-text-example)

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