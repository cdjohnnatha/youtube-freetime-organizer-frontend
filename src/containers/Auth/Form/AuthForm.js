import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

import EmailPasswordFields from './EmailPasswordFields';
import Button from '../../../components/Button/Button';

const useStyles = makeStyles((theme) => ({
  formMarginStyles: {
    padding: theme.spacing(2),
  },
  buttonStyles: {
    marginTop: theme.spacing(4),
  }
}));

const AuthForm = props => {
  const { formMarginStyles, buttonStyles } = useStyles();
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
        <EmailPasswordFields />
        <Button variant="outlined" className={buttonStyles}>Login</Button>
      </Grid>
    </Formik>
  )
}

AuthForm.propTypes = {

}

export default AuthForm
