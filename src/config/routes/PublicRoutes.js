import React from 'react'
import { Switch, Router, Route } from 'react-router-dom';
import history from '../history';
import Auth from '../../containers/Auth/Auth';

const PublicRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Auth} />
      </Switch>
    </Router>
  )
}

export default PublicRoutes;
