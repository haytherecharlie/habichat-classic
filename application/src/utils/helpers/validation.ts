const nameRegex = /^([a-zA-Z]+\s)*[a-zA-Z]+$/
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
const passRegex = /^.{6,}$/

export const name = n => (nameRegex.test(n) ? 'valid' : 'invalid')
export const email = e => (emailRegex.test(e) ? 'valid' : 'invalid')
export const pass = p => (passRegex.test(p) ? 'valid' : 'invalid')
