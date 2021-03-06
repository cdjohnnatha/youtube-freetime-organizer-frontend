import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';

import TimesheetGridElements from '../timesheetGridElements/TimesheetGridElements';

const TimesheetWeekDays = ({ timesheetScheduleHours }) => {
  let renderTimesheetWeekDays = null;
  if (Array.isArray(timesheetScheduleHours) && timesheetScheduleHours.length > 0) {
    renderTimesheetWeekDays = timesheetScheduleHours.map(({ day_of_week, available_minutes }) => (
      <TimesheetGridElements
        className="timesheet_grid_elements"
        key={day_of_week}
        title={day_of_week}
        content={`${available_minutes} min`}
        direction="column"
      />
    ));
  }

  return (
    <>
      <Typography component="h1" style={{ marginBottom: '1em' }}>
        Timesheet schedule:
      </Typography>
      <Grid container direction="row" justify="space-between">
        {renderTimesheetWeekDays}
      </Grid>
    </>
  );
};

TimesheetWeekDays.propTypes = {
  TimesheetWeekDays: PropTypes.arrayOf(PropTypes.shape({
    day_of_week: PropTypes.string,
    available_minutes: PropTypes.number,
  })),
};

TimesheetWeekDays.defaultProps = {
  TimesheetWeekDays: [],
}

export default TimesheetWeekDays;
