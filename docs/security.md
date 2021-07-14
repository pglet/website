---
title: Security
sidebar_label: Security
slug: security
---

To display sign-in dialog when accessing Pglet page you specify a set of permissions. Each permission can require specific authentication method (`github`, `google` or `azure`), username, email or team/group membership (GitHub and Azure providers only).


Pglet does not implement a complete user management with signups, password resets, 2FA, role management, etc. and you wouldn't probably expect this funcitonaity (especially "done right" and secure) from every web app. Instead, Pglet implements OAuth integration with the most popular identity providers (IdP): GitHub, Google and Azure AD. ... User information is not stored in Pglet, but you can get essential data about the user: login, name, email.