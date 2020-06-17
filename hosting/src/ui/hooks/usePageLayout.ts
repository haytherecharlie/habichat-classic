import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import theme from 'ui/assets/theme'

const usePageLayout = () => {
  const dispatch = useDispatch()
  const breakPoint = theme.LARGE_VIEW
  const { language } = useSelector(s => s.ui)

  const setStartingLanguage = () => {
    if (typeof window !== 'undefined') {
      const navLanguage = window.navigator.userLanguage || window.navigator.language
      if (!language) {
        if (navLanguage.substr(0, 2) === 'fr') {
          return dispatch({ type: 'LANGUAGE', language: 'fr' })
        } else {
          return dispatch({ type: 'LANGUAGE', language: 'en' })
        }
      }
    }
  }

  const setDemensions = () => {
    let previous = 'mobile'
    const getSize = () => {
      if (window.innerWidth > breakPoint && previous !== 'desktop') {
        previous = 'desktop'
        return dispatch({ type: 'DIMENSIONS', value: 'desktop' })
      }
      if (window.innerWidth < breakPoint && previous !== 'mobile') {
        previous = 'mobile'
        return dispatch({ type: 'DIMENSIONS', value: 'mobile' })
      }
    }

    if (typeof window !== 'undefined') {
      getSize()
      window.addEventListener('resize', getSize)
      return () => window.removeEventListener('resize', getSize)
    }
  }

  useEffect(() => {
    Promise.all([setDemensions(), setStartingLanguage()]).then(() => {
      dispatch({ type: 'LOADING', loading: false })
    })
  }, [])
}

export default usePageLayout
