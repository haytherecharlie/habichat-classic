import Geocoder from 'react-native-geocoding'

Geocoder.init('AIzaSyDchtR-tAGXxS--04z8bQCOKLdr9Wlhvds', { language: 'en' })

const geoCoder = async street => {
  try {
    const json = await Geocoder.from(street)
    return json.results[0].geometry.location
  } catch (err) {
    console.warn(err)
  }
}

export default geoCoder
