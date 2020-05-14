import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form } from 'formik';
import { object, string, ref } from 'yup';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import EmailPasswordFields from '../../../components/emailPasswordFields/EmailPasswordFields';
import Button from '../../../components/button/Button';
import TextField from '../../../components/textField/TextField';
import { signUpEmailProvider } from '../../../store/auth/actions';
import history from '../../../config/history';

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

const SignUpForm = ({ onSignUp, notifications, loading }) => {
  const { formMarginStyles, buttonStyles, signUpButtonStyles } = useStyles();
  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }
  const yupValidationSchema = object({
    email: string().max(80).email().required(),
    password: string().min(8).required(),
    first_name: string().required(),
    last_name: string().required(),
    passwordConfirmation: string()
      .oneOf([ref('password'), null], 'Passwords must match')
  });

  const onSubmit = async ({ passwordConfirmation, email, password, ...params }) => {
    params.auth_provider = { email, password };
    const success = await onSignUp(params);
    if (success) {
      history.push('/login');
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupValidationSchema}
      onSubmit={onSubmit}
      render={({ isSubmitting, ...props }) => (
          <Form>
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
              <Grid item >
                <Field
                  name="passwordConfirmation"
                  component={TextField}
                  label="Password confirmation"
                  margin="normal"
                  type="password"
                  required
                />
              </Grid>
              <Button
                type="submit"
                variant="outlined"
                className={buttonStyles}
                disabled={loading}
                loading={loading}
              >Create account</Button>
              <Grid container justify="flex-end">
                <Grid item className={signUpButtonStyles}>
                  <Link href="/" variant="body2">
                    {"Already have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )
      } />
  )
}

SignUpForm.propTypes = {
  onSignUp: PropTypes.func.isRequired,
  notifications: PropTypes.shape({
    message: PropTypes.string,
    error: PropTypes.shape({}),
  }),
  loading: PropTypes.bool,
};

const mapStatToProps = ({ auth, notifications }) => ({
  error: auth.error,
  message: auth.message,
  notifications,
  loading: auth.loading,
});

const mapDispatchToProps = dispatch => ({
  onSignUp: (params) => dispatch(signUpEmailProvider(params)),
})

export default connect(mapStatToProps, mapDispatchToProps)(SignUpForm);