import React from "react";

import "./App.scss";

//import all components here
import Header from "./Header/Header";
import About from "./About/About";

function App() {
  return (
    //This fragment should contain all the child components
    <>
      <Header />
      <About />
    </>
  );
}

export default App;
