import { Platform, Dimensions } from 'react-native'
import { formatDistance } from 'date-fns'
import avatars from 'config/avatars.json'
import areaCodes from 'config/area-codes.json'
import postalCodes from 'config/postal-codes.json'

// Screen size.
export const screenWidth = Dimensions.get('screen').width
export const isSmallScreen = screenWidth < 375

// Fetch headers.
const headers = { 'Content-type': 'application/json', Accept: 'application/json' }
export const getOptions = () => ({ method: 'GET', headers })
export const postOptions = body => ({ method: 'POST', body, headers })

// Format Firebase timestamps.
export const formatTimestamp = time => {
  return typeof time === 'object'
    ? formatDistance(
        new Date(time.hasOwnProperty('_seconds') ? time._seconds * 1000 : time.seconds * 1000),
        new Date().getTime(),
        { addSuffix: true }
      )
    : 'just now'
}

// Random Avatar
export const randomAvatar = () => {
  const max = avatars.length - 1
  const min = 0
  return avatars[Math.floor(Math.random() * (max - min + 1) + min)]
}

// Validate strings.
export const vAddress = a =>
  /^(\d{1,6}) [a-zA-Z\s\,]+ [a-zA-Z]+(\,)? (N[BLSTU]|[AMN]B|[BQ]C|ON|PE|SK)+(\,) (Canada)+$/.test(a)
    ? 'valid'
    : 'invalid'
export const vName = n => (/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(n) ? 'valid' : 'invalid')
export const vEmail = e => (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e) ? 'valid' : 'invalid')
export const vPass = p => (/^.{6,}$/.test(p) ? 'valid' : 'invalid')
export const vPhone = p => areaCodes[p]
export const vPostalCode = p =>
  /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(p) ? (postalCodes[p.substring(0, 3)] ? 'valid' : 'invalid') : 'invalid'

// Keyboard status
export const kShow = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow'
export const kHide = Platform.OS === 'ios' ? 'keyboardDidHide' : 'keyboardDidHide'
