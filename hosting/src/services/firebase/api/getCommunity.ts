const getCommunity = async cid => {
  try {
    const req = await fetch(`https://habi.chat/community/${cid}`)
    return await req.json()
  } catch (err) {
    throw new Error()
  }
}

export default getCommunity
