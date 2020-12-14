---
title: Progress
sidebar_label: Progress
slug: progress
---

Progress are used to show the completion status of an operation lasting more than 2 seconds. If the state of progress cannot be determined, use a [Spinner](spinner) instead.

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `value`        | number  |         | Percentage of the operation's completeness, numerically between 0 and 100. If this is not set, the indeterminate progress animation will be shown instead. |
| `label`        | string  |         | Label to display above the control. |
| `description`  | string  |         | Text describing or supplementing the operation.  |