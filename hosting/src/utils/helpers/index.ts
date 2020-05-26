const headers = {
  Accept: 'application/json',
  'Content-type': 'application/json'
}

export const habiFetch = async (path, body = null) => {
  try {
    const options = body ? { method: 'POST', body, headers } : { method: 'GET', headers }
    const req = await fetch(`https://habi.chat/api${path}`, options)
    return await req.json()
  } catch (err) {
    throw new Error(err.data)
  }
}
