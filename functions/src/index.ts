require('./utils/helpers/modules')
import { https } from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import community from 'controllers/community'

const app = express()
const base = process.env.FUNCTIONS_EMULATOR ? '/' : '/api/'

// routes
app.use(cors({ origin: true }))
app.get(`${base}community/:id`, community)

exports.api = https.onRequest(app)
