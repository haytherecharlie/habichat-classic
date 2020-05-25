require('./utils/helpers/modules')
import { https } from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import community from 'controllers/community'
import communityPost from 'controllers/communityPost'
import communityPosts from 'controllers/communityPosts'

const app = express()
const base = process.env.FUNCTIONS_EMULATOR ? '/' : '/api/'

// middleware
app.use(cors({ origin: true }))

// community routes
app.get(`${base}community/:cid`, community)
app.get(`${base}community/:cid/post/:pid`, communityPost)
app.get(`${base}community/:cid/posts`, communityPosts)

exports.api = https.onRequest(app)
