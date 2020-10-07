---
title: Text
sidebar_label: Text
slug: text
---

Represents a text paragraph.

## Properties

### `id`

Component ID. Auto-generated if not specified explicitly.

### `value`

Text contents. Markdown is supported.

### `visible`

`true` - the component is visible; `false` - component is hidden, but still takes up space in the layout.

## Examples

Bash example to add text component with auto-generated ID to `body` container:

```bash
'add text value="Hello, world" to="body"' > $PAGE_PIPE
```