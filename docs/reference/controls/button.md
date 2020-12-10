---
title: Button
sidebar_label: Button
slug: button
---

Represents a **button** form element. Button generates `click` event.

[IMAGE]

## Properties

### `id`

Control ID. Auto-generated if not specified explicitly.

### `text`

Button text.

### `visible`

`true` - the control is visible; `false` - control is hidden, but still takes up space in the layout.

## Examples

Bash command that adds a button to `form` container:

```bash
'add button text="Greet" id=greet to=form' > $PAGE_PIPE
```

Bash command that waits for the button to be clicked:

```bash
read eventTarget eventName < "$PAGE_PIPE.events"
if [[ "$eventTarget" == "greet" && "$eventName" == "click" ]]; then
    echo 'Button clicked!'
fi
```