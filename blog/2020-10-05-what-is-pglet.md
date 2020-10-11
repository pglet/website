---
slug: hello-pglet
title: Hello, Pglet
author: Feodor Fitsner
author_title: AppVeyor founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [internal apps, pglet, introduction, design]
---

## The problem of internal apps

Hi, I'm Feodor Fitsner, the founder of [AppVeyor](https://www.appveyor.com) - CI/CD service for software developers.

At AppVeyor, as any other startup, we do a lot of **internal apps supporting the core business**. Our users don't see those apps. These could be scripts for processing database data, monitoring dashboards, background apps for housekeeping, scheduled scripts for reporting, backend web apps for account management and billing.

**Internal apps need User Interface** (UI) to present progress/results and grab user input. The simplest form of UI is text console output. Console output can be easily produced from any program or script.

**Text output has limitations**. It could be hard to present complex structures like hierarhies or visualize the progress of multiple concurrent processes (e.g. copying files in parallel). There is no easy way to fill out the form. Plain text cannot be grouped into collapsible areas. **We need rich UI** for our internal apps.

Console output can be logged and studied later or you can sit in front of your computer and stare at log "tail". But we want to be mobile. **We want to control internal apps from anywhere** and any device. We want to share the progress of long-running process with colleagues or send a link to a realt-time dashboard to a manager. Maybe have "Approve" button in the middle of the script to proceed with irreversible actions. We want to collaborate on the results in a real-time. Does it mean we need to build another web app?

**Building web apps is hard**. Our small team is mostly DevOps. We all do development, deployment and maintenance. **We are all good in doing backend coding in different languages**: Bash, PowerShell, Python, C#, TypeScript. However, not every team member is a full-stack developer being able to create a web app. Frontend development is a completely different beast: HTTP, TLS, CGI, HTML, CSS, JavaScript, React, Vue, Angular, Svelte, WebPack and so on. Web development today has a steep learning curve.

**Building secure web apps is even harder**. Internal app works with sensitive company data (databases, keys, credentials, etc.) and presumably hosted in DMZ. You simply can't allow any developer being able to deploy web app with an access to internal resources and available to the whole world.


## Meet Pglet

`Pglet` (pronounced as "*pagelet*") empowers DevOps to easily add rich user interface into their internal apps and utilities without any knowledge of HTML, CSS and JavaScript.

### The idea

What if we give developers a set of full-featured UI primitives (controls) and the way to arrange/query the state of those controls on a page?

...Pglet is a canvas, or hub, if you will, where your program and users interact/work together...

What if you can tell from code "add this", "get the value of that", "wait while the button is clicked", etc.

### Design priciples

* Standard controls: layout, data, form. No need of CSS - standard skins.
* Presentation layer is detached from application logic and moved into a separate process.
* Control UI from code. Imperative, not declarative. No templates (PHP, XML, JSX, ERB, HAML, etc. ), just commands: "add column", "insert text", "get textbox value", "clean panel", "receive events", etc. like SQL, but for UI.
* Security. Application "calls" presentation layer, not vice versa. Presentation layer doesn't have access and know nothing about internal resources. Break into web app and you get nothing! No connection strings, no keys or certificates, no passwords - nothing!
* Fast and simple API: plain commands over named pipes, no HTTP, no JSON. Bash, PowerShell and any other language.

[Diagram]



* Rich, fast, responsive UI available from anywhere
* Use any language you know
* Knowledge of web technologies is not required
* Fast local development
* Secure by design


