---
title: IFrame
sidebar_label: IFrame
slug: iframe
---

IFrame control allows embedding an HTML page into the current one.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import IFrame

page = pglet.page()
page.add(IFrame(src="https://pglet.io"))
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

## Properties

| Name           | Type     | Default  | Description |
| -------------- | -------- | -------- | ----------- |
| `src`          | string   |          | The URL of the page to embed. |
| `title`        | string   |          | Allows labeling content inside the IFrame for people navigating with assistive technology such as a screen reader. |
| `borderWidth`  | string   |          | Border width in pixels around control, e.g. `1`. Multiple values separated with spaces can be provided to set border width for each of the sides: `top right bottom left`, e.g. `2 0 2 0`. |
| `borderColor`  | string   |          | Border color around control. Multiple values separated with spaces can be provided to set border color for each of the sides: `top right bottom left`, e.g. `yellow green blue gray`. |
| `borderStyle`  | string   |          | Border style around control: `none` (default), `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset`. Multiple values separated with spaces can be provided to set border style for each of the sides: `top right bottom left`, e.g. `solid none none none`. |
| `borderRadius` | string   |          | Border radius in pixels around control, e.g. `5`. Multiple values separated with spaces can be provided to set border style for each of the sides: `top right bottom left`, e.g. `10 10 0 0`. |