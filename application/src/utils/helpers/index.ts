import { Platform } from 'react-native'
import { formatDistance } from 'date-fns'
import avatars from 'config/avatars.json'
import areaCodes from 'config/area-codes.json'

// Fetch headers.
const headers = { 'Content-type': 'application/json', Accept: 'application/json' }
export const getOptions = () => ({ method: 'GET', headers })
export const postOptions = body => ({ method: 'POST', body, headers })

// Format Firebase timestamps.
export const formatTimestamp = time => {
  return (typeof time === 'object')
  ? formatDistance(new Date(time.hasOwnProperty('_seconds') ? time._seconds * 1000 : time.seconds * 1000), new Date().getTime(), { addSuffix: true })
  : 'just now'
}

// Random Avatar
export const randomAvatar = () => {
  const max = avatars.length - 1
  const min = 0
  return avatars[Math.floor(Math.random() * (max - min + 1) + min)]
}

// Validate strings.
export const vName = n => (/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(n) ? 'valid' : 'invalid')
export const vEmail = e => (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e) ? 'valid' : 'invalid')
export const vPass = p => (/^.{6,}$/.test(p) ? 'valid' : 'invalid')
export const vPhone = p => areaCodes.some(c => c === p )

// Keyboard status
export const kShow = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow'
export const kHide = Platform.OS === 'ios' ? 'keyboardDidHide' : 'keyboardDidHide'
