---
title: Add
sidebar_label: Add
slug: add
---

Adds a new control to a page.

```bash
add <control-type>
  [id=<string>]
  [to=<string>]
  [at=<int>]
  property1=value
  property2=value
  ...
```

## Description

`add` command adds a new control to a page.

## Examples

```bash
add text to=header value="Welcome back!"
```

This command adds a new `text` control to a column with id `header`.

## Parameters

### `control-type`

The type of the control.

### `id`

Control ID. ID will be auto-generated if not specified. If you need to get generated ID replace `add` command with `addr` which means "add with result", for example in Bash:

```bash
# Add new row and get its ID
"addr row" > $PAGE_PIPE
read $rowID < $PAGE_PIPE

# Add column to the row and get its ID
"addr col to=$rowID" > $PAGE_PIPE
read $colID < $PAGE_PIPE

# Add text to a column and dismiss the result
"add text to=$colID value='Hello, world'" > $PAGE_PIPE
```

### `to`

Parent control ID. If not specified the control is added to the bottom of the page.

### `at`

Insert control at the specified position in the children collection.