import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik';
import { object, string } from 'yup';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import EmailPasswordFields from '../../../components/emailPasswordFields/EmailPasswordFields';
import Button from '../../../components/Button/Button';

const useStyles = makeStyles((theme) => ({
  formMarginStyles: {
    padding: theme.spacing(2),
  },
  buttonStyles: {
    marginTop: theme.spacing(4),
  },
  signUpButtonStyles: {
    marginTop: '1em',
  },
}));

const SignUpForm = props => {
  const { formMarginStyles, buttonStyles, signUpButtonStyles } = useStyles();
  const initialValues = {
    email: '',
    password: '',
  }
  const yupValidationSchema = object({
    email: string().max(80).email().required(),
    password: string().min(8).required(),
  })
  const onSubmit = (values) => {

  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupValidationSchema}
      onSubmit={onSubmit}
    >
      <Grid container direction="column" className={formMarginStyles}>
        <Grid item container direction="row">
          <Grid item container xs={6} style={{ paddingRight: '0.5em' }}>
            <Field
              name="first_name"
              component={TextField}
              label="First name"
              margin="normal"
              required
            />
          </Grid>
          <Grid item container xs={6} style={{ paddingLeft: '0.5em' }}>
            <Field
              name="last_name"
              component={TextField}
              label="Last name"
              margin="normal"
              required
            />
          </Grid>
        </Grid>
        <EmailPasswordFields />
        <Button variant="outlined" className={buttonStyles}>Login</Button>
        <Grid container justify="flex-end">
          <Grid item className={signUpButtonStyles}>
            <Link href="/" variant="body2">
              {"Already have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Formik>
  )
}

SignUpForm.propTypes = {

}

export default SignUpForm
