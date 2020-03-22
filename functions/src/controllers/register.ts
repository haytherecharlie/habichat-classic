import { https } from 'firebase-functions'
import geoJsonLookup from 'utils/helpers/geoJsonLookup'
// import point from 'point-in-polygon'
import availableCities from 'config/available-cities'
// import { db, timestamp, auth } from 'services/firebase'

const register = async (req, res) => {
  try {
    const { street, latLng } = req.body
    const city = availableCities[street.split(', ')[1]]
    if (city) {
      const ward = await geoJsonLookup(city, latLng)
      return res.status(200).json(ward)
    }
    return res.status(400).send('City Not Available')
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
}

export default https.onRequest(register)
