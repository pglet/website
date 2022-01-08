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

## Cloudflare Pages Functions

Running Wrangler locally:

```
npx wrangler pages dev -b CRYPTO_KEY=123! -- yarn start
```

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