import { fork, takeEvery, call, put } from 'redux-saga/effects';

import { getUsers as getUsersAction, setUsers, giveUser } from '../../store/main-store/actions';
import { getUsers, getUser } from '../../api';


export default function * getTableSaga() {
  yield fork(getUsersWatcher);
  yield fork(findUserWatcher);
}

function * getUsersWatcher() {
  yield takeEvery(getUsersAction, getUsersWorker);
}

function * getUsersWorker() {
  const users = yield call(getUsers);
  yield put(setUsers(users));
}

function * findUserWatcher() {
  yield takeEvery('findUser', findUserWorker);
}

function * findUserWorker({ payload: id }) {
  const user = yield call(getUser, id);

  yield put(giveUser(user));
}
