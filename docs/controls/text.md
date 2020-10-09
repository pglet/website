---
title: Text
sidebar_label: Text
slug: text
---

Represents a text paragraph.

## Properties

### `id`

Control ID. Auto-generated if not specified explicitly.

### `value`

Text contents. Markdown is supported.

### `visible`

`true` - the control is visible; `false` - control is hidden, but still takes up space in the layout.

## Examples

Bash example to add text control with auto-generated ID to `body` container:

```bash
'add text value="Hello, world" to="body"' > $PAGE_PIPE
```