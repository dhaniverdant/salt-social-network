import React from 'react';
import { useMediaQuery } from 'react-responsive';
import activity from "../assets/json/activity.json";
import "../styles/activity.css";

const Activity = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const chooseRightBoxClassName = isBigScreen ? "right-item-wrapper" : "tiles-wrapper";
  const renderActivity = activity.map((data, index) => {
    return (
      <div key={index} className="box-and-subtitle-wrapper">
        <div className="small-right-box" />
        <div>
          <div>{data.title}</div>
          <div>{data.subtitle}</div>
          <div>{data.time}</div>
        </div>
      </div>
    );
  });

  return (
    <div className={chooseRightBoxClassName}>
      <div className="activity-title">
        <h2>Activity</h2>
        <p>Browse All</p>
      </div>
      <div className="right-box">
        {renderActivity}
      </div>
    </div>
  );
}

export default Activity;
