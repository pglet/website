---
title: Get command
sidebar_label: Get
slug: get
---

Get the value of control property.

```bash
get <control-id> <property>
```

## Description

`get` command returns the value of control property.

## Examples

```bash
'get form:firstName value' > $PAGE_PIPE
read $firstName < $PAGE_PIPE
```

This command reads `value` property of `textbox` control with `form:firstName` ID.

## Parameters

### control-id

Control ID to read property of.

### property

The name of the property to read.
