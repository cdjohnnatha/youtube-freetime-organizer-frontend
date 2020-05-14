import React from 'react'
import { Container, Grid, Paper, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TimesheetForm from './timesheetForm/TimesheetForm';

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

const Timesheets = () => {
  const {
    gridContainerStyles,
    formStyles,
  } = useStyles();
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
            <Avatar>
              <DateRangeIcon />
            </Avatar>
            <Typography component="h1">Create a timesheet</Typography>
          </Grid>
          <Grid item className={formStyles}>
            <TimesheetForm />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Timesheets;
