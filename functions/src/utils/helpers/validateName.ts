import errors from 'config/errors.json'

const nameRegex = /^[A-Za-z0-9_']+\s?,\s?[A-Za-z0-9_']+$/
const validateName = name => {
  try {
    if (!nameRegex.test(name)) throw { code: 'V004', message: errors['V004'] } // Invalid Name
  } catch (err) {
    throw err
  }
}

export default validateName
