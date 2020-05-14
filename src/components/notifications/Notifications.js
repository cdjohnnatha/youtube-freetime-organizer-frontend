import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Alert from '@material-ui/lab/Alert';
import { connect } from "react-redux";

import { cleanNotifications } from '../../store/notification/actions';

const Notifications = ({ notifications, onCleanNotification, timeoutToHidden }) => {
  let renderAlert = null;

  useEffect(() => {
    if (notifications.message || notifications.error) {
      setTimeout(() => {
        onCleanNotification();
      }, timeoutToHidden)
    }
  }, [notifications]);
  if (notifications.message || notifications.error) {
    renderAlert = (
      <Alert variant="filled" severity={notifications.error ? 'error' : 'success'}>
        {notifications.message}
      </Alert>
    );
  }

  return renderAlert;
}

Notifications.propTypes = {
  notifications: PropTypes.shape({
    message: PropTypes.string,
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
  onCleanNotification: PropTypes.func,
  timeoutToHidden: PropTypes.number,
}
Notifications.defaultProps = {
  timeoutToHidden: 1500,
}

const mapStatToProps = ({ notifications }) => ({
  notifications,
})

const mapDispatchToProps = dispatch => ({
  onCleanNotification: () => dispatch(cleanNotifications()),
})

export default connect(mapStatToProps, mapDispatchToProps)(Notifications);
