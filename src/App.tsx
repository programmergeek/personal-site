import React from "react";
import "./App.css";
import { AboutMe, HeroBanner, Navbar, Projects, Skills } from "./Components";

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
