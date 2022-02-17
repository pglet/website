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
| `title`           | string    | `{page_name} - Pglet`          | A title of browser window.            |
| `verticalFill`    | bool      | `false`       | Defines whether page contents takes 100% of the height of browser window.   |
| `horizontalAlign` | string    | `start`         | Defines how to align page children horizontally: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `baseline` or `stretch`. |
| `verticalAlign`   | string    |               | Defines how to align page children vertically: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `baseline` or `stretch`.    |
| `width`           | string    | `100%`        | The width of a page container.            |
| `padding`         | string    | `10px`        | The padding of a page container.            |
| `gap`             | string    | `10`          | A gap between page child controls.            |
| `bgcolor`         | string    |               | Page background color.            |
| `hash`            | string    |               | Read-only window's width. Updated for multi-user apps only when browser window is 
| `winWidth`        | number    |               | Read-only window's width. Updated for multi-user apps only when browser window is resized.      |
| `winHeight`       | number    |               | Read-only window's height. Updated for multi-user apps only when browser window is resized.      |
| `theme`                | string    |  `light`  | Page's theme: `light` or `dark`.  |
| `themePrimaryColor`    | string    |           | Theme primary color. Use [Fluent UI Theme Designer](https://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/) to build a custom theme. |
| `themeTextColor`       | string    |           | Theme text color. Use [Fluent UI Theme Designer](https://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/) to build a custom theme. |
| `themeBackgroundColor` | string    |           | Theme background color. Use [Fluent UI Theme Designer](https://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/) to build a custom theme. |
| `signin`               | string    |           | Displays Sign In dialog with selected auth methods. |
| `signinAllowDismiss`   | bool      |           | Enables user to dismiss Sign In dialog. |
| `signinGroups`         | bool      |           | Enables Pglet OAuth app to ask for teams/groups read permission during OAuth authorization flow. |
| `userAuthProvider`     | string    |           | Authentication method used by a user to sign in: `github`, `google` or `azure` (Microsoft Account). Read-only, multi-user apps only. |
| `userId`               | string    |           | ID of the signed in user. For GitHub auth method it's GitHub's user ID (number), for Google - email address and for Microsoft Account - user's GUID. Read-only, multi-user apps only. |
| `userLogin`            | string    |           | For GitHub auth method it's GitHub's username, for Google and Microsoft Account - email address. Read-only, multi-user apps only. |
| `userName`             | string    |           | Display name of the signed in user. Read-only, multi-user apps only. |
| `userEmail`            | string    |           | Email address of the signed in user. Read-only, multi-user apps only. |
| `userClientIP`         | string    |           | IP address of the signed in user. Read-only, multi-user apps only. |

## Events

| Name       | Description |
| ---------- | ----------- |
| `hashChange` | Fires when URL hash part has changed. |
| `resize`     | Fires when page (browser window) has been resized. |
| `connect`    | Fires when a web user connects to a page session. It is not triggered when an app page is first opened, but is triggered when the page is refreshed, or computer unlocked and browser reconnected. |
| `disconnect` | Fires when a web user disconnects from a page session, i.e. closes browser window. |
| `close`      | Fires when a session has expired after timeout (60 minutes by default). |
| `signin`     | Fires when a web user authenticates with one of the enabled methods. |
| `dismissSignin` | Fires when a web user has clicked "close" button on "Sign in" dialog. |
| `signout`    | Fires when a web user has signed out by navigating to `{pglet-server}/api/auth/signout` URL or calling `page.signout()` method. |

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

Creating a new page with a random name and connecting to it:

```python
import pglet
page = pglet.page()
```

Creating a page with a custom name:

```python
import pglet
page = pglet.page("my-page")
```

By default, when connecting to a page its contents is cleared. To preserve page contents and connect it in update mode:

```python
import pglet
page = pglet.page("my-page", update=True)
```

Create a new app with name `app1` and wait for connections. `web=True` makes app UI displaying at [Pglet service](/docs/pglet-service).
`main` function is an entry point for a new user session. When a new user connects we just greem them with `Hello, world!` message:

```python
import pglet

def main(page):
  page.add(Text(value="Hello, world!"))

pglet.app("app1", web=True, target=main)
```

To update page title:

```python
page.title = "My App!"
page.update()
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>