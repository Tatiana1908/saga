import { fork, takeEvery, call, put } from 'redux-saga/effects'

import { getUsers as getUsersAction } from '../../store/table-with-users/actions'
import { getUsers } from '../../api'

export default function * todoListSaga() {
  yield fork(getUsersWatcher)
}

function * getUsersWatcher() {
  yield takeEvery(getUsersAction, getUsersWorker)
}

function * getUsersWorker() {
  const users = yield call(getUsers)
  yield put(setUsers(users))
}
