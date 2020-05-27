import store from 'services/redux'

const getCommunity = async cid => {
  try {
    console.log(store.getState())
    return { status: 'success', data: `community/${cid}` }
  } catch (err) {
    throw new Error()
  }
}

export default getCommunity
