import { fork } from 'redux-saga/effects';
import getTableSaga from './table-with-users/index';
import AddNewUserSaga from './add-new-user-modal/index';
import UserPageSaga from './single-user-page/index';
import getUsersByFilterSaga from './filter/index';

export default function* rootSaga() {
  yield fork(getTableSaga);
  yield fork(AddNewUserSaga);
  yield fork(UserPageSaga);
  yield fork(getUsersByFilterSaga);
}
