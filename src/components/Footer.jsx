import React from 'react';
import footer from '../assets/json/footer.json';
import { useMediaQuery } from 'react-responsive';
import '../styles/footer.css';

const Footer = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const renderData = footer.map((data, index) => {
    return (
      <div key={index} style={{float: "left", display: "flex"}}>
        <div>{data.menu}</div>
        <div style={{padding: "0 20px"}}>{index !== footer.length - 1 ? "/" : ""}</div>
      </div>
    );
  });
  const renderMobileMenu = footer.map((data, index) => {
    return (
      <div key={index}>
        <div>{data.menu}</div>
      </div>
    );
  });
  const chooseFooterClassName = isBigScreen ? renderData : renderMobileMenu;

  return (
    <div className="footer-wrapper">
      <div className="footer-inline">
        <div className="social-wrapper">
          <div className="social-box" />
          <div className="social-box" />
          <div className="social-box" />
        </div>
        <div className="copyright-wrapper">
          <div>Copyright 2021</div>
          <div>Privacy / Terms</div>
        </div>
        {chooseFooterClassName}
      </div>
    </div>
  );
}

export default Footer;
