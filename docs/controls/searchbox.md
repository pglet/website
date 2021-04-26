---
title: SearchBox
sidebar_label: SearchBox
slug: searchbox
---

A search box provides an input field for searching content within a site or app to find specific items.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-searchbox-example.pgletio.repl.co" height="450px"
    python="https://github.com/pglet/examples/blob/main/python/controls/searchbox_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/searchbox.sh"
    />

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `value`        | string |         | The value of the text in the SearchBox. |
| `placeholder`  | string |         | Placeholder for the search box. |
| `underlined`   | bool   | `false` | Whether or not the SearchBox is underlined. |
| `icon`         | string |         | Replace "search" icon with a custom one. |
| `iconColor`    | string |         | Icon color. |
| `data`         | string |         | Additional data attached to the control. The value is passed in event data. |
| `onChange`     | bool   | `false` | Whether `change` event should be fired while text is typed into the SearchBox. This property is used by command-based client libraries only like Bash. |

## Events

| Name      | Description |
| --------- | ----------- |
| `search`  | Fires when the user presses Enter in the search box. |
| `clear`  | Fires when the user clears the search box by either clicking 'X' or hitting escape. |
| `change`  | Fires when the typed input for the SearchBox has changed. For performance optimization this event is disabled unless `onChange` property set to `true`. |
