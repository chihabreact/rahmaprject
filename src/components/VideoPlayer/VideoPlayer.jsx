import React from 'react';
import video from '../../assets/video.mp4'
import './videoPlayer.style.scss'
const VideoPlayer = () => {
  return (
    <div className='video'>
      <video
        src={video} // Replace with the actual path to your video file
        autoPlay
        loop
        muted
        
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
