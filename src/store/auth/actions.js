import Axios from '../../config/axios';
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  SIGN_UP_SUCCESS,
  SET_AUTH_LOADING,
} from './actionTypes';

import { setNotificationError, setNotificationMessage } from '../notification/actions';

const authStart = () => ({ type: AUTH_START });

const authSuccess = (accessToken) => ({
  type: AUTH_SUCCESS,
  payload: { accessToken },
});

const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});

const setAuthLoading = (loading) => ({
  type: SET_AUTH_LOADING,
  payload: { loading },
});

export const signInEmailProvider = ({ email, password }) => async dispatch => {
  dispatch(authStart());
  const axiosInstance = new Axios();
  const { success, data, error } = await axiosInstance._instance.post('/sign-in', { email, password });
  if (success) {
    dispatch(authSuccess(data.jwt, '/dashboard'))
  } else {
    dispatch(setAuthLoading(false));
    dispatch(setNotificationError(error));
  }
};
export const signUpEmailProvider = (params) => async dispatch => {
  dispatch(authStart());
  const axiosInstance = new Axios();
  const { success, error } = await axiosInstance._instance.post('/sign-up', { ...params });
  if (success) {
    dispatch(signUpSuccess());
    dispatch(setNotificationMessage('Create account successfully'));
  } else {
    dispatch(setAuthLoading(false));
    dispatch(setNotificationError(error));
  }

  return success;
};

export const logout = () => dispatch => {
  dispatch({ type: AUTH_LOGOUT })
}