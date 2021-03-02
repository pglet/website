---
title: Deep linking
sidebar_label: Deep linking
slug: deep-linking
---

*[Deep linking](https://en.wikipedia.org/wiki/Deep_linking) is the use of a hyperlink that links to a specific, generally searchable or indexed, piece of web content on a website (e.g. "http://example.com/path/page"), rather than the website's home page (e.g., "http://example.com"). The URL contains all the information needed to point to a particular item.*

As every Pglet page is, essentially, a web app it would be "natural" being able to "navigate" between application areas (or states) by providing direct URL to the part.

For example, we might have two tabs in the app: "Products" and "Services". The current way to get onto "Services" tab is to open app URL [http://pglet/myapp](http://pglet/myapp) which, by default, starts with "Products" screen and then click "Services" tab. But how do we provide a direct link to "Services" page?

Similar to Single-Page App (SPA) frameworks Pglet utilizes URL hash to navigate (switch) between multiple application states, e.g. [http://pglet/myapp**#Services**](http://pglet/myapp#Services).

## Reading page hash

On the start of a new app session you can read `hash` property of the `page` control to get the initial page hash and based on that decide what initial screen to present to a user.

For example, you build a page with `Tabs` control and 3 tabs: "Home", "Products" and "Services":

```bash
pglet_send "add
  tabs id=tabs1
    tab text=Home
    tab text=Products
    tab text=Services"
```

You may decide that the value in the page hash is the name of the selected tab, so user can use [https://app-url/**#Products**](https://app-url/#Products) URL to open "Products" tab right away when a new session starts.

You can retrieve `hash` property of `page` control and set as a `value` (selected tab) of tabs control:

```bash
page_hash=$(pglet_send "get page hash")
pglet_set "tabs1 value=$page_hash"
```

## Watching hash changes

To get notified every time a user updates URL hash manually or by clicking a link you can watch for `hash` event of `page` control.

For example, you can update selected tab every time page hash changes:

```bash
while true
do
    pglet_wait_event
    if [[ "$PGLET_EVENT_TARGET" == "page" && "$PGLET_EVENT_NAME" == "hash" ]]; then
        pglet_set "tabs1 value=$PGLET_EVENT_DATA"
    fi
done
```

Event data `$PGLET_EVENT_DATA` contains a new value of page hash.

## Updating page hash

You can update page hash from your program by setting `hash` property of `page` control.

For example, every time a new tab selected we can update page hash to the selected tab:

```bash
if [[ "$PGLET_EVENT_TARGET" == "tabs1" ]]; then
    page_hash=$(pglet_get_value "tabs1")
    pglet_set "page hash=$page_hash"
fi
```

You can play with the example from this guide and see its full sources on Repl.it: https://repl.it/@pglet/bash-page-hash-demo

Try the following:

1. Open default app URL without a hash: https://bash-page-hash-demo--pglet.repl.co - "Home" tab will be active.
2. Click on tabs and see URL hash changing to the selected tab name - that's page hash changing by the program.
3. Click "Services" tab, copy page URL and then open it in a new browser window https://bash-page-hash-demo--pglet.repl.co/#Services - "Services" tab will be selected.
