---
title: Stack
sidebar_label: Stack
slug: stack
---

import { Replit } from '@site/src/components/replit';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Stack is a container-type control that allows to define the layout of its children controls.

Although the Stack control has a number of different properties, there are three in particular that define the overall layout that the component has:

* **Direction**: Refers to whether the stacking of children components is horizontal or vertical. By default the Stack control is vertical, but can be turned horizontal by adding `horizontal` property when using the control.
* **Alignment**: Refers to how the children controls are aligned inside the container. This is controlled via `verticalAlign` and `horizontalAlign` properties.
* **Spacing**: Refers to the space that exists between children controls inside the Stack. This is controlled via `gap` property.

Stacks can be nested inside one another in order to be able to configure the layout of the application as desired.

## Usage

### Horizontal stack

<Tabs defaultValue="demo" values={[
  { label: 'Demo', value: 'demo', },
  { label: 'Python', value: 'python', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'Bash', value: 'bash', },
]}>

<TabItem value="demo">
  <Replit src="https://python-demo.pglet.repl.co/#horizontal_stack" height="100px" />
</TabItem>

<TabItem value="python">

```python
stack1 = page.add(Stack(horizontal=True, controls=[
    Button(id="ok", text="OK"),
    Button(id="cancel", text="Cancel")
]))
```

</TabItem>

<TabItem value="bash">
</TabItem>

<TabItem value="powershell">
</TabItem>

<TabItem value="node">
</TabItem>

</Tabs>

### Vertical stack

<Tabs defaultValue="demo" values={[
  { label: 'Demo', value: 'demo', },
  { label: 'Python', value: 'python', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'Bash', value: 'bash', },
]}>

<TabItem value="demo">
  <Replit src="https://python-demo.pglet.repl.co/#vertical_stack" height="100px" />
</TabItem>

<TabItem value="python">

```python
stack1 = page.add(Stack(horizontal=True, controls=[
    Button(id="ok", text="OK"),
    Button(id="cancel", text="Cancel")
]))
```

</TabItem>

<TabItem value="bash">
</TabItem>

<TabItem value="powershell">
</TabItem>

<TabItem value="node">
</TabItem>

</Tabs>

## Properties

| Name              | Type      | Default | Description |
| ----------------- | --------- | ------- | ----------- |
| `horizontal`      | bool      | `false` | Defines whether to render Stack children horizontally. |
| `verticalFill`    | bool      | `false` | Defines whether the Stack should take up 100% of the height of its parent. |
| `horizontalAlign` | string    |         | Defines how to align stack children horizontally: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `baseline` or `stretch`. |
| `verticalAlign`   | string    |         | Defines how to align stack children vertically: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `baseline` or `stretch`. |
| `minWidth`        | string    |         | The minimum stack width. |
| `maxWidth`        | string    |         | The maximum stack width. |
| `minHeight`       | string    |         | The minimum stack height. |
| `maxHeight`       | string    |         | The maximum stack height. |
| `gap`             | string    |         | A gap between stack child controls. |
| `wrap`            | bool      | `false` | Defines whether Stack children should wrap onto multiple rows or columns when they are about to overflow the size of the Stack. |
| `bgcolor` | string  |         | Stack background color. |
| `border`  | string  |         | Border around stack in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `borderRadius` | string  |         | Border radius. |
| `borderLeft`   | string  |         | Border of the left side of stack in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `borderRight`  | string  |         | Border of the right side of stack in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `borderTop`    | string  |         | Border of the top side of stack in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `borderBottom` | string  |         | Border of the bottom side of stack in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `scrollx`         | bool      | `false` | Enable horizontal scrolling if stack contents doesn't fit into stack boundaries. |
| `scrolly`         | bool      | `false` | Enable vertical scrolling if stack contents doesn't fit into stack boundaries. |

### Child controls

* Any control - will be rendered in the body of the stack.