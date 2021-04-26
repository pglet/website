---
title: Link
sidebar_label: Link
slug: link
---

Link navigates to an external web page or initiate command within the app.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-link-example.pgletio.repl.co" height="250px"
    python="https://github.com/pglet/examples/blob/main/python/controls/link_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/link.sh"
    />

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | string  |         | Link text. |
| `url`     | string  |         | Link URL to navigate. If `url` is not specified the link will be firing `click` event. |
| `newWindow`    | bool    | `false` | Whether to open link in a new browser window. |
| `title`        | string |         | Popup hint for the link. |
| `size`    | string  |         | `tiny`, `xSmall`, `small`, `smallPlus`, `medium`, `mediumPlus`, `large`, `xLarge`, `xxLarge`, `superLarge`, `mega`  |
| `bold`    | bool    | `false` | Whether font weight is bold. |
| `italic`  | bool    | `false` | Whether font style is italic. |
| `pre`     | bool    | `false` | Preformatted text in monospace font. |
| `align`   | string  | `left`  | `left`, `center`, `right`, `justify`  |

## Events

| Name      | Description |
| --------- | ----------- |
| `click`   | Fires when a user clicks the link. |

## Child controls

* Any control - will be wrapped by the link.