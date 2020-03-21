import qs from 'query-string'

export const postOptions = body => ({
  method: 'POST',
  body,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json'
  }
})

export const getOptions = () => ({
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json'
  }
})

export const placesUrl = input => {
  const baseUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json`
  const query = [
    `?key=AIzaSyDchtR-tAGXxS--04z8bQCOKLdr9Wlhvds`,
    `&sessionToken=${Math.random()}-${new Date().getTime()}`,
    `&components=country:ca`,
    `&location=43.7184038,-79.518142`,
    `&radius=2000`,
    `&language=en`,
    `&types=address`,
    `&input=${input}`
  ]
  return `${baseUrl}${query.join("")}`
}
