import { encryptData } from "./crypto";
import { decryptData } from "./crypto";
import { urlEncodeObject } from "./utils";

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

export async function onRequestPost(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
    } = context;

    console.log(JSON.stringify(env, null, '  '));

    var url = new URL(request.url);
    console.log("URL:", url.origin);

    const { headers } = request;
    const contentType = headers.get('content-type');
    if (!contentType.includes('application/json')) {
      throw "Content type not recognized!"
    }

    // this is request body
    const body = await request.json();
    console.log(body);

    // try encrypting data
    const encryptedData = await encryptData("Hello, world!", env.CRYPTO_KEY);
    console.log(encryptedData);
    const decryptedData = await decryptData(encryptedData, env.CRYPTO_KEY);
    console.log(decryptedData);

    // 1. Validate hCaptcha response
    await validateCaptcha(body.captchaToken, env.HCAPTCHA_SECRET)
    // 2. Check if email address is already added into mailing list
    // 3. If email is not added - add it to a mailing list
    // 4. Send email with a confirmation link

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