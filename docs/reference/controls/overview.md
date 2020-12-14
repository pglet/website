---
title: Overview
sidebar_label: Overview
slug: /reference/controls
---

Pglet UI is built of controls. Most controls are composed from multiple HTML elements, have finished functionality and sane defaults to make UI development as quick and pleasant as possible. For example, [Textbox](controls/textbox) control is not just `<input type="text">` in terms of HTML, but it has an attached label, description, validation message and a help tip.

Controls are organized into hierarchy, or a tree, where each control has a parent (except [Page](controls/page)) and container controls like [Stack](controls/stack), [Dropdown](controls/dropdown) can contain child controls, for example:

```
Page
 ├─ Textbox
 ├─ Dropdown
 │   ├─ Option
 │   └─ Option
 └─ Stack
     ├─ Button
     └─ Button
```

## Control ID

Every control on a page has an **ID**. If `id` is not specified when adding a control it will be auto-generated.
Auto-generated IDs have format of `_{number}`, for example `_1`, `_2`. [Add](/docs/reference/protocol/commands/add) command always returns the ID of a control which can be saved for future reference.

User-defined IDs can contain alphanumerics (`A-Za-z0-9`), dash (`-`) and underscore (`_`). However, user-defined ID should not start from `_` and cannot contain `:` which is used to separate parts of an unique ID.

### Unique ID

To guarantee the uniqueness of user-defined IDs across the page Pglet automatically prefixes them with parent ID when adding control to a page. Only user-defined IDs will be used as parts of unique ID.

For example, you may want to add a [Button](controls/button) with `id=ok` into two stacks: one with an auto-generated ID `_1` and another one with user-defined `id=footer`:

```
...
Stack id=_1
 └─ Button id=ok
Stack id=footer
 └─ Button id=footer:ok
```

Once controls added to a page the ID of a second button will be prefixed with `footer:` and thus it will be referenced later as `footer:ok`, for example as [event target](/docs/reference/protocol#events).

## Common properties

All Pglet controls have the following properties:

| Name       | Type      | Default       | Description |
| ---------- | --------- | ------------- | ----------- |
| `id`       | string    |               | Auto-generated or user-defined control ID.    |
| `visible`  | bool      | `true`        | Defines whether control is visible. |
| `disabled` | bool      | `false`       | Defines whether control and all its children (if any) are disabled. |
| `width`    | string    |               | Width of the control, for example `100px`, `50%`.    |
| `height`   | string    |               | Height of the control.    |
| `padding`  | string    |               | Padding of the control.    |
| `margin`   | string    |               | Margin of the control.    |