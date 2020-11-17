import { Request, Response, NextFunction } from 'express'

import { getTokenId, createToken } from '../utils/token'
import { getTodayTime } from '../utils/date'
import { getMuridById } from '../model/murid'
import errorResponse, { throwError } from '../model/error'

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers
    if (!authorization) return errorResponse(res).headerError()

    const murid = await getMuridById(getTokenId(authorization)).catch(throwError)

    if (!murid || new Date(murid.lastLogin) < new Date(getTodayTime(-1)) || createToken(murid) !== authorization)
      return errorResponse(res).authError()

    next()
    return
  } catch (e) {
    return errorResponse(res).headerError()
  }
}

export default authMiddleware
