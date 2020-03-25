import { formatDistance } from 'date-fns'

export const formatTimestamp = time => {
  if (typeof time === 'undefined') return 'error'
  if (typeof time === 'object' && time.hasOwnProperty('_seconds'))
    return formatDistance(new Date(time._seconds * 1000), new Date().getTime(), { addSuffix: true })
  if (typeof time === 'object' && time.hasOwnProperty('seconds'))
    return formatDistance(new Date(time.seconds * 1000), new Date().getTime(), { addSuffix: true })
  return 'just now'
}
