import { updateObject } from '../../shared/utility';

import {
  SET_ERROR,
  SET_MESSAGE,
  CLEAN_NOTIFICATION,
} from './actionTypes'

const initialState = {
  message: null,
  error: null,
};

const setError = (state, { error }) => {
  if (error) {
    return updateObject(state, { error, message: error.message });
  } else {
    return updateObject(state, { error });
  }
}

const setMessage = (state, { message }) => updateObject(state, { message });

const cleanNotification = (state, initialState) => updateObject(state, initialState);


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return setError(state, action.payload);
    case SET_MESSAGE:
      return setMessage(state, action.payload);
    case CLEAN_NOTIFICATION:
      return cleanNotification(state, initialState);
    default:
      return state;
  }
}

export default reducer;