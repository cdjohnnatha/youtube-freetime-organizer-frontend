import React from 'react'
import { Field } from 'formik';
import TextField from '../textField/TextField';

const EmailPasswordFields = () => {
  return (
    <>
      <Field
        name="email"
        component={TextField}
        label="Email"
        margin="normal"
        type="email"
        required
      /> 
      <Field
        name="password"
        component={TextField}
        label="Password"
        margin="normal"
        type="password"
        required
      /> 
    </>
  )
}

export default EmailPasswordFields;
