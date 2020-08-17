import React from "react";

import "./App.scss";

//import all components here
import Header from "./Header/Header";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";

function App() {
  return (
    //This fragment should contain all the child components
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
