import errors from 'config/errors.json'

const passRegex = /^.{8,}$/
const validatePass = pass => {
  try {
    if (passRegex.test(pass)) return pass
    throw errors['V002']
  } catch (err) {
    throw err
  }
}

export default validatePass
