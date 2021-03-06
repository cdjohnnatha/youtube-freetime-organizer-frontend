import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik';
import { object, string, number } from 'yup';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { objectValues } from 'simple-object-handler';
import { Typography } from '@material-ui/core';

// import history from '../../../config/history';
import Button from '../../../../components/button/Button';
import TextField from '../../../../components/textField/TextField';
import { createTimesheet } from '../../../../store/timesheet-scheduled-hours/action';
import { setNotificationError } from '../../../../store/notification/actions';

const useStyles = makeStyles((theme) => ({
  formMarginStyles: {
    padding: theme.spacing(2),
  },
  buttonStyles: {
    marginTop: theme.spacing(4),
  },
  weekDaysMargin: {
    marginRight: '1em',
  },
}));

const TimesheetForm = ({ loading, createTimesheets, onNotificationError }) => {
  const { formMarginStyles, buttonStyles, weekDaysMargin } = useStyles();
  const weekDayGridSize = 3;
  // const initialValues = {
  //   name: '',
  //   description: '',
  //   search_keywords: '',
  //   available_time_0: 0,
  //   available_time_1: 0,
  //   available_time_2: 0,
  //   available_time_3: 0,
  //   available_time_4: 0,
  //   available_time_5: 0,
  //   available_time_6: 0,
  // }
  const initialValues = {
    name: 'Green day',
    description: 'Green day',
    search_keywords: 'Green day',
    available_time_0: 5,
    available_time_1: 5,
    available_time_2: 5,
    available_time_3: 5,
    available_time_4: 5,
    available_time_5: 5,
    available_time_6: 5,
  }
  
  const yupValidationSchema = object({
    name: string().required(),
    description: string(),
    search_keywords: string().required(),
    available_time_0: number().required(),
    available_time_1: number().required(),
    available_time_2: number().required(),
    available_time_3: number().required(),
    available_time_4: number().required(),
    available_time_5: number().required(),
    available_time_6: number().required(),
  })
  const onSubmit = async ({ name, description, search_keywords, ...available_time }, { setSubmitting }) => {

    setSubmitting(false);
    const available_minutes_per_day = objectValues(available_time);
    const validateDays = available_minutes_per_day.map((availableTime) => availableTime !== 0);
    if (validateDays.length > 3) {
      const checkMininumTimeIs30 = available_minutes_per_day.reduce((a, b) => a + b);
      if (checkMininumTimeIs30 >= 30) {
        await createTimesheets({
          name,
          description,
          search_keywords,
          available_minutes_per_day,
        });
      } else {
        onNotificationError({
          message: 'Come on lets focus! at least 30 min in a week.'
        })
      }
    } else {
      onNotificationError({
        message: 'Come on! You need at least 3 days or it might take forever to finish this list.'
      });
    }
  }

  // useEffect(() => {
  //   history.push(redirectPath);
  // }, [redirectPath]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupValidationSchema}
      onSubmit={onSubmit}
      render={({ isSubmitting, ...props }) => {
        return (
        <Form>
          <Grid container direction="column" className={formMarginStyles}>
            <Grid item>
              <Field
                name="name"
                component={TextField}
                label="Name of timesheet"
                margin="normal"
                required
              />
            </Grid>
            <Grid item>
              <Field
                name="description"
                component={TextField}
                label="Description"
                margin="normal"
              />
            </Grid>

            <Grid item>
              <Field
                name="search_keywords"
                component={TextField}
                label="Keywords to search videos on youtube"
                margin="normal"
                required
              />
            </Grid>
            <Grid item container direction="row" justify="space-evenly" className={formMarginStyles}>
              <Grid item container xs={12} className={weekDaysMargin}>
                <Typography>Set your available time below (in minutes).</Typography>
              </Grid>
              <Grid item container xs={weekDayGridSize} className={weekDaysMargin}>
                <Field
                  name="available_time_0"
                  component={TextField}
                  label="Monday"
                  margin="normal"
                  type="number"
                  inputProps={{ min: "0", step: "1" }}
                  required
                />
              </Grid>
              <Grid item container xs={weekDayGridSize} className={weekDaysMargin}>
                <Field
                  name="available_time_1"
                  component={TextField}
                  label="Tuesday"
                  margin="normal"
                  type="number"
                  inputProps={{ min: "0", step: "1" }}
                  required
                />
              </Grid>
              <Grid item container xs={weekDayGridSize} className={weekDaysMargin}>
                <Field
                  name="available_time_2"
                  component={TextField}
                  label="Wednesday"
                  margin="normal"
                  type="number"
                  inputProps={{ min: "0", step: "1" }}
                  required
                />
              </Grid>
              <Grid item container xs={weekDayGridSize} className={weekDaysMargin}>
                <Field
                  name="available_time_3"
                  component={TextField}
                  label="Thursday"
                  margin="normal"
                  type="number"
                  inputProps={{ min: "0", step: "1" }}
                  required
                />
              </Grid>
              <Grid item container xs={weekDayGridSize} className={weekDaysMargin}>
                <Field
                  name="available_time_4"
                  component={TextField}
                  label="Friday"
                  margin="normal"
                  type="number"
                  inputProps={{ min: "0", step: "1" }}
                  required
                />
              </Grid>
              <Grid item container xs={weekDayGridSize} className={weekDaysMargin}>
                <Field
                  name="available_time_5"
                  component={TextField}
                  label="Saturday"
                  margin="normal"
                  type="number"
                  inputProps={{ min: "0", step: "1" }}
                  required
                />
              </Grid>
              <Grid item container xs={weekDayGridSize} className={weekDaysMargin}>
                <Field
                  name="available_time_6"
                  component={TextField}
                  label="Sunday"
                  margin="normal"
                  type="number"
                  inputProps={{ min: "0", step: "1" }}
                  required
                />
              </Grid>
            </Grid>
            <Button
              variant="outlined"
              className={buttonStyles}
              type="submit"
              loading={loading}
              disabled={loading}
            >
              Create
            </Button>
          </Grid>
        </Form>
      )}
      }
    />
  )
}

TimesheetForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  createTimesheets: PropTypes.func.isRequired,
}

const mapStatToProps = ({ timesheetScheduledHours }) => ({
  loading: timesheetScheduledHours.loading,
});

const mapDispatchToProps = dispatch => ({
  createTimesheets: (params) => dispatch(createTimesheet(params)),
  onNotificationError: (error) => dispatch(setNotificationError(error)),
})


export default connect(mapStatToProps, mapDispatchToProps)(TimesheetForm);
