import React from "react";
import videoBg from "../../assets/video/bg-si-Video.MP4";
import "./Video.css";

const Video = () => {
  return (
    <div className="video-container mb-3">
      <video className="video-bg" src={videoBg} autoPlay loop muted controls />
    </div>
  );
};

export default Video;
