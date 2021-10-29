import React from "react";
import "./App.css";
import { AboutMe, HeroBanner, Navbar } from "./Components";

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <Navbar />
      <AboutMe />
    </div>
  );
}

export default App;
