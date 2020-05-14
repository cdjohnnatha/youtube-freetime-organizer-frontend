import Axios from '../../config/axios';
import {
  SET_LOADING,
  SET_TIMESHEET_SHCEDULED_HOURS,
  SET_MESSAGE,
} from './actionTypes';
import { isObject } from 'simple-object-handler';

const setLoading = (loading) => ({ type: SET_LOADING, payload: { loading } });
const setMessage = (message) => ({ type: SET_MESSAGE, payload: { message } });


const setTimesheetScheduledHours = (timesheetScheduledHours) => ({
  type: SET_TIMESHEET_SHCEDULED_HOURS,
  payload: { timesheetScheduledHours },
});

export const fetchTimesheetScheduledHours = () => async dispatch => {
  dispatch(setLoading(true));
  const axiosInstance = new Axios();
  const { success, data, error } = await axiosInstance._instance.get('/users/timesheets/available-videos');
  if (success) {
    if (isObject(data)) {
      dispatch(setTimesheetScheduledHours(data));
    } else {
      dispatch(setMessage(data));
    }
  }
  dispatch(setLoading(false));
};

export const createTimesheet = (params) => async dispatch => {
  dispatch(setLoading(true));
  const axiosInstance = new Axios();
  const { success, data, error } = await axiosInstance._instance.post('/users/timesheets', params);
  console.log('[success]', success);
  console.log('[data]', data);
  if (success) {
    console.log('[data]', data);
  }
  dispatch(setLoading(false));
}
