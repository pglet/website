---
title: Replace command
sidebar_label: Replace
slug: replace
---

Replaces one or more controls on a page.

```bash
replace <control-type> to=<string>
  [id=<string>]
  [at=<int>]
  property1=value
  property2=value
  ...
```

## Description

`replace` command replaces one or more controls on a page with a new control or a tree. It subsequently executes `clean` and then `add` commands as a single "transaction" which helps avoid flickering when `clean` and `add` executed separately.

## Examples

```bash
replace text to=header value="Welcome back!"
```

This command removes all children of `header` control and then adds a new `text` control.

## Parameters

### `control-type`

The type of the control.

### `id`

Control ID. ID will be auto-generated if not specified. If you need to get generated ID replace `add` command with `addr` which means "add with result", for example in Bash:

### `to`

Parent control ID.

### `at`

Replace control at the specified position in the children collection.