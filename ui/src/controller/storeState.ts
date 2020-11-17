import { AccountState, initAccountState } from './account/accountState'
import { MuridState, initMuridState } from './murid/muridState'

export interface StoreState {
  account: AccountState
  murid: MuridState
}

export const storePreloadState: StoreState = {
  account: initAccountState,
  murid: initMuridState,
}

export default StoreState
