import React from 'react';
import '../styles/menu-tiles.css';

const MenuTiles = (props) => {
  return (
    <div>
      <div className="outer-wrapper">
        <div className="tiles-wrapper">
          <div className="box-title-wrapper">
            <h2>{props.sectionTitle}</h2>
            <p>{props.showAll}</p>
          </div>
          <div className="main-box">
            <div className="title-and-subtitle-wrapper">
              <h4>{props.inBoxTitle}</h4>
              <div className="box-subtitle-wrapper">
                <p>{props.inBoxSubtitle}</p>
                <p>{props.inBoxRightSubtitle}</p>
              </div>
            </div>
          </div>
          <div className="bottom-box-wrapper">
            <div className="bottom-box">
              <div className="bottom-box-text-wrapper">
                <p>Left Bottom</p>
                <p>Left Bottom</p>
              </div>
            </div>
            <div className="bottom-box">
              <div className="bottom-box-text-wrapper">
                <p>Right Bottom</p>
                <p>Right Bottom</p>
              </div>
            </div>
          </div>
        </div>
        <div className="side-box-wrapper">
          <div className="side-box">
            <div className="bottom-box-text-wrapper">
              <p>Side Box left</p>
              <p>Side Box right</p>
            </div>
          </div>
          <div className="side-box">
            <div className="bottom-box-text-wrapper">
              <p>Side Box left</p>
              <p>Side Box right</p>
            </div>
          </div>
          <div className="bottom-side-box">
            <div>Bottom</div>
            <div>Right Corner</div>
          </div>
        </div>
      </div>
      <div className="right-item-wrapper">
        <h2>Right Item</h2>
        <div className="right-box">
          <h4>Right Side Box title</h4>
        </div>
      </div>
    </div>
  );
}

export default MenuTiles;
