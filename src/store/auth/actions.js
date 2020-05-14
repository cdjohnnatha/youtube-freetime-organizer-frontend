import Axios from '../../config/axios';
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT
} from './actionTypes';

const authStart = () => ({ type: AUTH_START });

const authSuccess = (accessToken, redirectPath) => ({
  type: AUTH_SUCCESS,
  payload: { accessToken },
});

const authFail = (error) => ({
  type: AUTH_FAIL,
  payload: { error },
});

export const signInEmailProvider = ({ email, password }) => async dispatch => {
  dispatch(authStart());
  const axiosInstance = new Axios();
  const { success, data, error } = await axiosInstance._instance.post('/sign-in', { email, password });
  if (success) {
    console.log('[data]', data);
    dispatch(authSuccess(data.jwt, '/dashboard'))
  } else {
    dispatch(authFail(error));
  }
};

export const logout = () => dispatch => {
  dispatch({ type: AUTH_LOGOUT })
}