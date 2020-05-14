import { updateObject } from '../../shared/utility';

import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SET_REDIRECT_PATH,
} from './actionTypes'

const initialState = {
  accessToken: null,
  error: null,
  loading: false,
  redirectPath: '/login'
};

const authStart = (state, action) => updateObject(state, {
  error: null,
  loading: true
});

const authSuccess = (state, { accessToken }) => updateObject(state, {
  accessToken,
  error: null,
  loading: false,
  redirectPath: '/dashboard'
});

const authFail = (state, { error }) => updateObject(state, {
  error,
  loading: false
});

const authLogout = (state, action) => updateObject(state, initialState);

const setRedirectPath = (state, { path }) => updateObject(state, {
  redirectPath: path,
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action.payload);
    case AUTH_SUCCESS:
      return authSuccess(state, action.payload);
    case AUTH_FAIL:
      return authFail(state, action.payload);
    case AUTH_LOGOUT:
      return authLogout(state, action.payload);
    case SET_REDIRECT_PATH:
      return setRedirectPath(state, action.payload);
    default:
      return state;
  }
}

export default reducer;