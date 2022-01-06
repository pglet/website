export async function onRequestPost(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;

    const { headers } = request;
    const contentType = headers.get('content-type');
    if (!contentType.includes('application/json')) {
      throw "Content type not recognized!"
    }

    // this is request body
    const body = await request.json();
    console.log(body);

    // 1. Validate hCaptcha response
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
      headers: { 'content-type': 'application/json' },
      status: 200
    })    
  }