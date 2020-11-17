import { Request, Response } from 'express'

import { getMuridById, getMuridByProfile, setMuridLastLogin, MuridSession } from '../model/murid'
import errorResponse, { throwError } from '../model/error'
import { createToken, getTokenId } from '../utils/token'

export const onPostSessionProfile = async function (req: Request, res: Response<MuridSession>) {
  try {
    const { nama, nomer } = req.body
    if (!nama || !nomer) return errorResponse(res).bodyError()

    const murid = await getMuridByProfile({ nama, nomer }).catch(throwError)
    if (!murid) return errorResponse(res).authError()

    const lastLoginMurid = await setMuridLastLogin(murid).catch(throwError)
    const token = createToken(lastLoginMurid)
    return res.send({ profile: lastLoginMurid, token })
  } catch (e) {
    return errorResponse(res).dbError()
  }
}

export const onGetSessionToken = async function (req: Request, res: Response<MuridSession>) {
  try {
    const { authorization } = req.headers
    if (!authorization) return errorResponse(res).headerError()

    const murid = await getMuridById(getTokenId(authorization)).catch(throwError)
    if (!murid) return errorResponse(res).authError()

    const lastLoginMurid = await setMuridLastLogin(murid).catch(throwError)
    const token = createToken(lastLoginMurid)
    return res.send({ profile: lastLoginMurid, token })
  } catch (e) {
    return errorResponse(res).dbError()
  }
}

export const redirect = function (req: Request, res: Response) {
  return errorResponse(res).routeError()
}
