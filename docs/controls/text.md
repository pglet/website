---
title: Text
sidebar_label: Text
slug: text
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Text is a control for displaying text.

## Examples

[Live demo](https://python-text-example.pgletio.repl.co)

### Size

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Text
with pglet.page("text-size") as page:
  
  page.add(
    Text('tiny', size='tiny'),
    Text('xSmall', size='xSmall'),
    Text('small', size='small'),
    Text('smallPlus', size='smallPlus'),
    Text('medium', size='medium'),
    Text('mediumPlus', size='mediumPlus'),
    Text('large', size='large'),
    Text('xLarge', size='xLarge'),
    Text('xxLarge', size='xxLarge'),
    Text('superLarge', size='superLarge'),
    Text('mega', size='mega'))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/text/text-size.png" width="50%" />

### Font styles

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Text
with pglet.page("text-with-different-font-styles") as page:
  
  page.add(
    Text('Bold', bold=True),
    Text('Italic', italic=True),
    Text('Preformatted text in monospace font', pre=True))
  
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/text/text-font-styles.png" width="50%" />

### Horizontal and vertical alignments

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Text, Stack
with pglet.page("text-alignments") as page:
  
  page.add(
    Stack(horizontal=True, controls=[
            Text('left top', align='left', vertical_align='top', width=100, height=100, bgcolor='salmon', color='white', padding=5),
            Text('center top', align='center', vertical_align='top', width=100, height=100, bgcolor='salmon', color='white', padding=5, size='large', border='1px solid #555'),
            Text('right top', align='right', vertical_align='top', width=100, height=100, bgcolor='salmon', color='white', padding=5, border='2px solid #555')
        ]),
        Stack(horizontal=True, controls=[
            Text('left center', align='left', vertical_align='center', width=100, height=100, bgcolor='PaleGoldenrod', padding=5),
            Text('center center', align='center', vertical_align='center', width=100, height=100, bgcolor='PaleGoldenrod', padding=5, size='large', border='1px solid #555'),
            Text('right center', align='right', vertical_align='center', width=100, height=100, bgcolor='PaleGoldenrod', padding=5, border='2px solid #555')
        ]),
        Stack(horizontal=True, controls=[
            Text('left bottom', align='left', vertical_align='bottom', width=100, height=100, bgcolor='PaleGreen', padding=5),
            Text('center bottom', align='center', vertical_align='bottom', width=100, height=100, bgcolor='PaleGreen', padding=5, size='large', border='1px solid #555'),
            Text('right bottom', align='right', vertical_align='bottom', width=100, height=100, bgcolor='PaleGreen', padding=5, border='2px solid #555')
        ]))
  
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/text/text-alignments.png" width="50%" />

### Border with rounded corners

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Text, Stack
with pglet.page("text-rounded-corners") as page:
  
  page.add(Stack(horizontal=True, controls=[
    Text('Border radius 10% of width/height', align='center', vertical_align='center', width=100, height=100, border_radius=10, bgcolor='salmon'),
    Text('Border radius 25% of width/height', align='center', vertical_align='center', width=100, height=100, border_radius=25, bgcolor='PaleGoldenrod', border='1px solid #555'),
    Text('Border radius 50% of width/height', align='center', vertical_align='center', width=100, height=100, border_radius=50, bgcolor='PaleGreen', border='2px solid #555')
    ])
  )
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/text/text-rounded-corners.png" width="50%" />

### Markdown

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

````python
import pglet
from pglet import Text
with pglet.page("text-markdown") as page:
  
  page.add(Text('''
# Heading1

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Strikethrough

~one~ or ~~two~~ tildes.

### Code sample

```
import pglet
page = page.page()
```

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

        ''', markdown=True))
````
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/text/text-markdown.png" width="50%" />

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
