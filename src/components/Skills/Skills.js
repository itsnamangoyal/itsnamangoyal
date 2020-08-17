import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import skillsData from "./skillsData";

import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <SectionHeader heading="what i do?" id='skills' />
      <div className="skills">
        {skillsData.map((skill) => {
          return (
            <div className="skill" key={skill.id}>
              <h1 className="name">
                {skill.name}
                <img src={skill.logo} alt="" />
              </h1>
              <div className="images">
                {skill.images.map((image, index) => {
                  return <img src={image} alt={index} key={index} />;
                })}
              </div>
              <p className="content">{skill.content}</p>
              <hr className="skill-seperator"></hr>
            </div>
          );
        })}
        <div className="last">learning something new...</div>
      </div>
    </>
  );
};

export default Skills;
