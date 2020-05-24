import { https } from 'firebase-functions'

const cacheTest = async (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  res.status(200).send('CACHING TEST!!! YESSSS')
}

export default https.onRequest(cacheTest)
