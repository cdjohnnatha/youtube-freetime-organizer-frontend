import React from 'react';
import { string } from 'prop-types';
import { Typography, Avatar, Grid } from '@material-ui/core';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

const styles = {
  mainGridContainerStyle: {
    padding: '3em',
  },
  avatarContainerStyle: {
    marginBottom: '2em',
  }
}

const EmptyContent = ({ message }) => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={styles.mainGridContainerStyle}
    >
      <Grid style={styles.avatarContainerStyle}>
        <Avatar>
          <SentimentDissatisfiedIcon />
        </Avatar>
      </Grid>
      <Grid>
        <Typography>{message}</Typography>
      </Grid>
    </Grid>
  )
}

EmptyContent.propTypes = {
  message: string,
}

EmptyContent.defaultProps = {
  message: 'It was not found any content for this resource',
}

export default EmptyContent;
