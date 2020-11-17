import { MuridState } from './muridState'

export enum MuridAction {
  GET_LIST = 'MURID/GET_LIST',
  GET_LIST_SUCCESS = 'MURID/GET_LIST_SUCCESS',
}

export const getMuridListAction = () => ({
  type: MuridAction.GET_LIST,
})

export const getMuridListSuccess = (payload: MuridState) => ({
  type: MuridAction.GET_LIST_SUCCESS,
  payload,
})
