import { combineReducers } from 'redux';
import { auth } from 'core/modules';

const appReducer = combineReducers({
  auth
});

export default function rootReducer(state, action) {
  const finalState = appReducer(state, action);
  return finalState;
}
