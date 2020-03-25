import errors from 'config/errors.json'

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
const validateEmail = async email => {
  try {
    if (!emailRegex.test(email)) throw { code: 'V001', message: errors['V001'] } // Invalid Email
  } catch (err) {
    throw err
  }
}

export default validateEmail
