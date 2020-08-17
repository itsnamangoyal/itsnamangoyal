import React, { useState, useEffect } from "react";

import "./Projects.scss";

//component deps
import SectionHeader from "../SectionHeader/SectionHeader";
import Frame from "../Frame/Frame";
import arrow from "../../Assets/arrow.svg";

import projectsData from "./projectsData";
const totalNumberOfProjects = projectsData.length;
const Projects = () => {
  const [index, updateIndex] = useState(0);
  const [project, updateProject] = useState(projectsData[index]);
  const arrowClickHandler = (e) => {
    // console.log(e);
    const idOfArrow = e.target.id;
    if (idOfArrow === "left") {
      if (index === 0) {
        updateIndex(totalNumberOfProjects - 1);
      } else {
        updateIndex((index) => index - 1);
      }
    } else if (idOfArrow === "right") {
      if (index === totalNumberOfProjects - 1) {
        updateIndex(0);
      } else {
        updateIndex((index) => index + 1);
      }
    }
  };
  useEffect(() => {
    updateProject(projectsData[index]);
  }, [index]);

  return (
    <>
      <SectionHeader heading="my projects" id="projects" />
      <div className="projects-section">
        <img
          className="arrow"
          id="left"
          src={arrow}
          alt="left arrow"
          onClick={arrowClickHandler}
          onTouchEnd={arrowClickHandler}
        />
        <img
          className="arrow"
          id="right"
          src={arrow}
          alt="right arrow"
          onClick={arrowClickHandler}
          onTouchEnd={arrowClickHandler}
        />
        <div className="top">
          <div className="left">
            <span className="name">{project.name}</span>
            <span className="for">{project.for}</span>
          </div>
          <div className="right">
            <a href={project.link} target="new">
              <button>live preview</button>
            </a>
          </div>
        </div>
        <Frame pic={project.image} />
      </div>
    </>
  );
};

export default Projects;
