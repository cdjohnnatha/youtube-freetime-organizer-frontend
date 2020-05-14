import React from 'react';
import { func, shape } from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import YouTube from 'react-youtube';
const styles = {
  textGridStyles: {
    marginBottom: '2em',
  }
}

const VideoCard = ({ timesheetVideo, onVideoEndHandler }) => {
  const {
    id,
    title,
    description,
    youtube_video_id_key,
  } = timesheetVideo;

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 1,
      modestbranding: 0,
      rel: 0,
    },
  };

  return (
    <CardContent>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          xs={6}
        >
          <Grid item style={styles.textGridStyles}>
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {description}
            </Typography>
          </Grid>
          <Grid>
            <YouTube
              opts={opts}
              videoId={youtube_video_id_key}
              onEnd={() => onVideoEndHandler(id)} 
            />
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  );
}




export default VideoCard;