---
slug: launching-pglet
title: Launching Pglet
author: Feodor Fitsner
author_title: Pglet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [pglet, launch, roadmap]
---

Today we are officially launching Pglet!

This is not a groundbreaking event shaking the World and it won't make any ripples on the Internet, but it's still very important milestone for us as it's a good chance to make functionality cut off and present Pglet to the public.

## What we've got

You probably won't be able to do a real app with Pglet yet, but we believe it's quite the MVP in a Technical Preview state. The core Pglet functionality is there: pages can be created, controls can be added, modified and removed with live updates streamed to users via WebSockets, page control events triggered by users are broadcasted back to your program - the entire concept's working. We've got basic layout ([Stack](/docs/reference/controls/stack)) and data entry controls ([Textbox](/docs/reference/controls/textbox), [Button](/docs/reference/controls/button), etc.) to do simple apps and dashboards, but [Fluent UI library](https://developer.microsoft.com/en-us/fluentui#/controls/web), Pglet is based on, is huge and it's a lot more controls to do!

We've got Pglet client bindinds for 4 languages: [Python](/docs/tutorials/python), [Bash](/docs/tutorials/bash), [PowerShell](/docs/tutorials/powershell) and [Node.js](/docs/tutorials/node). We chose these languages for MVP to have a good sense of what might be involved in supporting another language. These are scriping non-typed environments mostly, but probably the next binding we do would be Go or C#. Python bindings is the most complete implementation with [classes](/docs/tutorials/python#control-classes) for every control and [control event handlers](/docs/tutorials/python#event-handlers).

We've got [Pglet Service](/docs/pglet-service) which is a hosted Pglet server which you can use right away to bring your web experiences to the web. For technical preview it's just a basic deployment on GAE (will do a separate blog post about that), but quite enough to play with.

## The experience

It's been really exciting to work on Pglet during the last 6 months and we learned a lot. Being a C# and mostly Windows developer for more than 15 years it was an absolute pleasure to develop in Go: clean and simple language syntax, goroutines and channels, everything async by design, explicit exceptions management - I'll probably do another post about that experience! Making Pglet UI in React with TypeScript was fun as well: both are fantastic technologies! There is also a challenge to support multiple platforms. Pglet works on Windows, Linux and macOS and you need to constantly think about the experience on all 3 platforms and do a triple amount of tests, CI workflows and other chore things.

## What's next

For year 2021 our goal is being able to build and run full-blown backend apps in production. Therefore we are going to work in multiple directions:

### Controls

We are going to add more controls and improve existing ones. Pglet is still missing navigation controls like [menus](https://developer.microsoft.com/en-us/fluentui#/controls/web/nav), [toolbars](https://developer.microsoft.com/en-us/fluentui#/controls/web/commandbar) and [tabs](https://developer.microsoft.com/en-us/fluentui#/controls/web/pivot). [Grid](https://developer.microsoft.com/en-us/fluentui#/controls/web/detailslist) is on top priority, for sure, and it's going to be the huge! Charts will be added as well, so you can build beautiful dashboards.

### Pglet Service

This year we are going to bring Pglet Service into production mode with a proper persistence, authentication and account/profile dashboards. All Pglet backend UI is going to be implemented with Pglet.

### More docs and examples

We'll be working on providing more [Pglet examples](https://github.com/pglet/examples), we'll write deployment guides for standalone Pglet apps and self-hosted Pglet Server.

## Conclusion

At this stage we are actively looking for any feedback to understand if the project idea is moving in the right direction. We'd be happy to know what would be your requirements, what's missing in Pglet, what's nice or inconvenient, what could be implemented with higher priority.

Feel free to [give Pglet a try](/docs/) and let us know what you think! There are multiple feedback channels available:

* [Submit an issue in Pglet repository](https://github.com/pglet/pglet/issues)
* [Joing a chat in our Discord channel](https://discord.gg/rWjf7xx)
* [Follow us on Twitter](https://twitter.com/pgletio)
* [Drop us email](mailto:hello@pglet.io)