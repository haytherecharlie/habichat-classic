import { useState, useEffect } from 'react'
import * as Font from 'expo-font'

const usePreloading = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    Promise.all([
      Font.loadAsync({ cocogoose: require('../../assets/fonts/cocogoose.otf') }),
      Font.loadAsync({ helvetica: require('../../assets/fonts/helvetica-regular.otf') })
    ]).then(() => {
      setLoaded(true)
    })
  }, [])

  return loaded
}

export default usePreloading
