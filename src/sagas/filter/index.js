import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { filteredUsers } from '../../store/table-with-users/actions';
import { userFilter } from '../../api';

export default function * getUsersByFilterSaga() {
  yield fork(getUsersByFilterWatcher);
}

function * getUsersByFilterWatcher() {
  yield takeEvery('getUsersByFilter', getUsersByFilterWorker);
}

function * getUsersByFilterWorker(data) {
  const users = yield call(userFilter, data.payload);
  if ( !users.length ) {
    alert('Nothing fit');
  }
  yield put(filteredUsers(users));
}
