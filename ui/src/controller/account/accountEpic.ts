import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { map, exhaustMap, tap, catchError } from 'rxjs/operators'

import { successSubject, errorSubject } from '@src/utils/response'
import { AccountAction, getAccountSuccess } from './accountAction'
import { postLogin, responsePostLogin, getTokenValidation, responseGetTokenValidation } from './accountUtils'

const getAccountSession = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(AccountAction.GET_SESSION),
    exhaustMap(action =>
      postLogin(action.payload).pipe(
        map(res => getAccountSuccess(responsePostLogin(res.response))),
        tap(() => successSubject.next({ type: AccountAction.GET_SUCCESS })),
        catchError(error => {
          errorSubject.next({ type: AccountAction.GET_SESSION_FAILED, error })
          return of({ type: AccountAction.GET_FAILED })
        }),
      ),
    ),
  )

const getAccountValidation = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(AccountAction.GET_VALIDATION),
    exhaustMap(() =>
      getTokenValidation().pipe(
        map(res => getAccountSuccess(responseGetTokenValidation(res.response))),
        tap(() => successSubject.next({ type: AccountAction.GET_SUCCESS })),
        catchError(error => {
          errorSubject.next({ type: AccountAction.GET_VALIDATION_FAILED, error })
          return of({ type: AccountAction.GET_FAILED })
        }),
      ),
    ),
  )

export default [getAccountSession, getAccountValidation]
