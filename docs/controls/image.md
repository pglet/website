---
title: Image
sidebar_label: Image
slug: image
---

An image is a graphic representation of something (e.g photo or illustration).

import { CodeSample } from '@site/src/components/code-sample';

## Examples

<CodeSample src="https://python-image-example.pgletio.repl.co" height="700px"
    python="https://github.com/pglet/examples/blob/main/python/controls/image_control.py"
    bash="https://github.com/pglet/examples/blob/main/bash/controls/image.sh"
    />

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `src`         | string  |  | Image source URL. |
| `alt`        | string  |          | Image alternative text. |
| `title` | string  |  | Popup hint. |
| `fit`        | string  |          | Used to determine how the image is scaled and cropped to fit the frame. Allowed values: `none`, `contain`, `cover`, `center`, `centerContain`, `centerCover` |
| `maximizeFrame` | boolean | `false` | If true, the image frame will expand to fill its parent container. |

