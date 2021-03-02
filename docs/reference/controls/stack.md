---
title: Stack
sidebar_label: Stack
slug: stack
---

Stack is a container-type control that allows to define the layout of its children controls.

Although the Stack control has a number of different properties, there are three in particular that define the overall layout that the component has:

* **Direction**: Refers to whether the stacking of children components is horizontal or vertical. By default the Stack control is vertical, but can be turned horizontal by adding `horizontal` property when using the control.
* **Alignment**: Refers to how the children controls are aligned inside the container. This is controlled via `verticalAlign` and `horizontalAlign` properties.
* **Spacing**: Refers to the space that exists between children controls inside the Stack. This is controlled via `gap` property.

Stacks can be nested inside one another in order to be able to configure the layout of the application as desired.

## Properties

| Name              | Type      | Default | Description |
| ----------------- | --------- | ------- | ----------- |
| `horizontal`      | bool      | `false` | Defines whether to render Stack children horizontally. |
| `verticalFill`    | bool      | `false` | Defines whether the Stack should take up 100% of the height of its parent. |
| `horizontalAlign` | string    |         | Defines how to align stack children horizontally: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `baseline` or `stretch`. |
| `verticalAlign`   | string    |         | Defines how to align stack children vertically: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `baseline` or `stretch`. |
| `gap`             | string    |         | A gap between stack child controls. |
| `wrap`            | bool      | `false` | Defines whether Stack children should wrap onto multiple rows or columns when they are about to overflow the size of the Stack. |
| `scrollx`         | bool      | `false` | Enable horizontal scrolling if stack contents doesn't fit into stack boundaries. |
| `scrolly`         | bool      | `false` | Enable vertical scrolling if stack contents doesn't fit into stack boundaries. |

### Child controls

* Any control - will be rendered in the body of the stack.

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

Adding a new horizontal stack to a page:

```python
page.add(Stack(horizontal=True))
```

Adding a stack with buttons in it:

```python
stack1 = page.add(Stack(horizontal=True, controls=[
    Button(id="ok", text="OK"),
    Button(id="cancel", text="Cancel")
]))
```

Hiding stack from a previous example:

```python
stack1.visible = False
page.update(stack1)
```

or shorter:

```python
page.hide(stack1)
```

Removing all children of a stack:

```python
page.clean(stack1)
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