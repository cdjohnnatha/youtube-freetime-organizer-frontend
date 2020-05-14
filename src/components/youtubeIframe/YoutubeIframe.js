import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { string } from 'yup'

const YoutubeIframe = ({ width, heigh }) => {


  useEffect(() => {
    console.log('testestse');
    console.log(window);
    window.addEventListener("onStateChange", event => {
      console.log("event", event.data);
    });
  }, []);

  const onPlayerStateChange = (event) => {
    console.log(event);
    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //   setTimeout(stopVideo, 6000);
    //   done = true;
    // }
  }

  return (
    <iframe
      id="video"
      width={width}
      heigh={heigh}
      src={"https://www.youtube.com/embed/6Ejga4kJUts"}
      frameBorder="0"
      allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      events={{
        'onStateChange': onPlayerStateChange
      }}
    />
  )
}

YoutubeIframe.propTypes = {
  width: string,
  heigh: string,
}
YoutubeIframe.defaulProps = {
  width: "230",
  heigh: "154"
}

export default YoutubeIframe;
