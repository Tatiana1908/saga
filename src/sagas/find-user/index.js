import { fork, takeEvery, call, put } from 'redux-saga/effects'
import { findUser, giveUser } from '../../store/table-with-users/actions'
import { getUser } from '../../api'

export default function * findUserSaga() {
  yield fork(findUserWatcher)
}

function * findUserWatcher() {
  yield takeEvery('findUser', findUserWorker)
}

function * findUserWorker({ payload: id }) {
  const user = yield call(getUser, id);

  yield put(giveUser(user));

}
