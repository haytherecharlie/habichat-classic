import { postOptions } from 'utils/helpers/options'

const register = async (email, firstname, lastname) => {
  const body = { email, firstname, lastname }
  const token = await fetch(`https://us-central1-habichat-86de6.cloudfunctions.net/register?c=pyNBzg3V742S5v8gWfRB`, postOptions(JSON.stringify(body)))
  return token.json()
}

export default register
