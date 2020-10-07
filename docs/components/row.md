---
title: Row
sidebar_label: Row
slug: row
---

Represents a **row** in the grid layout. Row can only contain [columns](/docs/components/col).

## Properties

### `id`

Component ID. Auto-generated if not specified explicitly.

### `visible`

`true` - the component is visible; `false` - component is hidden, but still takes up space in the layout.

## Examples

Bash example to add a new row with `header` ID:

```bash
'add row id="header"' > $PAGE_PIPE
```