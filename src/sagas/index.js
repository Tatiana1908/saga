import { fork } from 'redux-saga/effects'

import getTableSaga from './table-with-users/index'
import AddNewUserSaga from './add-new-user/index'

export default function * rootSaga() {
  yield fork(getTableSaga)
  yield fork(AddNewUserSaga)
}
