import { fork, takeEvery, call, put } from 'redux-saga/effects';

import { editUser } from '../../api';
import { giveUser } from '../../store/table-with-users/actions';

export default function * editUserSaga() {
  yield fork(editUserWatcher);
}

function * editUserWatcher() {
  yield takeEvery('editUser', editUserWorker);
}

function * editUserWorker({ payload }) {
  const user = yield call(editUser, payload);
  yield put(giveUser(user));
}
