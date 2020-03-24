const nameRegex = /^([a-zA-Z ]){2,30}$/
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
const passRegex = /^.{6,}$/

export const name = name => {
  return nameRegex.test(name) ? 'valid' : 'invalid'
}

export const email = email => {
  return emailRegex.test(email) ? 'valid' : 'invalid'
}

export const pass = pass => {
  return passRegex.test(pass) ? 'valid' : 'invalid'
}
