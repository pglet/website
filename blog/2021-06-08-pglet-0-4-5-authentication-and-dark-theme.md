---
slug: pglet-0-4-5-authentication-and-dark-theme
title: Pglet 0.4.5 with built-in authentication and dark theme
author: Feodor Fitsner
author_title: Pglet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

The major feature of Pglet 0.4.5 release is built-in authentication and authorization. Pglet now allows creating protected pages and apps which require users to sign in with any of three methods: GitHub, Google or Microsoft account (Azure AD):

[SCREENSHOT]

To display sign-in dialog when accessing Pglet page you specify a set of permissions. Each permission can require specific authentication method (`github`, `google` or `azure`), username, email or team/group membership (GitHub and Azure providers only).

For example, to create a page accessible to GitHub user with username `ExampleUser` and all users in `myorg/Developers` team:

```python
page = pglet.page(permissions="github:ExampleUser, github:myorg/Developers")
```

To allow access to Azure AD groups/roles you need to specify their full name including tenant ID, for example:

```python
page = pglet.page(permissions="{tenant-guid}/GroupA")
```

To give access to users authenticating with any method and `@custom-domain.com` email domain:

```python
page = pglet.page(permissions="*@custom-domain.com")
```

Pglet does not implement a complete user management with signups, password resets, 2FA, role management, etc. and you wouldn't probably expect this funcitonaity (especially "done right" and secure) from every web app. Instead, Pglet implements OAuth integration with the most popular identity providers (IdP): GitHub, Google and Azure AD. ... User information is not stored in Pglet, but you can get essential data about the user: login, name, email.


## Other changes and improvements

"console" instead of "app".

Web mode by default.

Dark theme

Re-connecting client