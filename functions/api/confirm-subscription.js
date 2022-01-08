import { urlEncodeObject, sha1 } from "./utils";

async function subscribeMailingListMember(mailgunApiKey, listName, memberAddress) {
  const data = {
    address: memberAddress,
    subscribed: 'yes'
  }

  const encData = urlEncodeObject(data)
  const response = await fetch(
    `https://api.mailgun.net/v3/lists/${listName}/members/${encodeURIComponent(memberAddress)}`,
    {
      method: 'PUT',
      headers: {
        Authorization: 'Basic ' + btoa('api:' + mailgunApiKey),
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': encData.length.toString()
      },
      body: encData
    }
  )

  if (response.status === 200) {
    return true; // member has been subscribed
  } else {
    const responseBody = await response.text()
    throw `Error updating mailing list member: ${responseBody}`
  }
}

export async function onRequestGet(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
    } = context;

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

    // subscribe member
    await subscribeMailingListMember(env.MAILGUN_API_KEY, env.MAILGUN_MAILING_LIST, email);

    // redirect to home page
    return Response.redirect(new URL(request.url).origin, 302)
  }