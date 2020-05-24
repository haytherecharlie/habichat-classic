import './utils/helpers/modules'
import { https } from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import community from 'controllers/community'

const app = express()
app.use(cors({ origin: true }))

// routes
app.get('/api/community/:id', community)

exports.api = https.onRequest(app)
