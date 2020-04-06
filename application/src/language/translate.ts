import { locale } from 'expo-localization'
import i18n from 'i18n-js'

i18n.translations = {
  en: require('./en.json'),
  fr: require('./fr.json')
}

i18n.locale = locale
i18n.fallbacks = true

export default i18n
