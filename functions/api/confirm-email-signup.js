export async function onRequestGet(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
    } = context;

    //console.log(JSON.stringify(request, null, '  '));

    const { searchParams } = new URL(request.url)
    let email = searchParams.get('email')
    console.log('email', email)

    // var url = new URL(request.url);
    // console.log("URL:", JSON.stringify(url));

    // send response
    var j = {
      result: "OK",
      error: null
    }

    return new Response(JSON.stringify(j), {
      headers: { 'content-type': 'application/json' }
    })
  }