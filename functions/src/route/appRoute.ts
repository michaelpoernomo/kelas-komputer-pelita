import express = require('express')

import { onGetMuridList } from '../controller/murid'
import { onPostSessionProfile, redirect } from '../controller/auth'

const appRouter = express.Router()

appRouter.get('/murid/list', onGetMuridList)
appRouter.post('/login', onPostSessionProfile)

appRouter.all('*', redirect)

export default appRouter
