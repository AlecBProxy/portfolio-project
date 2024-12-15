import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Techs from "./components/Techs";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <AboutMe />
      <Techs />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
