import { fork } from 'redux-saga/effects';
import getTableSaga from './table-with-users/index';
import AddNewUserSaga from './add-new-user/index';
import findUserSaga from './find-user/index';
import deleteUserSaga from './delete-user/index';
import getUsersByFilterSaga from './filter/index';
import editUser from './edit-user/index';

export default function* rootSaga() {
  yield fork(getTableSaga);
  yield fork(AddNewUserSaga);
  yield fork(findUserSaga);
  yield fork(deleteUserSaga);
  yield fork(getUsersByFilterSaga);
  yield fork(editUser);
}
