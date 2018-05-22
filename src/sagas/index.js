import { fork } from 'redux-saga/effects'

import getTableSaga from './table-with-users/index'
import AddNewUserSaga from './add-new-user/index'
import findUserSaga from './find-user/index'
import deleteUserSaga from './delete-user/index'

export default function * rootSaga() {
  yield fork(getTableSaga)
  yield fork(AddNewUserSaga)
  yield fork(findUserSaga)
  yield fork(deleteUserSaga)
}
