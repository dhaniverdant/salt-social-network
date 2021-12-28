import React from 'react';
import channels from "../assets/json/channels.json";
import { useMediaQuery } from 'react-responsive';
import "../styles/channels.css";

const Channels = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const chooseChannelClassName = isBigScreen ? "channels-wrapper" : "tiles-wrapper";
  const renderChannels = channels.map((data, index) => {
    return (
      <div key={index}>
        <div className="channels-box">
          <div>{data.channel_name}</div>
        </div>
      </div>
    );
  });

  return (
    <div className={chooseChannelClassName}>
      <div className="activity-title">
        <h2>Channels</h2>
        <p>Browse All</p>
      </div>
      <div className="channels-right-box">
        {renderChannels}
      </div>
    </div>
  );
}

export default Channels;
