import React from 'react'
import { bool } from 'prop-types'
import { connect } from "react-redux";

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const Routes = ({ isLogged }) => {
  let routes = (<PublicRoutes />);
  
  if (isLogged) {
    routes = (<PrivateRoutes />);
  }
  return routes;
}

Routes.propTypes = {
  isLogged: bool,
}

Routes.defaultProps = {
  isLogged: false,
}

const mapStatToProps = ({ auth }) => ({
  isLogged: !!auth.accessToken
})

export default connect(mapStatToProps)(Routes);
