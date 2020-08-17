import React from "react";
import "./Frame.scss";

const Frame = ({ pic }) => {
  return (
    <>
      <div className="frame-window">
        <div className="window-bar">
          <ul className="dots">
            <li className="dot" id="red" />
            <li className="dot" id="yellow" />
            <li className="dot" id="green" />
          </ul>
        </div>
        <img className="project-image" src={pic} alt=""></img>
      </div>
    </>
  );
};

export default Frame;
