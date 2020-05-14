import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { connect } from "react-redux";


import VideoCard from '../../components/videoCard/VideoCard';
import EmptyContent from '../../components/emptyContent/EmptyContent';

import { fetchTimesheetScheduledHours, setWatchedVideo } from '../../store/timesheet-scheduled-hours/action';

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
  onWatched,
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
  let renderContent = (<EmptyContent message={'You have any video for today'} />);

  const onVideoEndHandler = async (timesheet_video_id) => {
    await onWatched(timesheet_video_id);
    setVideoState({ ...videoState, activeVideoIndex: videoState.activeVideoIndex + 1 });
  }
  if (hasVideos && videoState.activeVideoIndex < videoState.maxVideosIndex) {
    renderContent = (
      <VideoCard
        onVideoEndHandler={onVideoEndHandler}
        timesheetVideo={timesheet_videos[videoState.activeVideoIndex]}
      />
    );
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
  onWatched: (timesheet_video_id) => dispatch(setWatchedVideo(timesheet_video_id)),
});

export default connect(mapStatToProps, mapDispatchToProps)(Video);