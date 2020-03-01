import { useState, useEffect } from 'react'
import * as Font from 'expo-font'

const usePreloading = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    Font.loadAsync({ cocogoose: require('../../assets/fonts/cocogoose.otf') }).then(() => {
      console.log('FONTS LOADED')
      setLoaded(true)
    })
  }, [])

  return loaded
}

export default usePreloading
