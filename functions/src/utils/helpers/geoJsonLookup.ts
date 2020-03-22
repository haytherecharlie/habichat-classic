// import inside from 'point-in-polygon'
import fetch from 'node-fetch'

function inside(point, vs) {
  const x = point[0]
  const y = point[1]
  let inside = false
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    let xi = vs[i][0]
    let yi = vs[i][1]
    let xj = vs[j][0]
    let yj = vs[j][1]
    let intersect = yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
    if (intersect) inside = !inside
  }
  return inside
}

const geoJsonLookup = async (city, { lat, lng }) => {
  try {
    console.log(typeof lat)
    const geoReq = await fetch(city)
    const geoJson = await geoReq.json()
    const ward = geoJson.features.find(feature => inside([lng, lat], feature.geometry.coordinates[0]))
    if (ward !== 'undefined') {
      return ward.properties.AREA_NAME
    }
    return 'Location not available'
  } catch (err) {
    console.log(err)
    throw new Error('error loading geojson')
  }
}

export default geoJsonLookup
