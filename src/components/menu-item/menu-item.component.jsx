import React from "react";
import { withRouter } from "react-router-dom"; // higher order component (a function that takes a component as an argument and renders a modified component)

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem); // wrapping MenuItem with the withRouter componet to have access to history
// doing it this way avoids bad patterns such as props tunneling/ props drilling
