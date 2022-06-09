import { createAction } from 'redux-actions';
import { createPromiseAction } from 'core/modules/utils';

/**
 * Action Types
 */
export const HANDLE_AUTH_ERROR_REQUEST = '@auth/HANDLE_AUTH_ERROR_REQUEST';
export const LOGIN_REQUEST = '@auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@auth/LOGIN_FAILURE';

/**
 * Action Creators
 */
export const authActionCreators = {
  handleAuthError: createPromiseAction(HANDLE_AUTH_ERROR_REQUEST),
  login: createPromiseAction(LOGIN_REQUEST),
  loginSuccess: createAction(LOGIN_SUCCESS),
  loginFailure: createAction(LOGIN_FAILURE)
};
