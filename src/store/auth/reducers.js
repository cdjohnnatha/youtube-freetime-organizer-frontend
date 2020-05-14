import { updateObject } from '../../shared/utility';

import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  SET_REDIRECT_PATH,
  SET_ERROR,
  SIGN_UP_SUCCESS,
  SET_AUTH_LOADING,
} from './actionTypes'

const initialState = {
  accessToken: null,
  user: null,
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

const signUpSuccess = (state) => updateObject(state, {
  error: null,
  loading: false,
  redirectPath: '/login',
});

const setAuthLoading = (state, { loading }) => updateObject(state, {
  loading,
});

const authLogout = (state, action) => updateObject(state, initialState);

const setRedirectPath = (state, { path }) => updateObject(state, {
  redirectPath: path,
});

const setError = (state, { error }) => updateObject(state, { error });


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action.payload);
    case AUTH_SUCCESS:
      return authSuccess(state, action.payload);
    case SIGN_UP_SUCCESS:
      return signUpSuccess(state, action.payload);
    case AUTH_LOGOUT:
      return authLogout(state, action.payload);
    case SET_REDIRECT_PATH:
      return setRedirectPath(state, action.payload);
    case SET_ERROR:
      return setError(state, action.payload);
    case SET_AUTH_LOADING:
      return setAuthLoading(state, action.payload);
    default:
      return state;
  }
}

export default reducer;