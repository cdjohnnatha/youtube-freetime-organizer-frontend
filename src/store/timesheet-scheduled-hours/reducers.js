import { updateObject } from '../../shared/utility';

import {
  SET_TIMESHEET_SHCEDULED_HOURS,
  SET_LOADING,
  SET_MESSAGE,
  IN_PROGRESS_TIMESHEET,
} from './actionTypes'

const initialState = {
  id: null,
  timesheet_id: null,
  day_of_week: '',
  available_minutes: 0,
  timesheet_videos: [],
  loading: false,
  message: '',
  timesheetInProgress: null,
};


const setTimesheetScheduledHours = (state, { timesheetScheduledHours }) => updateObject(state, {
  ...timesheetScheduledHours
});

const setInProgressTimesheet = (state, { timesheetInProgress }) => updateObject(state, {
  timesheetInProgress
});


const setLoading = (state, { loading }) => updateObject(state, {
  loading,
});

const setMessage = (state, { message }) => updateObject(state, {
  message,
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMESHEET_SHCEDULED_HOURS:
      return setTimesheetScheduledHours(state, action.payload);
    case SET_LOADING:
      return setLoading(state, action.payload);
    case SET_MESSAGE:
      return setMessage(state, action.payload);
    case IN_PROGRESS_TIMESHEET:
      return setInProgressTimesheet(state, action.payload);
    default:
      return state;
  }
}

export default reducer;