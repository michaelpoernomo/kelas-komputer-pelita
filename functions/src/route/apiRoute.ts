import express = require('express')

import { onGetSessionToken, redirect } from '../controller/auth'

const apiRouter = express.Router()

apiRouter.get('/token/validation', onGetSessionToken)

apiRouter.all('*', redirect)

export default apiRouter
