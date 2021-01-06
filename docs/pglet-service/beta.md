---
title: Pglet.io service beta limits
sidebar_label: Beta
slug: beta
---

During the beta [Pglet hosted service](/docs/pglet-service) is working in a public non-authenticated mode with some constraints applied.
Unauthenticated clients tracked by an IP addresses, so there might be situations when many users from the same network quickly exhaust allowed quotas.

## Pages

* An unauthenticated client can create up to 10 pages per hour.
* Once a page is created from a certain IP it must be updated from the same IP; otherwise page name could not be reused untill the page is expired.
* Shared page lifetime is limited to 6 hours since the last time it was updated.
* App page lifetime is limited to 60 minutes since the last time any app session was updated.

## Sessions

* An unauthenticated client can create up to 10 app sessions per hour.
* App page session lifetime is limited to 60 minutes since the last time it was accessed or updated.
* When a host client serving an app page is disconnected all app sessions are immediately invalidated.
  That's a convenient "feature" during beta-testing because when user restarts the app and refreshes the page in the browser they'll start a new session.

## Page size

* Maximum size of unathenticated page or app session is limited to 1 MB.
