
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import CustomTextField from '@material-ui/core/TextField';
import { string } from 'prop-types';

const TextField = ({
  label,
  format,
  error,
  field,
  form,
  ...otherProps
}) => {
  let extraProps = {};

  if (form) {
    const { touched, errors } = form;
    error = touched[field.name] && errors[field.name] ? errors[field.name] : '';
  }

  if (format) {
    const currentInputProps = otherProps.InputProps ? otherProps.InputProps : {};
    extraProps.InputProps = {
      ...currentInputProps,
      inputProps: { format }
    };
  }

  return (
    <FormControl fullWidth error={error ? true : false}>
      <CustomTextField
        {...otherProps}
        {...field}
        {...extraProps}
        label={label}
        error={error ? true : false}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

TextField.defaultProps = {
  // validationRegex: alphaNumericCharactersAllowed
};

TextField.propTypes = {
  label: string
};

export default TextField;