import React from 'react';
import './VideoBackground.css'; // Import the CSS file

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video">
        <source
          src={require('../../Assets/x.mp4')}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Your Website Title</h1>
        <p>Welcome to your site with a video background!</p>
      </div>
    </div>
  );
};

export default VideoBackground;
