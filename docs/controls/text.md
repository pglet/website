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
| `border`  | string  |         | Border around text in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `borderStyle` | string  |         | Border style: `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset` |
| `borderWidth` | string  |         | Border width, e.g. `1`. |
| `borderColor` | string  |         | Border color. |
| `borderRadius` | string  |         | Border radius. |
| `borderLeft`   | string  |         | Border of the left side of text in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `borderRight`  | string  |         | Border of the right side of text in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `borderTop`    | string  |         | Border of the top side of text in `<width> <style> <color>` format, e.g. `1px solid #550000` |
| `borderBottom` | string  |         | Border of the bottom side of text in `<width> <style> <color>` format, e.g. `1px solid #550000` |

