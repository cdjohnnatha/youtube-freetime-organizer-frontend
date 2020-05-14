import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

import history from '../../../config/history';
import EmailPasswordFields from '../../../components/emailPasswordFields/EmailPasswordFields';
import Button from '../../../components/Button/Button';

import { signInEmailProvider } from '../../../store/auth/actions';

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

const AuthForm = ({ onAuth, loading, error, redirectPath }) => {
  const { formMarginStyles, buttonStyles, signUpButtonStyles } = useStyles();
  const initialValues = {
    email: '',
    password: '',
  }
  const yupValidationSchema = object({
    email: string().max(80).email().required(),
    password: string().required(),
  })
  const onSubmit = async (values) => {
    console.log('[sending]', values);
    const response = await onAuth(values);
    console.log('[response]', response);
  }

  useEffect(() => {
    history.push(redirectPath);
  }, [redirectPath]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupValidationSchema}
      onSubmit={onSubmit}
      render={({ isSubmitting, ...props }) => (
        <Form>
          <Grid container direction="column" className={formMarginStyles}>
            <EmailPasswordFields />
            <Button
              variant="outlined"
              className={buttonStyles}
              type="submit"
              loading={loading}
            >
              Login
            </Button>
            <Grid container justify="flex-end">
              <Grid item className={signUpButtonStyles}>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    />
  )
}

AuthForm.propTypes = {

}

const mapStatToProps = ({ auth }) => {
  console.log('propsp[', auth);
  return {
    loading: auth.loading,
    error: auth.error,
  //   // isAthenticated: auth.client !== null,
    redirectPath: auth.redirectPath
  };
}

const mapDispatchToProps = dispatch => ({
  onAuth: (email, password) => dispatch(signInEmailProvider(email, password)),
})


export default connect(mapStatToProps, mapDispatchToProps)(AuthForm);
