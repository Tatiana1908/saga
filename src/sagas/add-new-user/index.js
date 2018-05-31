import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { setUser } from '../../store/table-with-users/actions';
import { postUsers } from '../../api';

export default function * addUserSaga() {
  yield fork(addUserWatcher);
}

function * addUserWatcher() {
  yield takeEvery('addNewUser', addUserWorker);
}

function * addUserWorker({ payload }) {
  yield delay(2000);
  const {firstName, lastName, age, visits, progress, status} = payload;

  const user = yield call(postUsers, {
    firstName,
    lastName,
    age,
    visits,
    progress,
    status,
  });

  yield put(setUser(user));
}
