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

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `src`         | string  |  | Image source URL. |
| `alt`        | string  |          | Image alternative text. |
| `title` | string  |  | Popup hint. |
| `fit`        | string  |          | Used to determine how the image is scaled and cropped to fit the frame. Allowed values: `none`, `contain`, `cover`, `center`, `centerContain`, `centerCover` |
| `maximizeFrame` | boolean | `false` | If true, the image frame will expand to fill its parent container. |

