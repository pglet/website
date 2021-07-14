---
slug: pglet-0-4-6-authentication
title: Built-in authentication in a new Pglet release
author: Feodor Fitsner
author_title: Pglet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release, security]
---

The major feature of Pglet 0.4.6 release is built-in authentication and authorization. Pglet now allows creating protected pages and apps which require users to sign in with any of three methods: GitHub, Google or Microsoft account (Azure AD):

<p style={{textAlign: 'center'}}><img src="/img/blog/auth/pglet-signin-example.png" width="70%" /></p>

Just imagine, you can instantly add authentication to any of your scripts.

For example, in Python to create a page accessible to GitHub user with username `ExampleUser` and all users in `myorg/Developers` team:

```python
page = pglet.page(permissions="github:ExampleUser, github:myorg/Developers")
```

To allow access to specific Azure AD groups/roles you need to specify their full name including tenant ID, for example:

```python
page = pglet.page(permissions="{tenant-guid}/GroupA")
```

To give access to users authenticating with any method and `@custom-domain.com` email domain:

```python
page = pglet.page(permissions="*@custom-domain.com")
```

Pglet does not implement a complete user management with signups, password resets, 2FA, role management, etc. and you wouldn't probably expect this funcitonaity (especially "done right" and secure) from every web app. Instead, Pglet implements OAuth integration with the most popular identity providers (IdP): GitHub, Google and Azure AD. ... User information is not stored in Pglet, but you can get essential data about the user: login, name, email.


## Other changes and improvements

### Web mode by default

Starting from this relase when you start a new page or multi-user app with default parameters its UI will be streamed to https://console.pglet.io. To create a local page add `local=True` parameter (Python), for example:

```python
page = pglet.page("my-app", local=True) # this page will start a local Pglet server
page.add(Text('Hello, localhost!'))
```

### console.pglet.io

Pglet hosted service was moved from `app.pglet.io` domain to `console.pglet.io` to emphasize the fact that Pglet is a secure web "console" where your backend apps can output reach progress.

### Dark theme added and is now default

Pglet provides two built-in themes: `dark` and `light` and you can configure custom theme. To set page theme change its `theme` property, for example:

```python
page = pglet.page("my-app")
page.theme = 'light'
page.update()
```

### Re-connecting client

A serious stabilization work has been done to make Pglet client more resilient to network fluctuations. Now your Pglet app will stay online for many days, reliably connected to Pglet service.

### Python package includes executables

[Pglet package](https://pypi.org/project/pglet/) now includes `pglet` executables for all platforms, so they are downloaded during the package installation - that better works for corporate or k8s environments without outbound internet access.