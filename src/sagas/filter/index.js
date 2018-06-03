import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { setUsers } from '../../store/main-store/actions';
import { userFilter, getUsers} from '../../api';

export default function * getUsersByFilterSaga() {
  yield fork(getUsersByFilterWatcher);
}

function * getUsersByFilterWatcher() {
  yield takeEvery('getUsersByFilter', getUsersByFilterWorker);
}

function * getUsersByFilterWorker(data) {
  let users;

  if (!data.payload.value) {
    users = yield call(getUsers);
  } else {
    users = yield call(userFilter, data.payload);
  }
  yield put(setUsers(users));
}
