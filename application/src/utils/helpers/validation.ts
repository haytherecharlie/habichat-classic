const nameRegex = /^([a-zA-Z ]){2,30}$/
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

export const name = name => {
  if (name === '') return 'pending'
  return nameRegex.test(name) ? 'valid' : 'invalid'
}

export const email = email => {
  if (email === '') return 'pending'
  return emailRegex.test(email) ? 'valid' : 'invalid'
}

export const street = (address = '') => {
  if (address === '') return 'pending'
  return address.length && address.split(',').length === 4 ? 'valid' : 'invalid'
}
