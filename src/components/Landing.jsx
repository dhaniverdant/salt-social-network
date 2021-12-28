import React from 'react';
import Header from './Header';
import MobileHeader from './MobileHeader';
import { useMediaQuery } from 'react-responsive';
import title from '../assets/json/main_box.json';
import MenuTiles from './MenuTiles';
import '../styles/landing.css';
import Activity from './Activity';
import Channels from './Channels';
import Footer from './Footer';

const Landing = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const renderBoxMainTitle = title.map((data, index) => {
    const firstItem = data.id === 1;
    const secondItem = data.id === 2;
    const chooseRightItem = firstItem ? <Activity /> : secondItem ? <Channels /> : "";

    return (
      <div key={index}>
        <MenuTiles
          sectionTitle={data.main_title}
          showAll={data.show_all}
          inBoxTitle={data.in_box_title}
          inBoxSubtitle={data.in_box_subtitle}
          inBoxRightSubtitle={data.in_box_right_subtitle}
          rightSideItem={chooseRightItem}
        />
      </div>
    );
  });

  return (
    <>
      <div className="app-wrapper">
        <div className="header-wrapper">{isBigScreen ? <Header /> : <MobileHeader />}</div>
        <div className="content-wrapper">
          {renderBoxMainTitle}
        </div>
      </div>
        <div>
          <Footer />
        </div>
    </>
  );
}

export default Landing;
