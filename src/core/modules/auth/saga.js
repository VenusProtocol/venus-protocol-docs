/* eslint-disable no-unused-vars */
import { put, call, fork, all, take } from 'redux-saga/effects';

import {
  HANDLE_AUTH_ERROR_REQUEST,
  LOGIN_REQUEST,
  authActionCreators
} from 'core/modules/auth/actions';

import { restService } from 'utilities';

export function* handleAuthErrorRequest({ payload, resolve, reject }) {
  const { response } = payload;
  try {
    if (response.data && response.status === 401) {
      yield put(authActionCreators.logOut({}));
    }
  } catch (e) {
    console.log('e', e);
  }
}

export function* asyncLoginRequest({ payload, resolve, reject }) {
  const { email, password } = payload;

  try {
    const response = yield call(restService, {
      api: `commerce/authenticate`,
      method: 'POST',
      params: {
        Username: email,
        Password: password
      }
    });
    if (response.status === 200) {
      yield put(authActionCreators.loginSuccess({ user: response.data }));
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (e) {
    reject(e);
  }
}

export function* watchHandleAuthErrorRequest() {
  while (true) {
    const action = yield take(HANDLE_AUTH_ERROR_REQUEST);
    yield* handleAuthErrorRequest(action);
  }
}
export function* watchLoginRequest() {
  while (true) {
    const action = yield take(LOGIN_REQUEST);
    yield* asyncLoginRequest(action);
  }
}

export default function*() {
  yield all([
    fork(watchHandleAuthErrorRequest),
    fork(watchLoginRequest)
  ]);
}
