import { LOGIN_SUCCESS } from 'core/modules/auth/actions';
import { initialState } from 'core/modules/initialState';

export default function auth(state = initialState.auth, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: payload.user
      };
    }
    default: {
      return state;
    }
  }
}
