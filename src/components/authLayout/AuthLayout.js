import React  from 'react'
import { Container, Paper } from '@material-ui/core';
import Notification from '../notifications/Notifications';

const AuthLayout = ({ children }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Paper>
        {children}
      </Paper>
      <Notification />
    </Container>

  )
}

export default AuthLayout;
