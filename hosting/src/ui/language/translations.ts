import { pathOr } from 'ramda'
import en from 'ui/language/en.json'
import fr from 'ui/language/fr.json'
import store from 'services/redux'

const locales = { fr, en }

export const formatMessage = id => {
  const language = pathOr('en', ['ui', 'language'], store.getState())
  return locales[language][id]
}
