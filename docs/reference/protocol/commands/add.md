---
title: Add command
sidebar_label: Add
slug: add
---

Adds a new control to a page.

```bash
add <control-type>
  [id=<string>]
  [to=<string>]
  [at=<int>]
  [trim=<int>]
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

### `trim`

`trim` allows to specify the maximum number of children to leave after adding new child controls.
Negative `trim` value trims items from the end; positive - from the start.

For example, if we have the following controls tree:

```
page
  stack id=lines
    text value='Line 1'
    text value='Line 2'
    text value='Line 3'
```

Running `add to=lines trim=3 text value='Line 4'` will result into:

```
page
  stack id=lines
    text value='Line 2'
    text value='Line 3'
    text value='Line 4'
```

so controls were trimmed from the start to have a total number of children at `3`.

On the other hand, running `add to=lines at=0 trim=-3 text value='Line 4'` will result into:

```
page
  stack id=lines
    text value='Line 4'
    text value='Line 1'
    text value='Line 2'
```

so new control was insterted to `lines` stack at position 0 and controls were trimmed from the end to have a total number of children at `3`.