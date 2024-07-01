// components/LiveScoreWidget.js

import React from 'react';

const LiveScoreWidget = () => {
  return (
    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
            src="https://www.youtube.com/embed/qnEbhZlePxE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Live Stream"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
    </div>
  );
};

export default LiveScoreWidget;
