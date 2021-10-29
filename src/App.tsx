import React from "react";
import "./App.css";
import { AboutMe, HeroBanner, Navbar, Skills } from "./Components";

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <Navbar />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
