import { AnyAction } from 'redux'

import { AccountAction } from './accountAction'
import { AccountState, initAccountState } from './accountState'

function accountReducer(state: AccountState = initAccountState, action: AnyAction) {
  switch (action.type) {
    case AccountAction.GET_SUCCESS:
      return { ...state, ...action.payload }
    case AccountAction.GET_FAILED:
    default:
      return state
  }
}
export default accountReducer
