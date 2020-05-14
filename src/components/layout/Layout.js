import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";

import SidebarMenu from './sidebarMenu/SidebarMenu';
import { logout } from '../../store/auth/actions';
import history from '../../config/history';
import Notifications from '../notifications/Notifications';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Layout = ({ children, onLogout, isAthenticated, redirectPath }) => {
  const classes = useStyles();

  const redirectPage = () => {
    if (!isAthenticated) {
      history.push(redirectPath);
    }
  }

  useEffect(() => {
    redirectPage();
  }, [isAthenticated]);

  useEffect(() => {
    redirectPage();
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Youtube Freetime Organizer
          </Typography>
          <Button edge="end" color="inherit" onClick={onLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <SidebarMenu />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Notifications timeoutToHidden={2500}/>
        {children}
      </main>
    </div>
  );
};

const mapStatToProps = ({ auth }) => ({
  isAthenticated: auth.accessToken !== null,
  redirectPath: auth.redirectPath !== null,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
})

export default connect(mapStatToProps, mapDispatchToProps)(Layout);
