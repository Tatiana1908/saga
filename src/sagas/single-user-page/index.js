import { fork, takeEvery, call, put } from 'redux-saga/effects';

import { editUser, deleteUser } from '../../api';
import { giveUser, removedAction} from '../../store/main-store/actions';


export default function * editUserSaga() {
  yield fork(editUserWatcher);
  yield fork(deleteUserWatcher);
}

function * editUserWatcher() {
  yield takeEvery('editUser', editUserWorker);
}

function * editUserWorker({ payload }) {
  const user = yield call(editUser, payload);
  yield put(giveUser(user));
}


function * deleteUserWatcher() {
  yield takeEvery('deleteUser', deleteUserWorker);
}

function * deleteUserWorker({ payload: id }) {
  const user = yield call(deleteUser, id);
  yield put(removedAction(user));
}
