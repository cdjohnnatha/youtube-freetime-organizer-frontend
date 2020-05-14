import React from 'react'
import { Switch, Router, Route } from 'react-router-dom';
import history from '../history';
import Layout from '../../components/layout/Layout';
import Container from '@material-ui/core/Container';
import Videos from '../../containers/video/Video';
import Timesheets from '../../containers/timesheets/Timesheets';

const PrivateRoutes = () => {
  return (
    <Layout>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Container} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/timesheets/new" exact component={Timesheets} />
        </Switch>
      </Router>
    </Layout>
  )
}

export default PrivateRoutes;
