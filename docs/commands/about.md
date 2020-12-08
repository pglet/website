---
title: About commands
sidebar_label: About
slug: about
---

About commands

import Tabs from '@theme/Tabs';

<Tabs defaultValue="python" values={[
  { label: 'Python', value: 'python', },
  { label: 'Bash', value: 'bash', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'JavaScript', value: 'javascript', },
]}>

import TabItem from '@theme/TabItem';

<TabItem value="python">

```python
import pglet

pglet.page("myapp")
```
</TabItem>

<TabItem value="bash">

```bash
. ~/pglet.sh
PGLET_PUBLIC=false pglet_page

#echo "$PGLET_CONNECTION_ID"

function hello() {
    echo "Hello!"
}

pglet_send "add text value='Hello, world!'"
pglet_send "add button id=ok text=OK"
pglet_dispatch_events "ok click hello"
```
</TabItem>

<TabItem value="powershell">

```powershell
command2-test arg1 arg2 ...
```

</TabItem>

<TabItem value="javascript">

```javascript
const pglet = require("pglet");
```

</TabItem>

</Tabs>