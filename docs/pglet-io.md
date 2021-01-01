---
id: pglet-io
title: Pglet.io service limitations
sidebar_label: Pglet.io service
---

During the beta pglet.io service is working in a public non-authenticated mode only with some constraints applied.
Unauthenticated clients tracked by an IP addresses, so there might be situations when many users from the same network quickly exhaust resources.

## Pages

* A client can create up to 10 pages. Pglet service maintains a FIFO list, so when 11th page is added the 1st one is deleted.
* Once a page is created from a certain IP it must be updated from the same IP; otherwise page name could not be reused untill the page is expired.
* Shared page lifetime is limited to 24 hours since the last time it was updated.
* App page lifetime is limited to 1 hour since the last time any app session was updated.

## Sessions

* A client can create up to 10 app sessions. Pglet service maintains a FIFO list, so when 11th session is created the 1st one is deleted.
* App page session lifetime is limited to 20 minutes since the last time it was accessed or updated.
* When a host client serving an app page is disconnected all app sessions are immediately invalidated.
  That's a convenient "feature" during beta-testing because when user restarts the app and refreshes the page in the browser they'll start a new session.

## Page size

* Maximum size of unathenticated page or app session is limited to 1 MB.
