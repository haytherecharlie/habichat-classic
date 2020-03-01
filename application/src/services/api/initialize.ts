import { TEST_MODE } from 'config/constants'
import mockData from 'services/api/mocks/initialize.mock.json'

const initialize = () => {
  return new Promise((resolve, reject) => {
    if (TEST_MODE) {
      console.log('TEST MODE DATA')
      return resolve(mockData)
    }
    return fetch(`https://us-central1-habichat-86de6.cloudfunctions.net/initialize?c=pyNBzg3V742S5v8gWfRB`)
      .then(res => resolve(res.json()))
      .catch(err => reject(err))
  })
}

export default initialize
