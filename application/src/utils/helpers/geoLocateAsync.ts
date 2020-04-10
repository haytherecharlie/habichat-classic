import { db } from 'services/firebase'

const getCity = async (city, cityArray = []) => {
  try {
    const citiesCollection = await db().collection('cities').where('city', '==', city).get()
    citiesCollection.forEach(city => cityArray.push(city.id))
    if (cityArray.length === 1) return cityArray[0]
    throw 'city not found'
  } catch (err) {
    throw err
  }
}

const geoLocateAsync = async ({ main_text, secondary_text }, { location }) => {
  try {
    const city = await getCity(secondary_text)
    console.log(city!)
  } catch (err) {
    if (err === 'city not found') throw '404'
    console.log(err)
  }
}

export default geoLocateAsync
