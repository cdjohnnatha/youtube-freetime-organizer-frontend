import React from 'react'
import PropTypes from 'prop-types';
import { Container, Grid, Paper, Typography, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import AuthForm from './Form/AuthForm'

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

const Auth = props => {
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1">Sign in</Typography>
            <Typography component="h1">Your youtube freetime organizer</Typography>
          </Grid>
          <Grid item className={formStyles}>
            <AuthForm />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

Auth.propTypes = {

}

export default Auth
