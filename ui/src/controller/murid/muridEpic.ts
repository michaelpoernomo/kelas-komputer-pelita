import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { map, exhaustMap } from 'rxjs/operators'

import { MuridAction, getMuridListSuccess } from './muridActions'
import { getList, responseGetList } from './muridUtils'

const getMuridList = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(MuridAction.GET_LIST),
    exhaustMap(() => getList().pipe(map(res => getMuridListSuccess(responseGetList(res.response))))),
  )

export default [getMuridList]
