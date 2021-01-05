---
id: quickstart
title: Quickstart
slug: /quickstart
---

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="languages" defaultValue="python" values={[
  { label: 'Python', value: 'python', },
  { label: 'Bash', value: 'bash', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'JavaScript', value: 'javascript', },
]}>

<TabItem value="python">

```bash
pip install pglet
```
</TabItem>

<TabItem value="bash">

```bash
curl -O https://pglet.io/pglet.sh
```
</TabItem>

<TabItem value="powershell">

```powershell
Install-Module pglet
```

</TabItem>

<TabItem value="javascript">

```bash
npm install pglet
```

</TabItem>

</Tabs>





## Hello, world!

<Tabs groupId="languages" defaultValue="python" values={[
  { label: 'Python', value: 'python', },
  { label: 'Bash', value: 'bash', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'JavaScript', value: 'javascript', },
]}>

<TabItem value="python">

```python title="hello.py"
import pglet

p = pglet.page()
p.add(Text(value="Hello, world!"))
```

Run `hello.py` with Python 3 and in a new browser window you'll get:

</TabItem>

<TabItem value="bash">

```bash title="hello.sh"
. pglet.sh

pglet_page
pglet_add "text value='Hello, world!"
```

Run `sh hello.sh` and in a new browser window you'll get:

</TabItem>

<TabItem value="powershell">

```powershell title="hello.ps1"
Import-Module pglet

Connect-PgletPage
Invoke-Pglet "add text value='Hello, world!'"
```

Run `hello.ps1` in a PowerShell session and in a new browser window you'll get:

</TabItem>

<TabItem value="javascript">

```javascript title="hello.js"
const pglet = require("pglet");

(async () => {
    let p = await pglet.page();
    await p.send("add text value='Hello, world!'");
})();
```

Run `node hello.js` and in a new browser window you'll get:

</TabItem>

</Tabs>

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>

Here is a local page served by an instance of Pglet server started in the background on your computer.

## Make it web

Now let's bring that page to a web, so others can see it.

<Tabs groupId="languages" defaultValue="python" values={[
  { label: 'Python', value: 'python', },
  { label: 'Bash', value: 'bash', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'JavaScript', value: 'javascript', },
]}>

<TabItem value="python">

Add `web=True` to `pglet.page` call:

```python {1}
p = pglet.page(web=True)
p.add(Text(value="Hello, world!"))
```

</TabItem>

<TabItem value="bash">

Add `PGLET_WEB=true` before `pglet_page` call:

```bash {1}
PGLET_WEB=true pglet_page
pglet_add "text value='Hello, world!"
```

</TabItem>

<TabItem value="powershell">

Add `-Web` parameter to `Connect-PgletPage` call:

```powershell {1}
Connect-PgletPage -Web
Invoke-Pglet "add text value='Hello, world!'"
```

</TabItem>

<TabItem value="javascript">

Add `{ web: true }` option to `pglet.page` call:

```javascript {1}
  let p = await pglet.page({ web: true });
  await p.send("add text value='Hello, world!'");
```

</TabItem>

</Tabs>

This time page will be created on [pglet.io](pglet-io-beta) hosted service.