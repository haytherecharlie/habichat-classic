import { useState, useEffect } from 'react'
import { geoContains } from 'd3-geo'
import pointInPolygon from 'utils/helpers/pointInPolygon'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

const useGeoLocation = () => {
  const [error, setError] = useState(null)
  const [location, setLocation] = useState(null)

  const getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') return setError('Permission to access location was denied')
    let { coords } = await Location.getCurrentPositionAsync({})
    setLocation([coords.latitude, coords.longitude,])
    alert()
  }

  useEffect(() => {
    getLocation()
  }, [])

  return [location, error]
}

export default useGeoLocation
