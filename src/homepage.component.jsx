import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="hompage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Idle Hands</h1>
          <span className="subtitile">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Oxygen Tanks</h1>
          <span className="subtitile">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Companions</h1>
          <span className="subtitile">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Boards</h1>
          <span className="subtitile">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Noise Reduction</h1>
          <span className="subtitile">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
