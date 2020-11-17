import { Subject } from 'rxjs'
import { ofType } from 'redux-observable'

const success = new Subject<SuccessType>()

interface SuccessType {
  type: string
  data?: any
}
export const successSubject = {
  next: (data: SuccessType) => {
    success.next(data)
  },
  subscribe: (actions: string[], next: (value: SuccessType) => void) =>
    success
      .asObservable()
      .pipe(ofType(...actions))
      .subscribe(next),
}

const error = new Subject<ErrorType>()
interface ErrorType {
  type: string
  error?: any
}
export const errorSubject = {
  next: (data: ErrorType) => {
    error.next(data)
  },
  subscribe: (actions: string[], next: (value: ErrorType) => void) =>
    error
      .asObservable()
      .pipe(ofType(...actions))
      .subscribe(next),
}
