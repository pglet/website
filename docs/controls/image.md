---
title: Image
sidebar_label: Image
slug: image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An image is a graphic representation of something (e.g photo or illustration).

## Examples

[Live demo](https://python-image-example.pgletio.repl.co)

## Properties

| Name           | Type     | Default  | Description |
| -------------- | -------- | -------- | ----------- |
| `src`          | string    |          | Image source URL. |
| `alt`          | string    |          | The `imageAlt` attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility — screen readers read this description out to their users so they know what the image means. Alt text is also displayed on the page if the image can't be loaded for some reason: for example, network errors, content blocking, or linkrot. |
| `title`        | string    |          | Popup hint. |
| `fit`          | string    |          | Used to determine how the image is scaled and cropped to fit the frame. Allowed values: `none`, `contain`, `cover`, `center`, `centerContain`, `centerCover` |
| `maximizeFrame` | boolean | `false`  | If `true`, the image frame will expand to fill its parent container. |
| `borderWidth`  | string  |         | Border width in pixels around control, e.g. `1`. Multiple values separated with spaces can be provided to set border width for each of the sides: `top right bottom left`, e.g. `2 0 2 0`. |
| `borderColor`  | string  |         | Border color around control. Multiple values separated with spaces can be provided to set border color for each of the sides: `top right bottom left`, e.g. `yellow green blue gray`. |
| `borderStyle`  | string  |         | Border style around control: `none` (default), `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset`. Multiple values separated with spaces can be provided to set border style for each of the sides: `top right bottom left`, e.g. `solid none none none`. |
| `borderRadius` | string  |         | Border radius in pixels, e.g. `5`. Multiple values separated with spaces can be provided to set border style for each of the sides: `top right bottom left`, e.g. `10 10 0 0`. |