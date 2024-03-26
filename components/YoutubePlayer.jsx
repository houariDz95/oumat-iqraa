// components/YouTubePlayer.js

import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: '350',
    width: '350',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onPlayerReady = event => {
    // Prevent default click event on the YouTube player
    event.target.getIframe().setAttribute('allowfullscreen', '0');
    event.target.getIframe().setAttribute('frameborder', '0');
    event.target.getIframe().setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    event.target.getIframe().setAttribute('title', 'YouTube video player');
    event.target.getIframe().setAttribute('allowfullscreen', '');
    event.target.getIframe().setAttribute('sandbox', 'allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation');
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
};

export default YouTubePlayer;

