import React from 'react'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import history from '../../../config/history';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const SidebarMenu = () => {
  const { drawer, drawerPaper, toolbar } = useStyles();

  const onClickItemHandler = (pageIndex) => {
    history.push(pageIndex);
  }

  return (
    <Drawer
      className={drawer}
      variant="permanent"
      classes={{
        paper: drawerPaper,
      }}
      anchor="left"
    >
      <div className={toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={() => onClickItemHandler('dashboard')}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
        <ListItem button onClick={() => onClickItemHandler('schedules')}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={"Schedules"} />
        </ListItem>
        <ListItem button key="Videos" onClick={() => onClickItemHandler('videos')}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={"Videos"} />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  )
}

export default SidebarMenu;
