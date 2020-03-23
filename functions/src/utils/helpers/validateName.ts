import errors from 'config/errors.json'

const nameRegex = /^([a-zA-Z ]){2,30}$/
const validateName = (name, type) => {
  try {
    if (nameRegex.test(name)) return name
    throw errors[type === 'first' ? 'V004' : 'V005'] // Invalid Name
  } catch (err) {
    throw err
  }
}

export default validateName
