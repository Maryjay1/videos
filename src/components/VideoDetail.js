import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <di>Loading..</di>;
  }
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
