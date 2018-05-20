import { fork } from 'redux-saga/effects'

import getTableSaga from './table-with-users/index'

export default function * rootSaga() {
  yield fork(getTableSaga)
}
