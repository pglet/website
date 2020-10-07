---
title: Add
sidebar_label: Add
slug: add
---

Adds a new component to a page.

```bash
add <component-type>
  [id=<string>]
  [to=<string>]
  [at=<int>]
  property1=value
  property2=value
  ...
```

## Description

`add` command adds a new component to a page.

## Examples

```bash
add text to=header value="Welcome back!"
```

This command adds a new `text` component to a column with id `header`.

## Parameters

### `component-type`

The type of the component.

### `id`

Component ID. ID will be auto-generated if not specified. If you need to get generated ID replace `add` command with `addr` which means "add with result", for example in Bash:

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

Parent component ID. If not specified the component is added to the bottom of the page.

### `at`

Insert component at the specified position in the children collection.