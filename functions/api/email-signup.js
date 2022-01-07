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

async function sendEmail(mailgunApiKey, from, to, subject, htmlBody) {

  const mailDomain = from.split('@').pop()
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
    const responseBody = await response.json()
    throw `Error sending email message: ${responseBody.message}`
  }
}

export async function onRequestPost(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
    } = context;

    console.log(JSON.stringify(env, null, '  '));

    const { headers } = request;
    const contentType = headers.get('content-type');
    if (!contentType.includes('application/json')) {
      throw "Content type not recognized!"
    }

    // this is request body
    const body = await request.json();
    console.log(body);
  
    const email = body.email;

    // try hashing data
    const hashedData = await sha1("Hello, world!");
    console.log('hashedData', hashedData);

    // 1. Validate hCaptcha response
    //await validateCaptcha(body.captchaToken, env.HCAPTCHA_SECRET)

    // 2. Add email address to the mailing list
    var added = await addMailingListMember(env.MAILGUN_API_KEY, env.MAILGUN_MAILING_LIST, email);
    if (added) {
      // 3. Build confirmation link
      const urlParams = {
        email: email,
        code: await sha1(email + env.CONFIRM_SECRET)
      }
      const url = new URL(request.url);
      const confirmUrl = `${url.origin}/api/confirm-email-signup?${urlEncodeObject(urlParams)}`
      console.log("confirmUrl:", confirmUrl);
      
      // 4. Send email with a confirmation link
      await sendEmail(env.MAILGUN_API_KEY, env.MAILGUN_MAILING_LIST, email,
        "Confirm your subscription to Pglet project updates", confirmUrl);
    }

    const clientIP = request.headers.get("CF-Connecting-IP");
    console.log("IP:", clientIP);

    // send response
    var j = {
      result: "OK",
      error: null
    }

    return new Response(JSON.stringify(j), {
      headers: { 'content-type': 'application/json' }
    })
  }