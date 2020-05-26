require('./utils/helpers/modules')
import { https } from 'firebase-functions'
import cache from 'express-cache-controller'
import express from 'express'
import cors from 'cors'
import getCommunity from 'controllers/getCommunity'
import getCommunityPost from 'controllers/getCommunityPost'

const app = express()
const base = process.env.FUNCTIONS_EMULATOR ? '/' : '/api/'

// middleware
app.use(cors())
app.use(cache({ maxAge: 60 }))

// community routes
app.get(`${base}community/:cid`, getCommunity)
app.get(`${base}community/:cid/post/:pid`, getCommunityPost)

exports.api = https.onRequest(app)
