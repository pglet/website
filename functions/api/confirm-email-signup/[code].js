import { encryptData } from "../crypto";
import { decryptData } from "../crypto";

export async function onRequestGet(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params
    } = context;

    console.log(JSON.stringify(params, null, '  '));

    // send response
    var j = {
      result: "OK",
      error: null
    }

    return new Response(JSON.stringify(j), {
      headers: { 'content-type': 'application/json' }
    })
  }