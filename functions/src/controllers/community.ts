import { db } from 'services/firebase'

const community = async (req, res) => {
  try {
    const request = await db().doc(`communities/${req.params.id}`).get()
    const data = request.data()
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.status(200).send(data.displayName)
  } catch (err) {
    console.log(err)
  }
}

export default dbCacheTest
