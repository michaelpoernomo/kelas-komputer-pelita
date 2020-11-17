import md5 = require('md5')

import { Murid } from '../model/murid'

export const createToken = (murid: Murid): string => {
  return `${murid.id}+${md5(JSON.stringify({ id: murid.id, nama: murid.nama, lastLogin: murid.lastLogin }))}`
}

export const getTokenId = (stringToken: string): string => {
  return stringToken.split('+')[0]
}
