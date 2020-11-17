import { appPath } from '@src/config/route'
import { appAjax } from '@src/utils/ajax'
import { MuridState } from './muridState'

export const getList = () => appAjax.get(appPath.murid.list)

export const responseGetList = (res: ReadonlyArray<string>): MuridState => ({ muridList: res })
