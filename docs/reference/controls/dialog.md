---
title: Dialog
sidebar_label: Dialog
slug: dialog
---

A dialog box (Dialog) is a temporary pop-up that takes focus from the page or app and requires people to interact with it. It’s primarily used for confirming actions, such as deleting a file, or asking people to make a choice.

## Properties

| Name          | Type    | Default | Description |
| ------------- | ------- | ------- | ----------- |
| `open`        | bool    | `false` | Whether the dialog is shown. |
| `title`       | string  |         | The title text to display at the top of the dialog. |
| `subText`     | string  |         | The subtext to display in the dialog. |
| `largeHeader` | bool    | `false` | Dialog with large header banner. |
| `autoDismiss` | bool    | `false` | Whether dialog should be automatically hidden when dismissed. |
| `width`       | string  |         | Minimum width of the dialog. |
| `maxWidth`    | string  |         | Maximum width of the dialog. |
| `height`      | string  |         | Height of the dialog. |
| `fixedTop`    | bool    | `false` | The Dialog that maintains its top position and expands only the bottom, offering a more stable appearance when a Dialog's content changes dynamically. |
| `blocking`    | bool    | `false` | Whether the dialog can be light dismissed by clicking outside the dialog (on the overlay). |
| `data`        | string  |         | Additional data attached to the control. The value is passed in `dismiss` event data. |

## Events

| Name      | Description |
| --------- | ----------- |
| `dismiss` | Fires when the dialog is dismissed. Dialog is dismissed when a user clicks "close" button or clicks outside of non-blocking dialog. |

## Child controls

* Any control - will be rendered in the body of the dialog.
* [`Footer`](#footer-control)

## `Footer` control

Serves as a container for dialog footer controls.

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

[Dialog control live demo in Bash](https://repl.it/@pglet/bash-dialogs-example)

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