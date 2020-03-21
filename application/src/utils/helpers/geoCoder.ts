import Geocoder from 'react-native-geocoding'

Geocoder.init('AIzaSyDchtR-tAGXxS--04z8bQCOKLdr9Wlhvds', { language: 'en' })

const geoCoder = async ({ description, id }) => {
  try {
    const json = await Geocoder.from(description)
    return {
      location: json.results[0].geometry.location,
      address: description,
      id
    }
  } catch (err) {
    console.warn(err)
  }
}

export default geoCoder
