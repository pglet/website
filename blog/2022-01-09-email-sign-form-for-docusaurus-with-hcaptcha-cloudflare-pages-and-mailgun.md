---
slug: email-sign-form-for-docusaurus-with-hcaptcha-cloudflare-pages-and-mailgun
title: Building email signup form for Docusaurus with hCaptcha, Cloudflare Pages and Mailgun
author: Feodor Fitsner
author_title: Pglet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [Tutorial, Docusaurus, React, hCaptcha, Cloudflare, Mailgun]
---

## Introduction

This blog is going to be about ...
But ...

What we have:

* Website made with [Docusaurus](https://docusaurus.io/) and hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

What we want to do:

* A simple form on a landing page with just "Email" field and "Subscribe" button.
* When submitting form there is no refresh, but a message "Thank you! You should receive a confirmation email shortly" messages appears in-place.
* Form is protected by captcha.
* Double opt-in subscription process: after submitting email address a user receives a message with a confirmation link to complete the process.

How we are going to build that:

* [Mailgun](https://www.mailgun.com/) will be used to manage mailing list and sending emails. Mailgun offers great functionality at a flexible pricing and we have a lot of experience with it.
* Docusaurus is on the client side which is, essentially, a React app.
* For captcha we are going to use [hCaptcha](https://www.hcaptcha.com/). I have experience with Google Captcha and hCaptcha has a very similar API.
* [Cloudflare Functions](https://developers.cloudflare.com/pages/platform/functions) will be used for processing subscription requests and interacting with Mailgun mailinglist API.

## Email signup form

[This official hCaptcha demo React app](https://codesandbox.io/s/react-hcaptchaform-example-invisible-f7ekt?file=/src/Form.jsx) is a perfect starting point for implementing a client side in Docusaurus.

Add hCaptcha:

```
yarn add @hcaptcha/react-hcaptcha --save
```

Create `src/components/signup-form.js`:

```js
// content
```

In `src/pages/index.js` import `SignupForm` component:

```js
import SignupForm from '@site/src/components/signup-form'
```

and add it inside `<main>` layout:

```js
<main>
    <SignupForm/>
    ...
</main>
```

Put your site key.

To test hCaptcha locally you need to access website via some domain name, not `localhost`.
Add `127.0.0.1  mysite.local` into `sudo nano /private/etc/hosts`.

`<BrowserOnly>` in Docusaurus: https://docusaurus.io/docs/docusaurus-core#browseronly

## Cloudflare Pages Functions

[Cloudflare Page Functions](https://developers.cloudflare.com/pages/platform/functions) are based on [Cloudflare Workers](https://developers.cloudflare.com/workers/).

Functions runtime environment is different from Node.js. You can't use Node.js built-in modules, you can't install anything from NPM. It's more like JavaScript in a headless browser with [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch), [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket), [Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Crypto) and other [Web APIs](https://developers.cloudflare.com/workers/runtime-apis/web-standards).

For signup form we are going to have two handlers:

* `POST /api/email-signup` - for initial form processing and signup
* `GET /api/confirm-subscription?email={email}&code={code}` - for confirming subscription

To generate [routes](api/confirm-subscription) above we need to create two files: `/functions/api/email-signup.js` and `/functions/api/confirm-subscription.js` in the project repository.

:::caution
`/functions` directory must be in the root of your repository, not in `/static` directory and published along with the site.
:::

I'm not going to repeat [Functions docs](https://developers.cloudflare.com/pages/platform/functions) here, but will only cover some tricky issues which could arise while you develop.

First, it's possible to run and debug your functions locally. A "beta" version of [`Wrangler`](https://developers.cloudflare.com/pages/platform/functions#develop-and-preview-locally) tool should be installed for that:

```
yarn add wrangler@beta --save-dev
```

:::caution
Disregard deprecation warning while searching for [wrangler](https://www.npmjs.com/package/wrangler) package on npmjs.com.
Apparently, Cloudflare team is actively [working on Wrangler v2](https://github.com/cloudflare/wrangler2) and publishes it as that package.
:::

Wrangler should be run as a proxy for your local Docusaurus run:

```
npx wrangler pages dev -- yarn start
```

For configurable settings in functions we use environment variables. In contrast with Cloudflare Workers environment variables are not set as globals in your functions, however they can be accessed via context, like that:

```javascript
// handler function
export async function onRequestPost(context) {
  const { request, env } = context;
  const apiKey = env.API_KEY;
}
```

where `API_KEY` is the name of environment variable.

For Workers environment variables can be configured in `wrangler.toml`, but `wrangler.toml` is not supported by Functions, so the only way to pass environment variables locally is a command line using `-b` switch:

```
npx wrangler pages dev -b API_KEY=123! -b MY_VAR2=some_value ... -- yarn start
```

For your Cloudflare Pages website you can configure `Production` and `Preview` environment variables on **Settings &#8594; Environment variables** page.

:::danger
Do not put real secrets into "Preview" environment variables if your project in a public repository. Any pull request to the repository publishes "preview" website to a temp URL which is visible to everyone in [commit status](https://github.com/pglet/website/runs/4754500508). Therefore, it's possible for the attacker to submit malicious PR with a function printing all environment variables and then run it via temp URL.
:::

## Validating hCaptcha response

An API and pseudo-code for verifying hCaptcha response on server side could be found [here](https://docs.hcaptcha.com/#verify-the-user-response-server-side) and [this Cloudflare worker code for validating reCaptcha response](https://github.com/HR/recaptcha-worker/blob/main/index.js) (MIT license) can be easily adopted for validating hCaptcha response with Cloudflare functions.

* Functions structure
* How to pass and access environment variables in Functions.

## Adding email to a mailing list

This article was also super-helpful: https://www.sitepoint.com/jamstack-form-handling-cloudflare-workers/ (Source: https://github.com/brandiqa/cloudflare-form-service - MIT license)

* Working with Mailgun mailist

## Sending confirmation email

* Encrypting email and building link
* Sending email with Mailgun

## Completing signup process

* Updating member in a mailing list
* Performing redirect to a home page

## Conclusion

[TBD]