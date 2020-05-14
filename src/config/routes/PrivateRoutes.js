import React from 'react'
import { Switch, Router, Route } from 'react-router-dom';
import history from '../history';
import Layout from '../../components/layout/Layout';
import Container from '@material-ui/core/Container';

const PrivateRoutes = () => {
  return (
    <Layout>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Container} />
        </Switch>
      </Router>
    </Layout>
  )
}

export default PrivateRoutes;
