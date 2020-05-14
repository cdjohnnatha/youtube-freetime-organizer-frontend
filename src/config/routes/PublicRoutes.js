import React from 'react'
import { Switch, Router, Route } from 'react-router-dom';
import history from '../history';
import Auth from '../../containers/auth/Auth';
import SignUp from '../../containers/signUp/SignUp';
import AuthLayout from '../../components/authLayout/AuthLayout';

const PublicRoutes = () => {
  return (
    <AuthLayout>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Auth} />
          <Route path="/login" exact component={Auth} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </AuthLayout>
  )
}

export default PublicRoutes;
