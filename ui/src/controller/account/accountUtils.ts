import { apiPath, appPath } from '@src/config/route'
import { Storage } from '@src/config/constant'
import { Murid } from '@src/model/murid'
import { apiAjax, appAjax } from '@src/utils/ajax'
import { AccountState } from './accountState'

export interface AccountLoginPayload {
  nama: string
  nomer: string
}

export interface AccountLoginResponse {
  profile: Murid
  token: string
}

export const postLogin = (payload: AccountLoginPayload) =>
  appAjax.post(appPath.login, { nama: payload.nama, nomer: payload.nomer })

export const responsePostLogin = (res: AccountLoginResponse): AccountState => {
  const { profile, token } = res
  localStorage.setItem(Storage.SESSION_TOKEN, token)
  return profile
}

export const getTokenValidation = () => apiAjax.get(apiPath.tokenValidation)

export const responseGetTokenValidation = (res: AccountLoginResponse): AccountState => {
  const { profile, token } = res
  localStorage.setItem(Storage.SESSION_TOKEN, token)
  return profile
}
