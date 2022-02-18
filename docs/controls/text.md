---
title: Text
sidebar_label: Text
slug: text
---

Text is a control for displaying text.

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-text-example.pgletio.repl.co" height="1050px"
    python="https://github.com/pglet/examples/blob/main/python/controls/text_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/text.sh"
    />

## Properties

| Name      | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| `value`   | string  |         | The text displayed. |
| `markdown` | bool  | `false` | Treat `value` as [markdown](https://remarkjs.github.io/react-markdown/). [GitHub Flavored Markdown](https://github.github.com/gfm/) is supported. |
| `align`   | string  | `left`  | `left`, `center`, `right`, `justify`  |
| `verticalAlign`   | string  |   | `top`, `center`, `bottom`  |
| `size`    | string  |         | `tiny`, `xSmall`, `small`, `smallPlus`, `medium`, `mediumPlus`, `large`, `xLarge`, `xxLarge`, `superLarge`, `mega`  |
| `bold`    | bool    | `false` | Whether font weight is bold. |
| `italic`  | bool    | `false` | Whether font style is italic. |
| `pre`     | bool    | `false` | Preformatted text in monospace font. |
| `nowrap`  | bool    | `false` | Whether the text is not wrapped. |
| `block`   | bool    | `false` | Whether the text is displayed as a block element. |
| `color`   | string  |         | Font color. |
| `bgcolor` | string  |         | Text background color. |
| `borderWidth`  | string   |          | Border width in pixels around control, e.g. `1`. Multiple values separated with spaces can be provided to set border width for each of the sides: `top right bottom left`, e.g. `2 0 2 0`. |
| `borderColor`  | string   |          | Border color around control. Multiple values separated with spaces can be provided to set border color for each of the sides: `top right bottom left`, e.g. `yellow green blue gray`. |
| `borderStyle`  | string   |          | Border style around control: `none` (default), `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset`. Multiple values separated with spaces can be provided to set border style for each of the sides: `top right bottom left`, e.g. `solid none none none`. |
| `borderRadius` | string   |          | Border radius in pixels around control, e.g. `5`. Multiple values separated with spaces can be provided to set border style for each of the sides: `top right bottom left`, e.g. `10 10 0 0`. |
