---
title: Button
sidebar_label: Button
slug: button
---

Represents a **button** form element. Button generates "click" event.

[IMAGE]

## Properties

| Property | Description |
| -------- | --------- |
| **id**  | Component ID. Auto-generated if not specified explicitly. |
| **text**  | Button text. |
| **visible**        | `true` - the component is visible; `false` - component is hidden, but still takes up space in the layout. |

## Example

Bash example to add button component to `form` container:

```bash
'add button text="Greet" id=greet to=form' > $page
```

Bash example waiting for the button to be clicked:

```bash
read eventTarget eventName < "$page.events"
if [[ "$eventTarget" == "greet" && "$eventName" == "click" ]]; then
    echo 'Button clicked!'
fi
```