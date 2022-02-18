---
title: Html
sidebar_label: Html
slug: html
---

`Html` control allows inserting a raw HTML to the page.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Html

page = pglet.page()
page.add(Html("<b>This is bold text!</b>"))
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
| `value`        | string   |          | HTML code to insert. |