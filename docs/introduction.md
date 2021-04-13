---
id: introduction
title: Introduction
slug: /
---

## What is Pglet

Pglet (*"piglet"*) is a rich user interface (UI) framework for scripts and programs written in any language. [Python](/docs/tutorials/python), [Bash](/docs/tutorials/bash), [PowerShell](/docs/tutorials/powershell) and [Node.js](/docs/tutorials/node) are already supported and other languages can be easily added via [Pglet protocol](/docs/reference/protocol).

Pglet renders web UI, so you can easily build web apps with your favorite language. Knowledge of HTML/CSS/JavaScript is not required as you build UI with [controls](/docs/controls). Pglet controls are built with [Fluent UI React](https://developer.microsoft.com/en-us/fluentui#/controls/web) to ensure your programs look cool and professional.

## Hello, world!

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="languages" defaultValue="python" values={[
  { label: 'Python', value: 'python', },
  { label: 'Bash', value: 'bash', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'Node.js', value: 'node', },
]}>

<TabItem value="python">

Install `pglet` module:

```bash
pip install pglet
```

Create `hello.py` with the following contents:

```python title="hello.py"
import pglet
from pglet import Text

p = pglet.page()
p.add(Text(value="Hello, world!"))
```

Run `hello.py` with Python 3 and in a new browser window you'll get:

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>

Here is a local page served by an instance of Pglet server started in the background on your computer.

Now let's bring that page to a web, so others can see it!

Add `web=True` to `pglet.page` call:

```python {1}
p = pglet.page(web=True)
p.add(Text(value="Hello, world!"))
```

</TabItem>

<TabItem value="bash">

Download script with helper Pglet functions:

```bash
curl -O https://pglet.io/pglet.sh
```

Create `hello.sh` with the following contents:

```bash title="hello.sh"
. pglet.sh

pglet_page
pglet_add "text value='Hello, world!'"
```

Run `sh hello.sh` and in a new browser window you'll get:

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>

Here is a local page served by an instance of Pglet server started in the background on your computer.

Now let's bring that page to a web, so others can see it!

Add `PGLET_WEB=true` before `pglet_page` call:

```bash {1}
PGLET_WEB=true pglet_page
pglet_add "text value='Hello, world!'"
```

</TabItem>

<TabItem value="powershell">

Install `pglet` module:

```powershell
Install-Module pglet
```

Create `hello.ps1` with the following contents:

```powershell title="hello.ps1"
Import-Module pglet

Connect-PgletPage
Invoke-Pglet "add text value='Hello, world!'"
```

Run `hello.ps1` in a PowerShell session and in a new browser window you'll get:

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>

Here is a local page served by an instance of Pglet server started in the background on your computer.

Now let's bring that page to a web, so others can see it!

Add `-Web` parameter to `Connect-PgletPage` call:

```powershell {1}
Connect-PgletPage -Web
Invoke-Pglet "add text value='Hello, world!'"
```

</TabItem>

<TabItem value="node">

Install `pglet` module:

```bash
npm install pglet
```

Create `hello.js` with the following contents:

```javascript title="hello.js"
const pglet = require("pglet");

(async () => {
    let p = await pglet.page();
    await p.send("add text value='Hello, world!'");
})();
```

Run `node hello.js` and in a new browser window you'll get:

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>

Here is a local page served by an instance of Pglet server started in the background on your computer.

Now let's bring that page to a web, so others can see it!

Add `{ web: true }` option to `pglet.page` call:

```javascript {1}
  let p = await pglet.page({ web: true });
  await p.send("add text value='Hello, world!'");
```

</TabItem>

</Tabs>

This time the page will be created on [Pglet hosted service](/docs/pglet-service).

## Tutorials

Want to learn how to build the real app? Jump to a tutorial for your language:

* [Python](/docs/tutorials/python)
* [Bash](/docs/tutorials/bash)
* [PowerShell](/docs/tutorials/powershell)
* [Node.js](/docs/tutorials/node)