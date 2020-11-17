import { AnyAction } from 'redux'

import { MuridAction } from './muridActions'
import { MuridState, initMuridState } from './muridState'

function muridReducer(state: MuridState = initMuridState, action: AnyAction) {
  switch (action.type) {
    case MuridAction.GET_LIST_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
export default muridReducer
