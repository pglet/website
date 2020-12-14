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