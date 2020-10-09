---
title: Row
sidebar_label: Row
slug: row
---

Represents a **row** in the grid layout. Row can only contain [columns](/docs/controls/col).

## Properties

### `id`

Control ID. Auto-generated if not specified explicitly.

### `visible`

`true` - the control is visible; `false` - control is hidden, but still takes up space in the layout.

## Examples

Bash example to add a new row with `header` ID:

```bash
'add row id="header"' > $PAGE_PIPE
```