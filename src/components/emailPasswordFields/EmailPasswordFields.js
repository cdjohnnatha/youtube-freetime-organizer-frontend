import React from 'react'
import { Field } from 'formik';
import TextField from '../textField/TextField';

const EmailPasswordFields = () => {
  return (
    <>
      <Field
        id="email_field"
        name="email"
        component={TextField}
        label="Email"
        margin="normal"
        type="email"
        required
      /> 
      <Field
        name="password"
        id="password_field"
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
