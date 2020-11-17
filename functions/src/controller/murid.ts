import { Request, Response } from 'express'

import { getMuridList, Murid } from '../model/murid'
import errorResponse, { throwError } from '../model/error'

export const onGetMuridList = async function (req: Request, res: Response<Murid[]>) {
  try {
    const muridList = await getMuridList().catch(throwError)
    return res.send(muridList)
  } catch (e) {
    return errorResponse(res).dbError()
  }
}
