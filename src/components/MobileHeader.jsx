import React, { useState } from 'react';
import header from '../assets/json/header.json';
import { slide as Burger, Item } from "burger-menu";
import 'burger-menu/lib/index.css';
import menu from '../assets/icon/hamburger_icon_white.png';

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
    <>
      <div onClick={() => setIsOpen(!isOpen)} style={{float: "right"}}>
        <img
          src={menu}
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
        <Item
          itemKey={'menu'}
          text={renderMenuName}
        />
      </Burger>
    </>
  );
}

export default MobileHeader;
