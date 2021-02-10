---
title: Panel
sidebar_label: Panel
slug: panel
---

Panels are overlays that contain supplementary content and are used for complex creation, edit, or management experiences.  For example, viewing details about an item in a list or editing settings.

## Properties

| Name          | Type    | Default | Description |
| ------------- | ------- | ------- | ----------- |
| `open`        | bool    | `false` | Whether the panel is shown. |
| `title`       | string  |         | The title text to display at the top of the panel. |
| `type`        | string  |         | Type of the panel: `small`, `smallLeft`, `medium`, `large`, `largeFixed`, `extraLarge`, `fluid`, `custom`, `customLeft`. |
| `autoDismiss` | bool    | `false` | Whether panel should be automatically hidden when dismissed. |
| `lightDismiss` | bool    | `false` | Whether the panel can be light dismissed. |
| `width`       | string  |         | Custom width of `custom` or `customLeft` type panel. |
| `blocking`    | bool    | `false` | Whether the panel uses a modal overlay or not. |
| `data`        | string  |         | Additional data attached to the control. The value is passed in `dismiss` event data. |

## Events

| Name      | Description |
| --------- | ----------- |
| `dismiss` | Fires when the panel is dismissed. Panel is dismissed when a user clicks "close" button or clicks outside of non-blocking panel. |

## Child controls

* Any control - will be rendered in the body of the panel.
* [`Footer`](#footer-control)

## `Footer` control

Serves as a container for panel footer controls.

### Child controls

Any control.

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

```python
# TODO
```

</TabItem>

<TabItem value="bash">

[Panel control live demo in Bash](https://repl.it/@pglet/bash-panel-example)

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