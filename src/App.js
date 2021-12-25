import React from 'react';
import './App.css';
import title from '../src/assets/json/main_box.json';
import Header from './components/Header';
import MenuTiles from './components/MenuTiles';

function App() {
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
      <div className="content-wrapper">
        <Header />
        {renderBoxMainTitle}
      </div>
    </div>
  );
}

export default App;
