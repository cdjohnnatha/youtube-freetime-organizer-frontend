import {
  SET_ERROR,
  SET_MESSAGE,
  CLEAN_NOTIFICATION,
} from './actionTypes';

export const setNotificationError = (error) => dispatch => dispatch({
  type: SET_ERROR,
  payload: { error },
});

export const setNotificationMessage = (message) => ({
  type: SET_MESSAGE,
  payload: { message },
});

export const cleanNotifications = () => ({
  type: CLEAN_NOTIFICATION,
});