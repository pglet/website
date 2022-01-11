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

Staying in touch with your users via email is still effective and reliable communication channel. In this tutorial we are going to add to a home page a form that allows users to submit their email address and subscribe to a project mailing list. You may wonder how is this related to Pglet?

Project requirements:

* The form must be as simple as possible: just "email" field and "submit" button.
* The form must protected by CAPTCHA.
* Double opt-in subscription process should be implemented: after submitting the form a user receives an email with a confirmation link to complete the process.

[Pglet website](https://pglet.io) is made with [Docusaurus](https://docusaurus.io/) and hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

Docusaurus is, essentially, a React app, so we could implement any interactivity on a client side as we like.

For CAPTCHA we are going to use [hCaptcha](https://www.hcaptcha.com/), which is a great alternative to Google's reCAPTCHA and has a similar API.

A signup form requires some server-side processing and for that we re going to use [Functions](https://developers.cloudflare.com/pages/platform/functions) which are part of Cloudflare Pages platform.

For maintaining maling list and sending email messages we are going to use [Mailgun](https://www.mailgun.com/) offers great functionality, first-class API at a flexible pricing, plus we have a lot of experience with it.

## Email signup form

Signup form is implemented as React component and includes an email entry form with hCaptcha and two messages:

<p style={{textAlign: 'center'}}><img src="/img/blog/email-signup-form/email-signup-form.png" width="70%" /></p>

[The official hCaptcha demo React app](https://codesandbox.io/s/react-hcaptchaform-example-invisible-f7ekt?file=/src/Form.jsx) with invisible captcha was a perfect starting point for our own implementation for Docusaurus.

Add hCaptcha component to your project:

```
yarn add @hcaptcha/react-hcaptcha --save
```

Create `src/components/signup-form.js` with the following contents:

```javascript
import React, { useEffect, useRef, useState } from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function SignupForm() {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState("");
    const captchaRef = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        captchaRef.current.execute();
    };

    useEffect(async () => {
        if (token) {
            var data = {
                email: email,
                captchaToken: token
            };

            // send message
            const response = await fetch("/api/email-signup", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              });
        }
    }, [token, email]);

    return (
        <div id="signup" className="signup-form">
            <BrowserOnly fallback={<div>Loading...</div>}>
                {() => {
                    if (token) {
                        // signup submitted
                        return <div>Thank you! You will receive the confirmation email shortly.</div>
                    } else if (window.location.href.endsWith('?signup-confirmed')) {
                        // signup confirmed
                        return <div><span style={{fontSize:'25px', marginRight:'10px'}}>🎉</span>Congratulations! You have successfully subscribed to Pglet newsletter.</div>
                    } else {
                        // signup form
                        return <form onSubmit={onSubmit}>
                            <h3>Subscribe to Pglet newsletter for project updates and tutorials!</h3>
                            <input
                                type="email"
                                value={email}
                                placeholder="Your email address"
                                onChange={(evt) => setEmail(evt.target.value)}
                            />
                            <input type="submit" value="Submit" />
                            <HCaptcha
                                sitekey="{YOUR-HCAPTCHA-SITE-KEY}"
                                size="invisible"
                                onVerify={setToken}
                                ref={captchaRef}
                            />
                        </form>
                    }
                }}
            </BrowserOnly>
        </div>
    );
}
```

It's simply `<form>` element with "email" and "submit" inputs - except hCaptcha, no other 3rd-party components or hooks used. 

Replace `{YOUR-HCAPTCHA-SITE-KEY}` with your own site key.

Captcha is verified on `form.onSubmit` event which supports submitting form with ENTER and triggers built-in form validators.
The result of captcha verification is stored in `token` state variable which is sent to a server along with entered email for further verification and processing.

Add `signup-form.js` component to `src/pages/index.js` page:

```js
import SignupForm from '@site/src/components/signup-form'
```

and then put `<SignupForm/>` inside `<main>` element:

```javascript
<main>
    <SignupForm/>
    ...
</main>
```

When you run Docusaurus site with `yarn start` and navigate a page with captcha at http://localhost:3000 you'll get "blocked by CORS policy" JavaScript errors. To make captcha work locally you should use some domain instead of "localhost".

Add a new mapping `127.0.0.1  mysite.local` to `sudo nano /private/etc/hosts` and then you can open http://mysite.local with working captcha.

:::note
A part of form component is wrapped with `<BrowserOnly>` which tells Docusaurus that the contents inside `<BrowserOnly>` is not suitable for server-side rendering because of client-side API used, in our case `window.location.ref`. You can read more about `<BrowserOnly>` [here](https://docusaurus.io/docs/docusaurus-core#browseronly).
:::

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