import React from "react";

import "./About.scss";

import my_pic from "../../Assets/my_pic.jpeg";

const About = () => {
  return (
    <div className="about-section">
      <div className="left">
        <p className="upper">
          Hi, I’m <span>Naman.</span>
        </p>
        <p className="lower">
          I am currently pursuing my Bachelors of Technolody in Information
          Technology, and I love to design and develop websites.
        </p>
        <p>
          <span>I strive to make web a beautiful place.</span>
        </p>
      </div>
      <div className="right">
        <img src={my_pic} alt="my pic"></img>
      </div>
    </div>
  );
};

export default About;
