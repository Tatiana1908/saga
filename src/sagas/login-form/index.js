import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { autoriseUser } from '../../store/main-store/actions';
import { signUpApi } from '../../api/index';

export default function * signUpUserSaga() {
  yield fork(addUserWatcher);
}

function * addUserWatcher() {
  yield takeEvery('signUp', signUpUserWorker);
}

function * signUpUserWorker( data ) {
  const user = yield call(signUpApi, data );
  yield delay(1000);
  console.log(user);
  yield put(autoriseUser(user));
}
