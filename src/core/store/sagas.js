// @flow

import { fork, all } from 'redux-saga/effects';
import { authSaga } from 'core/modules';

export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
