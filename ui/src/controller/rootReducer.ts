import { combineReducers } from 'redux'

import { StoreState } from './storeState'
import accountReducer from './account/accountReducer'
import muridReducer from './murid/muridReducer'

export default combineReducers<StoreState>({
  account: accountReducer,
  murid: muridReducer,
})
