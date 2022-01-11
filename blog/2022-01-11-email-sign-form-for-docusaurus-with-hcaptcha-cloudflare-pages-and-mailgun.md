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

Staying in touch with your users via email is still effective and reliable communication channel. In this tutorial we are going to add [email signup form](https://pglet.io/#signup) to a React-based static website that allows users to submit their email address and subscribe to a project mailing list.

[Pglet website](https://pglet.io) is made with [Docusaurus](https://docusaurus.io/) and hosted on [Cloudflare Pages](https://pages.cloudflare.com/). However, the following solution could be easily adopted for other React-based website frameworks such as [Next.js](https://nextjs.org/) and use a different backend for server-side logic such as [Vercel Functions](https://vercel.com/docs/concepts/functions/introduction) or [Deno Deploy](https://deno.com/deploy/docs).

Project requirements:

* The form must be as simple as possible: just "email" field and "submit" button.
* The form must protected by CAPTCHA.
* Double opt-in subscription process should be implemented: after submitting the form a user receives an email with a confirmation link to complete the process.

For CAPTCHA we are going to use [hCaptcha](https://www.hcaptcha.com/), which is a great alternative to Google's reCAPTCHA and has a similar API.

A signup form requires server-side processing and for that we re going to use [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions) which are part of Cloudflare Pages platform.

For maintaining maling list and sending email messages we are going to use [Mailgun](https://www.mailgun.com/) offers great functionality, first-class API at a flexible pricing, plus we have a lot of experience with it.

All code samples in this article can be found in:

* [Pglet website GitHub repository](https://github.com/pglet/website)
* [`functions` directory with server-side logic](https://github.com/pglet/website/tree/master/functions/api)
* [`<SignupForm/>` React component](https://github.com/pglet/website/blob/master/src/components/signup-form.js)

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
The result of captcha verification is stored in `token` state variable which is sent to `/api/email-signup` server function along with entered email for further verification and processing.

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

## Configuring Mailgun

[Mailgun](https://www.mailgun.com/) is a transactional email service that offers first-class APIs for sending, receiving and tracking email messages.

:::note
We are not affiliated with Mailgun - we just like their service and have a lot of experience with its API.
:::

A few things to know before creating a mailing list at Mailgun:

* **Start with a free "Flex" plan** - it allows sending 5,000 messages per month and includes custom domains.
* **Configure custom domain** - of course, you can test everything on a built-in `{something}.mailgun.org` domain, but messages sent from it will be trapped in recipient's Junk folder. Custom domain is included with a free plan and it's just a matter of adding a few records to your DNS zone.
* **Get dedicated IP addresss** - if you require even greater deliverability assign your domain to a dedicated IP address. Dedicated IP is part of ["Foundation" plan](https://www.mailgun.com/pricing/) which starts at $35/month.

## Cloudflare Pages Functions

[Cloudflare Page Functions](https://developers.cloudflare.com/pages/platform/functions) are based on [Cloudflare Workers](https://developers.cloudflare.com/workers/).

Functions runtime environment is different from Node.js. You can't use Node.js built-in modules, you can't install anything from NPM. It's more like JavaScript in a headless browser with [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch), [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket), [Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Crypto) and other [Web APIs](https://developers.cloudflare.com/workers/runtime-apis/web-standards).

For signup form we are going to have two handlers:

* `POST /api/email-signup` - for initial form processing and signup
* `GET /api/confirm-subscription?email={email}&code={code}` - for confirming subscription

To generate routes above we need to create two files: `/functions/api/email-signup.js` and `/functions/api/confirm-subscription.js` in the project repository.

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

For your Cloudflare Pages website you can configure `Production` and `Preview` environment variables on **Settings &#8594; Environment variables** page:

<p style={{textAlign: 'center'}}><img src="/img/blog/email-signup-form/cloudflare-pages-environment-variables.png" width="80%" /></p>

:::info
Environment variables are immutable. If you update/add/delete environment variable and then call the function using it again it won't work - once variables changed the **website must be re-built to pick up new values**.
:::

:::danger
Do not put real secrets into "Preview" environment variables if your project in a public repository. Any pull request to the repository publishes "preview" website to a temp URL which is visible to everyone in [commit status](https://github.com/pglet/website/runs/4754500508). Therefore, it's possible for the attacker to submit malicious PR with a function printing all environment variables and then run it via temp URL.
:::

## Form submit handler

Email signup form `POST`s entered email and hCaptcha response to [`/api/email-signup`](https://github.com/pglet/website/blob/master/functions/api/email-signup.js) function which performs the following:

1. Parses request body as JSON and validates its `email` and `captchaToken` fields.
2. Performs hCaptcha response validation and aborts the request if validation fails.
3. Tries adding a new email (member) into Mailgun mailing list and exits if's already added.
4. Sends email with confirmation link via Mailgun to a newly added email address.

## Validating hCaptcha response

An API and pseudo-code for verifying hCaptcha response (token) on server side could be found [here](https://docs.hcaptcha.com/#verify-the-user-response-server-side) and [this](https://github.com/HR/recaptcha-worker/blob/main/index.js) example for validating reCaptcha response with Cloudflare Worker could be easily adopted for hCaptcha with Cloudflare Functions.

[Validating hCaptcha response on the server](https://docs.hcaptcha.com/#verify-the-user-response-server-side) is `POST` request to `https://hcaptcha.com/siteverify` with hCaptcha response received from browser and hCaptcha site key secret in the body:

```javascript
async function validateCaptcha(token, secret) {
  const data = {
    response: token,
    secret: secret
  }

  const encData = urlEncodeObject(data)
  const captchaResponse = await fetch(
    `https://hcaptcha.com/siteverify`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': encData.length.toString()
      },
      body: encData
    }
  )
  const captchaBody = await captchaResponse.json()
  if (!captchaBody.success) {
    throw captchaBody["error-codes"]
  }
}
```

Thanks to [this great example](https://github.com/sitepoint-editors/cloudflare-form-service/blob/master/email-service.js) on how to send a form request with `fetch()` method.

## Adding email to a mailing list

Helper method for calling [Mailgun API](https://documentation.mailgun.com/en/latest/api_reference.html):

```javascript
export function callMailgunApi(mailgunApiKey, method, url, data) {
    const encData = urlEncodeObject(data)
    return fetch(
      url,
      {
        method: method,
        headers: {
          Authorization: 'Basic ' + btoa('api:' + mailgunApiKey),
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': encData.length.toString()
        },
        body: encData
      }
    )
  }

export function urlEncodeObject(obj) {
    return Object.keys(obj)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
      .join('&')
  }
```

Request parameters are passed in urlencoded form in the body.

Requests uses with Basic authentication with `api` and "private API key" as username and password respectively.

A function for adding a new member into Mailgun mailing lists is trivial and self-descriptive:

```javascript
async function addMailingListMember(mailgunApiKey, listName, memberAddress) {
  const data = {
    address: memberAddress,
    subscribed: 'no',
    upsert: 'no'
  }

  const response = await callMailgunApi(mailgunApiKey,
    'POST', `https://api.mailgun.net/v3/lists/${listName}/members`, data)

  if (response.status === 200) {
    return true; // member has been added
  } else if (response.status === 400) {
    return false; // member already added
  } else {
    const responseBody = await response.json()
    throw `Error adding mailing list member: ${responseBody.message}`
  }
}
```

It tries to add a new member into mailing list and returns `true` if it was successfully added; otherwise returns `false`.

## Sending confirmation email

Sending confirmation email message to a user via Mailgun is [straightforward](https://github.com/pglet/website/blob/master/functions/api/email-signup.js#L107-L123), so we are not going to post it here. Instead, let's see how confirmation URL is built.

Confirmation URL contains two parameters: **email** and **confirmation code**.

Email is just recepient's email address which is, obviously, not a secret.

Confirmation code is calculated as `sha1(email + secret)` with `secret` known to the server only.

When the server receives a request with email and confirmation code it could calculate a new confirmation code for the received email and compare with it with received code.

The algorithm could be further improved by implementing expiring confirmation code, but we want to keep it simple.

## Verifying email and completing signup process

[`/api/confirm-subscription`](https://github.com/pglet/website/blob/master/functions/api/confirm-subscription.js) function has a single `onRequestGet()` handler which performs the following:

* Validates `email` and `code` request parameters.
* Calculates confirmation code and compares it with one from request.
* If both codes match updates Mailgun mailing list member's `subscribed` status to `yes`.
* Redirects to a home page with `?signup-confirmed` appended to the URL.

```javascript
export async function onRequestGet(context) {
  const { request, env } = context;

  // get request params
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  const code = searchParams.get('code')

  if (!code || !email) {
    throw "Invalid request parameters"
  }

  // validate confirmation code
  const calculatedCode = await sha1(email + env.CONFIRM_SECRET)
  if (calculatedCode !== code) {
    throw "Invalid email or confirmation code"
  }

  // update subscription status
  await subscribeMailingListMember(env.MAILGUN_API_KEY, env.MAILGUN_MAILING_LIST, email);

  // redirect to a home page
  return Response.redirect(new URL(request.url).origin + "?signup-confirmed", 302)
}
```

## Conclusion

In this article we created an email signup form for Docusaurus website protected with hCaptcha. The form allows user to submit their email address and subscribe to a project mailing list. We implemented "double opt-in" process where upon signup an email is sent out to the user which includes a link to click and confirm the subscription. We have used Cloudflare Pages Functions to implement all server-side logic. Mailgun service was used to send email messages and maintain mailing list.

In the future articles we will build an interactive Python app using [Pglet](https://pglet.io/docs/tutorials/python) for sending messages to Mailgun mailist lists.