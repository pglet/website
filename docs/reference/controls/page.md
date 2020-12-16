---
title: Page
sidebar_label: Page
slug: page
---

Page is the top most container for all other controls.
It is is automatically added when a new page is created or app session started.

Page control has a reserved `page` control ID. You cannot add Page control, however you can change its properties. Technically, the Page is a vertical [Stack](stack) control, so it has similar behavior and shares some properties.

## Properties

| Name              | Type      | Default       | Description |
| ----------------- | --------- | ------------- | ----------- |
| `title`           | string    | `{page_name} - pglet`          | A title of browser window.            |
| `verticalFill`    | bool      | `false`       | Defines whether page contents takes 100% of the height of browser window.   |
| `horizontalAlign` | string    | `start`         | Defines how to align page children horizontally: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `baseline` or `stretch`. |
| `verticalAlign`   | string    |               | Defines how to align page children vertically: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `baseline` or `stretch`.    |
| `width`           | string    | `100%`          | The width of a page container.            |
| `padding`           | string    | `10px`          | The padding of a page container.            |
| `gap`           | string    | `10`          | A gap between page child controls.            |

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="languages" defaultValue="python" values={[
  { label: 'Python', value: 'python', },
  { label: 'Bash', value: 'bash', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'JavaScript', value: 'javascript', },
]}>

<TabItem value="python">

Creating a new page with a random name and connecting to it:

```python
import pglet

page = pglet.page()
```

Create a new app with name `app1` and wait for connections. `web=True` makes app UI displaying at [pglet.io](https://app.pglet.io).
`main` function is an entry point for a new user session. When a new user connects we just greem them with `Hello, world!` message:

```python
def main(page):
  page.add(Text(value="Hello, world!"))

pglet.app("app1", web=True, target=main)
```

To update page title:

```python
page.update(Page(title="My App!"))
```

</TabItem>

<TabItem value="bash">

```bash
# TODO
```

</TabItem>

<TabItem value="powershell">

```powershell
# TODO
```

</TabItem>

<TabItem value="javascript">

```javascript
// TODO
```

</TabItem>

</Tabs>