import React from 'react';
import Header from './Header';
import MobileHeader from './MobileHeader';
import { useMediaQuery } from 'react-responsive';
import title from '../assets/json/main_box.json';
import MenuTiles from './MenuTiles';
import '../styles/landing.css';

const Landing = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const renderBoxMainTitle = title.map((data, index) => {
    return (
      <div key={index}>
        <MenuTiles
          sectionTitle={data.main_title}
          showAll={data.show_all}
          inBoxTitle={data.in_box_title}
          inBoxSubtitle={data.in_box_subtitle}
          inBoxRightSubtitle={data.in_box_right_subtitle}
        />
      </div>
    );
  });

  return (
    <div className="app-wrapper">
      <div className="header-wrapper">{isBigScreen ? <Header /> : <MobileHeader />}</div>
      <div className="content-wrapper">
        {renderBoxMainTitle}
      </div>
    </div>
  );
}

export default Landing;
