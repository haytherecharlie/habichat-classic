import { useEffect, useState } from 'react'
import { loadAsync } from 'expo-font'
import cocogoose from 'assets/fonts/cocogoose.otf'
import helvetica from 'assets/fonts/helvetica-regular.otf'

const useUniversalInitialization = () => {
  const [initialzation, setInitialization] = useState('pending')
  console.disableYellowBox = true

  const loadFonts = async () => {
    try {
      await Promise.all([loadAsync({ cocogoose }), loadAsync({ helvetica })])
      return setInitialization('success')
    } catch (err) {
      return setInitialization('failed')
    }
  }

  useEffect(() => {
    loadFonts()
  }, [])

  return initialzation
}

export default useUniversalInitialization
