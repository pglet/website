---
title: Pglet Service
sidebar_label: Overview
slug: /pglet-service
---

<p style={{fontSize: '16pt'}}>Pglet Service is a secure, always updated, highly-available and fault-tolerant installation of Pglet server.</p>

:::caution
Pglet Service is currently in Technical Preview and not intended for running production apps. Use it on your own risk. The service might be unavailable at any time and data could be periodically erased.
:::

When your program or script using Pglet is ready and tested you can start "streaming" its UI to a centralized Pglet server installed in your organization or a hosted Pglet service.

Use Pglet service if you need to instantly bring your apps to the web rather than dealing with a hosting of your own Pglet server instance and all the related hassle such as securing a web server, installing SSL certificates, updating Pglet server and underlying OS, doing backups.

To redirect application UI to Pglet hosted service:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="languages" defaultValue="python" values={[
  { label: 'Python', value: 'python', },
  { label: 'Bash', value: 'bash', },
  { label: 'PowerShell', value: 'powershell', },
  { label: 'Node.js', value: 'node', },
]}>

<TabItem value="python">

Add `web=True` to `pglet.page` or `pglet.app` calls:

```python
p = pglet.page(web=True)
```

</TabItem>

<TabItem value="bash">

Add `PGLET_WEB=true` before `pglet_page` or `pglet_app` calls:

```bash
PGLET_WEB=true pglet_page
```

</TabItem>

<TabItem value="powershell">

Add `-Web` parameter to `Connect-PgletPage` or `Connect-PgletApp` calls:

```powershell
Connect-PgletPage -Web
```

</TabItem>

<TabItem value="node">

Add `{ web: true }` option to `pglet.page` or `pglet.app` calls:

```javascript
  let p = await pglet.page({ web: true });
```

</TabItem>

</Tabs>

## Naming pages

Pglet page URLs have the following format:

```
https://app.pglet.io/{account_name}/{page_name}
```

`{account_name}` and `{page_bane}` should be max 60 symbols and consists of `a-z`, `0-9` and '-'.

`{account_name}` is a namespace and could be your username or organization name.

`{account_name}` defaults to `public` if not specified for a new page or app.

`{page_name}` defaults to a random string under `public` account if not specified for a new page or app. 

## Preview limitations

During Preview Pglet Service is working in a public non-authenticated mode with some constraints applied.
Anonymous clients are tracked by IP address, so there might be situations when many users from the same network quickly exhaust allowed quotas.

### Pages

* `{account_name}` can be anything.
* Anonymous client can create up to 10 pages per hour.
* Once a page is created from a certain IP it must be updated from the same IP; otherwise page name could not be reused untill the page is expired and its name reclaimed.
* Shared page lifetime is limited to 6 hours since the last time it was updated.
* App page lifetime is limited to 60 minutes since the last time any app session was updated.

### Sessions

* Anonymous client can create up to 10 app sessions per hour.
* App page session lifetime is limited to 60 minutes since the last time it was accessed or updated.
* When a host client serving an app page is disconnected all app sessions are immediately invalidated.
  That's a convenient "feature" during beta-testing because when user restarts the app and refreshes the page in the browser they'll start a new session.

### Page size

* Maximum size of a page or app session is limited to 1 MB.

