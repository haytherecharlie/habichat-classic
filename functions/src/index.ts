import './utils/modules'
import { https } from 'firebase-functions'
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({ origin: true }))

app.get('/api/:id', (req, res) => {
  console.log('THIS CALL IS #: ', req.params.id)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  res.status(200).send(req.params.id)
})

exports.api = https.onRequest(app)
