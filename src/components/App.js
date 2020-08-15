import React from "react";

import "./App.scss";

//import all components here
import Header from "./Header/Header";
import About from "./About/About";
import Skills from "./Skills/Skills";

function App() {
  return (
    //This fragment should contain all the child components
    <>
      <Header />
      <About />
      <Skills />
    </>
  );
}

export default App;
