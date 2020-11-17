import { ajax } from 'rxjs/ajax'

import { Storage } from '@src/config/constant'

export const JSON_CONTENT = { 'Content-Type': 'application/json' }

const { REACT_APP_API_HOST = '', REACT_APP_APP_HOST = '' } = process.env

const getDefaultHeader = (isAuth: boolean) =>
  isAuth ? { Authorization: localStorage.getItem(Storage.SESSION_TOKEN) } : {}

const authAjax = (host: string, isAuth = false) => {
  const setHost = (url: string) => host + url
  return {
    get: (url: string, headers?: Object) => ajax.get(setHost(url), { ...getDefaultHeader(isAuth), ...headers }),
    post: (url: string, body?: any, headers?: Object) =>
      ajax.post(setHost(url), body, { ...getDefaultHeader(isAuth), ...headers }),
    put: (url: string, body?: any, headers?: Object) =>
      ajax.put(setHost(url), body, { ...getDefaultHeader(isAuth), ...headers }),
    delete: (url: string, headers?: Object) => ajax.delete(setHost(url), { ...getDefaultHeader(isAuth), ...headers }),
    patch: (url: string, body?: any, headers?: Object) =>
      ajax.patch(setHost(url), body, { ...getDefaultHeader(isAuth), ...headers }),
  }
}

export const appAjax = authAjax(REACT_APP_APP_HOST)
export const apiAjax = authAjax(REACT_APP_API_HOST, true)
