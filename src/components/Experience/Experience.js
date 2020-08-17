import React, { useState, useEffect } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import "./Experience.scss";

import arrow from "../../Assets/arrow_black.svg";

import experienceData from "./experienceData";

const totalNumberOfPost = experienceData.length;

const Experience = () => {
  const [index, updateIndex] = useState(0);
  const [post, updatePost] = useState(experienceData[index]);
  const arrowClickHandler = (e) => {
    console.log(e);
    const idOfArrow = e.target.id;
    if (idOfArrow === "left") {
      if (index === 0) {
        updateIndex(totalNumberOfPost - 1);
      } else {
        updateIndex((index) => index - 1);
      }
    } else if (idOfArrow === "right") {
      if (index === totalNumberOfPost - 1) {
        updateIndex(0);
      } else {
        updateIndex((index) => index + 1);
      }
    }
  };
  useEffect(() => {
    updatePost(experienceData[index]);
  }, [index]);

  return (
    <>
      <SectionHeader heading="work experience" />
      <div className="experience-section">
        <img
          className="arrow"
          id="left"
          src={arrow}
          alt="left arrow"
          onClick={arrowClickHandler}
          style={{ fill: "black" }}
        />
        <img
          className="arrow"
          id="right"
          src={arrow}
          alt="right arrow"
          onClick={arrowClickHandler}
        />
        <div className="experience-post-list">
          {/* {experienceData.map((post, index) => {
            return ( */}
          <div className="post">
            <div className="top">
              <div className="left">
                <span className="position">{post.postition}</span>
                <span className="organisation">{post.organisation}</span>
              </div>
              <div className="right">
                <span className="time">
                  {post.start} - {post.end || "present"}
                </span>
              </div>
            </div>
            <ul className="points">
              {post.points.map((point, index) => {
                return (
                  <li className="point" key={index}>
                    {point}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* );
          })} */}
        </div>
      </div>
    </>
  );
};

export default Experience;
