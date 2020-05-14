import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'

const TimesheetGridElements = ({ title, content, direction }) => (
  <Grid item style={{ marginBottom: '1em' }}>
    <Grid container item direction={direction}>
      <Typography component="h1" style={{ marginRight: '1em' }}>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ color: 'grey' }}
      >
        {content}
      </Typography>
    </Grid>
  </Grid>
);

TimesheetGridElements.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  direction: PropTypes.string,
};

TimesheetGridElements.defaultProps = {
  title: '',
  content: '',
  direction: 'row',
}

export default TimesheetGridElements;
