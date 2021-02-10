import { formatDistance } from 'date-fns'
import { pathOr } from 'ramda'
import { fr } from 'date-fns/locale'
import { store } from 'services/redux'

const formatTimestamp = time => {
  const language = pathOr('en', ['ui', 'language'], store.getState())
  const locale = language === 'en' ? {} : { locale: fr }
  return typeof time === 'object'
    ? formatDistance(
        new Date(time.hasOwnProperty('_seconds') ? time._seconds * 1000 : time.seconds * 1000),
        new Date().getTime(),
        { addSuffix: true, ...locale }
      )
    : 'just now'
}

export default formatTimestamp
