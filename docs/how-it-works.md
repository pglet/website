---
title: How Pglet works
sidebar_label: How it works
slug: how-it-works
---

Pglet UI does not become embedded into your program, but is being served by an out-of-process Pglet server. Application state and control flow logic lives in your persistent-process program while UI changes and events are communicated to Pglet server via IPC-based [protocol](/docs/reference/protocol). It allows writing web app as a standalone monolith without any knowledge of request/response model, routing, templating or state management. Pglet server can be run locally, self-hosted in your local network or used as a [hosted service](/docs/pglet-service).

In a classic client-server architecture front-end communicates to a one or more back-end services. Pglet implements an opposite approach where multiple back-end services scattered across internal network behind a firewall and communicate to a centralized Pglet web server, i.e. front-end service, installed in DMZ or [hosted as a service](/docs/pglet-service). 

<div style={{textAlign: 'center'}}><img src="/img/blog/pglet-introduction/pglet-highlevel-design.png" /></div>

This design gives a number of advantages:

* Secure by design - your internal services and critical data stay behind the firewall and not accessible from the outside world.
* Apps running next to services and data they process - faster/cheaper access and maximum security.
* Zero deployment - run apps on any server in your network or your development machine, no need to deploy apps to a web server.