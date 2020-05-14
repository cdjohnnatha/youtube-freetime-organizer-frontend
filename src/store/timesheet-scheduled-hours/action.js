import { isObject } from 'simple-object-handler';
import Axios from '../../config/axios';
import {
  SET_LOADING,
  SET_TIMESHEET_SHCEDULED_HOURS,
} from './actionTypes';
import { setNotificationError, setNotificationMessage } from '../notification/actions';

const setLoading = (loading) => ({ type: SET_LOADING, payload: { loading } });


const setTimesheetScheduledHours = (timesheetScheduledHours) => ({
  type: SET_TIMESHEET_SHCEDULED_HOURS,
  payload: { timesheetScheduledHours },
});

export const fetchTimesheetScheduledHours = () => async dispatch => {
  dispatch(setLoading(true));
  const axiosInstance = new Axios();
  const { success, data, error } = await axiosInstance._instance.get('/users/timesheets/available-videos');
  console.log(data);
  if (success) {
    if (isObject(data)) {
      dispatch(setTimesheetScheduledHours(data));
    } else {
      dispatch(setNotificationMessage(data));
    }
  } else {
    dispatch(setNotificationError(error));
  }
  dispatch(setLoading(false));
};

export const createTimesheet = (params) => async dispatch => {
  dispatch(setLoading(true));
  const axiosInstance = new Axios();
  const { success, error } = await axiosInstance._instance.post('/users/timesheets', params);
  if (success) {
    dispatch(setNotificationMessage('Create timesheet successfully'));
  } else {
    dispatch(setNotificationError(error));
  }
  dispatch(setLoading(false));
}
