import React, { useState } from 'react';
import header from '../assets/json/header.json';
import { slide as Burger, Item } from "burger-menu";
import 'burger-menu/lib/index.css';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const renderMenuName = header.map((data, index) => {
    return (
      <div
        key={index}
        style={{
          color: "rgba(139, 13, 13, 0.863)",
          marginBottom: "15px",
          fontWeight: "bold"
        }}
      >
        {data.menu}
      </div>
    );
  });
  return (
    <div style={{marginBottom: "20px"}}>
      <div onClick={() => setIsOpen(!isOpen)} style={{float: "right"}}>
        <img
          src="/hamburger_icon_white.png"
          alt="menu"
          width={"25px"}
          height={"25px"}
        />
      </div>
      <Burger
        className="burger-menu"
        isOpen={isOpen}
        selectedKey={'entry'}
        onClose={() => setIsOpen(false)}
      >
        <div className="profile-wrapper">
        <div className="upload-box">Upload</div>
          <div className="profile-box" />
          <div className="username-wrapper">
            <div>Name</div>
            <div>UserName</div>
          </div>
        </div>
        <Item
          itemKey={'menu'}
          text={renderMenuName}
        />
      </Burger>
      <div className="title">
        <h2 style={{color: "rgb(253, 253, 198)"}}>Social</h2>
        <p style={{color: "rgb(253, 253, 198)", fontSize: "24px"}}>Network</p>
      </div>
      <div>
        <input type="text" name="name" className="input" placeholder="Find..." />
      </div>
    </div>
  );
}

export default MobileHeader;
