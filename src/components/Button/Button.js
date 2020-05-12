import React from 'react';
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles';
import { string, any, bool } from 'prop-types';

const useStyles = makeStyles(theme => ({
  circularProgressStyle: {
    display: 'block',
    position: 'absolute',
    marginTop: 0,
    marginBottom: 0,
  },
}));

const DefaultButton = ({ loading, children, ...props }) => {
  const classes = useStyles();
  let loadingProgress = null;
  if (loading) {
    loadingProgress = <CircularProgress size={30} className={classes.circularProgressStyle} />;
  }
  return (
    <Button {...props}>
      {children}
      {loadingProgress}
    </Button>
  )
};

DefaultButton.propTypes = {
  loading: bool,
}

DefaultButton.defaultProps = {
  loading: false,
}

export default DefaultButton;