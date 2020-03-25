import errors from 'config/errors.json'

const passRegex = /^.{8,}$/
const validatePass = pass => {
  try {
    if (!passRegex.test(pass)) throw { code: 'V002', message: errors['V002'] }
  } catch (err) {
    throw err
  }
}

export default validatePass
