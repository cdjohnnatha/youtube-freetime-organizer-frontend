import { isObject } from 'simple-object-handler';
import Axios from '../../config/axios';
import {
  SET_LOADING,
  SET_TIMESHEET_SHCEDULED_HOURS,
  IN_PROGRESS_TIMESHEET,
} from './actionTypes';
import { setNotificationError, setNotificationMessage } from '../notification/actions';

const setLoading = (loading) => ({ type: SET_LOADING, payload: { loading } });


const setTimesheetScheduledHours = (timesheetScheduledHours) => ({
  type: SET_TIMESHEET_SHCEDULED_HOURS,
  payload: { timesheetScheduledHours },
});

const setInProgressTimeSheet = (timesheetInProgress) => ({
  type: IN_PROGRESS_TIMESHEET,
  payload: { timesheetInProgress },
});

export const fetchTimesheetScheduledHours = () => async dispatch => {
  dispatch(setLoading(true));
  const axiosInstance = new Axios();
  const { success, data, error } = await axiosInstance._instance.get('/users/timesheets/available-videos');
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

export const setWatchedVideo = (timesheet_video_id) => async dispatch => {
  dispatch(setLoading(true));
  const axiosInstance = new Axios();
  const { success, error } = await axiosInstance._instance.get(`/users/timesheets/videos/${timesheet_video_id}`);
  if (success) {
    dispatch(setNotificationMessage('Congratulations, you finished one video from your timesheet'));
  } else {
    dispatch(setNotificationError(error));
  }
  dispatch(setLoading(false));
}

export const inProgressTimesheet = () => async dispatch => {
  dispatch(setLoading(true));
  const axiosInstance = new Axios();
  const { success, data, error } = await axiosInstance._instance.get(`/users/timesheets`);
  if (success) {
    dispatch(setInProgressTimeSheet(data));
  } else {
    dispatch(setNotificationError(error));
  }
  dispatch(setLoading(false));
}
