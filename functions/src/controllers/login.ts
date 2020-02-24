import { https } from 'firebase-functions'

const login = (req, res) => {
  res.send('you done login!')
}

export default https.onRequest(login)
