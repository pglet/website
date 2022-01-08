import { urlEncodeObject, sha1 } from "./utils";

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

async function addMailingListMember(mailgunApiKey, listName, memberAddress) {
  const data = {
    address: memberAddress,
    subscribed: 'no',
    upsert: 'no'
  }

  const encData = urlEncodeObject(data)
  const response = await fetch(
    `https://api.mailgun.net/v3/lists/${listName}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + btoa('api:' + mailgunApiKey),
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': encData.length.toString()
      },
      body: encData
    }
  )

  if (response.status === 200) {
    return true; // member has been added
  } else if (response.status === 400) {
    return false; // member already added
  } else {
    const responseBody = await response.json()
    throw `Error adding mailing list member: ${responseBody.message}`
  }
}

async function sendEmail(mailgunApiKey, mailDomain, from, to, subject, htmlBody) {

  const data = {
    from: from,
    to: to,
    subject: subject,
    html: htmlBody
  }

  const encData = urlEncodeObject(data)
  const response = await fetch(
    `https://api.mailgun.net/v3/${mailDomain}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + btoa('api:' + mailgunApiKey),
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': encData.length.toString()
      },
      body: encData
    }
  )

  if (response.status !== 200) {
    const responseBody = await response.text()
    throw `Error sending email message: ${responseBody}`
  }
}

export async function onRequestPost(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
    } = context;

    const { headers } = request;
    const contentType = headers.get('content-type');
    if (!contentType.includes('application/json')) {
      throw "Content type not recognized"
    }

    // this is request body
    const reqBody = await request.json();
    const email = reqBody.email;
    const captchaToken = reqBody.captchaToken;

    // verify parameters
    if (!email || !captchaToken) {
      throw "Invalid request parameters"
    }

    // validate hCaptcha response
    await validateCaptcha(captchaToken, env.HCAPTCHA_SECRET)

    // add email address to the mailing list
    var added = await addMailingListMember(env.MAILGUN_API_KEY, env.MAILGUN_MAILING_LIST, email);
    if (added) {
      // build confirmation link
      const urlParams = {
        email: email,
        code: await sha1(email + env.CONFIRM_SECRET)
      }
      const url = new URL(request.url);
      const confirmUrl = `${url.origin}/api/confirm-subscription?${urlEncodeObject(urlParams)}`
      
      // send email with a confirmation link
      await sendEmail(env.MAILGUN_API_KEY, env.MAILGUN_MAILING_LIST.split('@').pop(), "Pglet <hello@pglet.io>", email,
        "Confirm your subscription to Pglet newsletter", confirmUrl);
    }

    // send response
    var resp = {
      result: "OK"
    }

    return new Response(JSON.stringify(resp), {
      headers: { 'content-type': 'application/json' }
    })
  }