import React, { useEffect } from 'react'
import {
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { inProgressTimesheet } from '../../store/timesheet-scheduled-hours/action';
import TimesheetGridElements from '../../components/timesheets/timesheetGridElements/TimesheetGridElements';
import TimesheetWeekDays from '../../components/timesheets/timesheetWeekDays/TimesheetWeekDays';

const useStyles = makeStyles((theme) => ({
  gridContainerStyles: {
    marginTop: theme.spacing(15),
    padding: theme.spacing(1),
  },
  formStyles: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const Timesheets = ({ fetchInProgressTimesheet, timesheetInProgress }) => {
  const {
    gridContainerStyles,
    formStyles,
  } = useStyles();
  useEffect(() => {
    fetchInProgressTimesheet();
  }, [])

  const {
    name,
    description,
    search_keywords,
    status,
    total_days_complete_videos_list,
    timesheet_schedule_hours,
  } = timesheetInProgress;
  return (
    <Container component="main" maxWidth="xs">
      <Paper>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={gridContainerStyles}
        >
          <Grid
            item
            container
            direction="column"
            alignItems="center"
          >
            <Grid>
              <Typography component="h1">In progress timesheet</Typography>
            </Grid>
          </Grid>
          <Grid item className={formStyles}>
            <TimesheetGridElements title="Name:" content={name}/>
            <TimesheetGridElements title="Description:" content={description}/>
            <TimesheetGridElements title="Search keywords:" content={search_keywords}/>
            <TimesheetGridElements title="Total days to complete list:" content={total_days_complete_videos_list}/>
            <TimesheetGridElements title="Status" content={status}/>
            <TimesheetWeekDays timesheetScheduleHours={timesheet_schedule_hours} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

const mapStatToProps = ({ timesheetScheduledHours }) => ({
  loading: timesheetScheduledHours.loading,
  timesheetInProgress: timesheetScheduledHours.timesheetInProgress || {},
});

const mapDispatchToProps = dispatch => ({
  fetchInProgressTimesheet: (params) => dispatch(inProgressTimesheet()),
})


export default connect(mapStatToProps, mapDispatchToProps)(Timesheets);
