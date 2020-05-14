import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { connect } from "react-redux";


import VideoCard from '../../components/videoCard/VideoCard';
import EmptyContent from '../../components/emptyContent/EmptyContent';

import { fetchTimesheetScheduledHours } from '../../store/timesheet-scheduled-hours/action';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const Video = ({
  fetchScheduledHours,
  loading,
  hasVideos,
  timesheet_videos,
  availableMinutes,
  dayOfWeek,
  message,
}) => {
  const [videoState, setVideoState] = useState({
    timesheet_videos,
    activeVideoIndex: 0,
    maxVideosIndex: timesheet_videos.length,
  });
  useEffect(() => {
    fetchScheduledHours();
  }, []);
  const classes = useStyles();
  let renderContent = (<EmptyContent message={message} />);
  if (hasVideos) {
    renderContent = (<VideoCard timesheetVideo={timesheet_videos[videoState.activeVideoIndex]} />);
  }

  return (
    <Card className={classes.root}>
      {renderContent}
    </Card>
  );
}

const mapStatToProps = ({ timesheetScheduledHours }) => {
  return {
    loading: timesheetScheduledHours.loading,
    hasVideos: timesheetScheduledHours.timesheet_videos.length > 0,
    timesheet_videos: timesheetScheduledHours.timesheet_videos,
    availableMinutes: timesheetScheduledHours.available_minutes,
    dayOfWeek: timesheetScheduledHours.day_of_week,
    message: timesheetScheduledHours.message,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchScheduledHours: () => dispatch(fetchTimesheetScheduledHours()),
});

export default connect(mapStatToProps, mapDispatchToProps)(Video);