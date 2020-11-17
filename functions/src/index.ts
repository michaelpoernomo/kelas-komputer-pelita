import functions = require('firebase-functions')
import express = require('express')
import cors = require('cors')

import authMiddleware from './middleware/authMiddleware'
import appRouter from './route/appRoute'
import apiRouter from './route/apiRoute'

// Automatically allow cross-origin requests
const app = express()
const api = express()

app.use(cors({ origin: true }))
api.use(cors({ origin: true }))

app.use('/', appRouter)
api.use('/', authMiddleware, apiRouter)

exports.app = functions.https.onRequest(app)
exports.api = functions.https.onRequest(api)
