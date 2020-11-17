import { combineEpics } from 'redux-observable'

import accountEpics from './account/accountEpic'
import muridEpics from './murid/muridEpic'

export default combineEpics(...accountEpics, ...muridEpics)
