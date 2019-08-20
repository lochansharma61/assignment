export async function doPost(url, payload, token ) {
  if(token){
    return await doRequest(url, payload, token)
  } else {
    return await doRequest(url, payload )
  }
}

export async function doPatch(url, payload, token ) {
  return await doRequest(url, payload, token, 'PATCH')
}

export async function doGet(url, token = '') {
  return await doRequest(url, {}, token, 'GET')
}

export async function doDelete(url , token, payload) {
  return await doRequest(url, payload, token, 'DELETE')
}

export async function doPut(url, payload, token = '') {
  return await doRequest(url, payload, token, 'PUT')
}

async function doRequest(url, payload, token, method = 'POST') {
  // console.log( 'url '+method + ' - ' + url )
  // console.log( 'token - ' + token )
  const headers = { 'content-type': 'application/json' }
  // const headers = {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/x-www-form-urlencoded',
  //   'Authorization': 'Bearer ' + 'sk_test_kTJ3nZZP00v8JFjUmilDmgoR00TwUr1zZb'
  // }
  const request = {
    cache: 'no-cache',
    method: method,
    headers: headers
  }

  if (method === 'POST' && token !== ''){ 
    request.body = JSON.stringify(payload)
    url = `${url}access_token=${token}`
  }

  if (method === 'PATCH' && token !== ''){ 
    request.body = JSON.stringify(payload)
    url = `${url}access_token=${token}`
  }

  if (method === 'PUT' && token !== ''){ 
    request.body = JSON.stringify(payload)
    url = `${url}?access_token=${token}`
  }

  if (method ==='GET' && token !== ''){ 
    url = `${url}?access_token=${token}`
  }

  if (method ==='DELETE' && token !== ''){ 
    if(payload){
      request.body = JSON.stringify(payload)
    }    
    url = `${url}?access_token=${token}`
  }
  

  // console.log('final url', url);

  const responseStream = await fetch(url, request)

  // console.log( 'responseStream ', responseStream )
  //unauthorised
  if (responseStream.status == 401) {
    // asyncLogOffWithoutApi()
    // alert('unauth')

  }

  //successful no body
  if (responseStream.status === 204) {
    return {}
  }

  const resp = await responseStream.json()
  if (resp.hasOwnProperty('data') || responseStream.status === 200) {
    // console.log( 'resp ', resp )
    return resp
  }

  throw {
    responseStatus: responseStream.status,
    errorCodes: resp.hasOwnProperty('errors') ? resp.errors : ['unknown']
  }
}

