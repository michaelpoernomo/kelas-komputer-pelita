import { AccountState } from './accountState'
import { AccountLoginPayload } from './accountUtils'

export enum AccountAction {
  GET_SESSION = 'ACCOUNT/GET_SESSION',
  GET_SESSION_FAILED = 'ACCOUNT/GET_SESSION_FAILED',
  GET_VALIDATION = 'ACCOUNT/GET_VALIDATION',
  GET_VALIDATION_FAILED = 'ACCOUNT/GET_VALIDATION_FAILED',

  GET_SUCCESS = 'ACCOUNT/GET_SUCCESS',
  GET_FAILED = 'ACCOUNT/GET_FAILED',
}

export const getAccountSessionAction = (payload: AccountLoginPayload) => ({
  type: AccountAction.GET_SESSION,
  payload,
})

export const getAccountValidationAction = () => ({
  type: AccountAction.GET_VALIDATION,
})

export const getAccountSuccess = (payload: AccountState) => ({
  type: AccountAction.GET_SUCCESS,
  payload,
})
export const getAccountFailed = () => ({ type: AccountAction.GET_FAILED })
