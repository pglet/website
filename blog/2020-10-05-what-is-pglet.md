---
slug: hello-pglet
title: Hello, Pglet
author: Feodor Fitsner
author_title: AppVeyor founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [internal apps, pglet, hello, introduction]
---

## The problem of internal apps

Hi, I'm Feodor Fitsner, the founder of [AppVeyor](https://www.appveyor.com) - CI/CD service for software developers.

At AppVeyor, as any other startup, we do a lot of **internal apps supporting the core business**. Our users don't see those apps. These could be scripts for processing database data, monitoring dashboards, background apps for housekeeping, scheduled scripts for reporting, backend web apps for account management and billing.

**Internal apps need User Interface** (UI) to present progress/results and grab user input. The simplest form of UI is text console output. Console output can be easily produced from any program or script.

**Text output has limitations**. It could be hard to present complex structures like hierarhies or visualize the progress of multiple concurrent processes (e.g. copying files in parallel). There is no easy way to fill out the form. Plain text cannot be grouped into collapsible areas. **We need rich UI** for our internal apps.

Console output can be logged and studied later or you can sit in front of your computer and stare at log "tail". But we want to be mobile. **We want to control internal apps from anywhere** and any device. We want to share the progress of long-running process with colleagues or send a link to a realt-time dashboard to a manager. Maybe have "Approve" button in the middle of the script to proceed with irreversible actions. We want to collaborate on the results in a real-time. Does it mean we need to build another web app?

**Building web apps is hard**. Our small team is mostly DevOps. We all do development, deployment and maintenance. **We are all good in doing backend coding with different languages**: Bash, PowerShell, Python, C#, TypeScript. However, not every team member is a full-stack developer being able to create a web app. Frontend development is a completely different beast: HTTP, TLS, CGI, HTML, CSS, JavaScript, React, Vue, Angular, Svelte, WebPack and so on. Web development today has a steep learning curve.

**Building secure web apps is even harder**. Internal app works with sensitive company data (databases, keys, credentials, etc.) and presumably hosted in DMZ. You simply can't allow any developer being able to deploy web app with an access to internal resources and available to the whole world.


## Meet Pglet

`Pglet` (pronounced as "*pagelet*") empowers DevOps to easily add rich user interface into their internal apps and utilities without any knowledge of HTML, CSS and JavaScript.**








* Any language
* Fast development
* Accessible via Web, but easy to develop locally



We do a lot of internal apps... What is internal app?

Why I don't want to do it with existing tools? Web app (PHP, CGI, etc.)

How would I do UI with existing tools: Electron, + React/

Not all our developers know how to do front end. They are good in Bash, PowerShell, Python, TypeScript.

## Idea

What if we give developer ...

What if there is an easier way




## Whose is this for?

You already know to 

## Basic programming is easy

It's fairly easy these days to start writing programs in any language. You start from "hello, world", look at the language syntax, flow control structures, puts'n'gets for interacting with user, OOP features. Then you continue with basic libraries for math, strings, I/O, networking, databases, etc. and in a few days or weeks you are able to understand and develop quite decent tools and services!

## Front end is hard

The things are getting more challenging if you need to add a user interface to your program. In most cases it's web-based UI as we all want fancy, cross-platform and multi-user software with the potential reach to millions of users on the internet.

Web development is, like GameDev or Fintech, completely different beast. It's about understanding of HTTP protocol with request/response, HTML for doing layout, CSS for styling UI and JavaScript for making the page alive. However, today creating web apps with plain HTML/JS is not "fancy" anymore. You want to use framework such as React, Vue, Angular, Svelte just to name a few. While the purpose of a framework is to make development easier this could be the reason web development is ...

Do you really need a custom design? Different language for client-side?

## Pglet to the rescue

What if we give developers a set of full-featured UI primitives (controls) and the way to arrange/query the state of those controls on a page?

...Pglet is a canvas, or hub, if you will, where your program and users interact/work together...



