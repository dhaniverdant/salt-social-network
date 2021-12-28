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
      <div className="title-wrapper">
        <div className="title">
          <h1 style={{color: "rgb(253, 253, 198)"}}>Social</h1>
          <p style={{color: "rgb(253, 253, 198)", fontSize: "32px"}}>Network</p>
        </div>
        <div>
          <input type="text" name="name" className="input" placeholder="Find..." />
        </div>
        <div className="upload-box">Upload</div>
        <div className="profile-wrapper">
          <div className="profile-box" />
          <div className="username-wrapper">
            <div>Name</div>
            <div>UserName</div>
          </div>
        </div>
      </div>
      <hr style={{borderTop: "1px solid rgb(253, 253, 198)"}} />
      <div className="header-inline">{renderData}</div>
      <hr style={{borderTop: "1px solid rgb(253, 253, 198)"}} />
    </div>
  );
}

export default Header;
