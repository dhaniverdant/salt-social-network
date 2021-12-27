import React from 'react';
import header from '../assets/json/header.json';
import '../styles/header.css';

const Header = () => {
  const renderData = header.map((data, index) => {
    return (
      <div key={index} style={{float: "left", display: "flex"}}>
        <div>{data.menu}</div>
        <div style={{padding: "0 20px"}}>{index !== header.length - 1 ? "/" : ""}</div>
      </div>
    );
  });

  return (
    <div>
      <h2  style={{color: "rgb(253, 253, 198)"}}>SocialNetwork</h2>
      <hr style={{borderTop: "1px solid rgb(253, 253, 198)"}} />
      <div className="inlineList">{renderData}</div>
      <hr style={{borderTop: "1px solid rgb(253, 253, 198)"}} />
    </div>
  );
}

export default Header;
