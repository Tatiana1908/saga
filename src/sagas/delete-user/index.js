import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { removedAction} from '../../store/table-with-users/actions';
import { deleteUser } from '../../api';

export default function * deleteUserSaga() {
  yield fork(deleteUserWatcher);
}

function * deleteUserWatcher() {
  yield takeEvery('deleteUser', deleteUserWorker);
}

function * deleteUserWorker({ payload: id }) {
  const user = yield call(deleteUser, id);
  yield put(removedAction(user));
}
