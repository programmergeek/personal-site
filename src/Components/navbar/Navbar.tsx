import React from "react";

export const Navbar: React.FC = () => {
  return (
    <div className="d-flex center">
      <a href="#about-me">
        <button className="btn btn-secondary font-primary">About Me</button>
      </a>
      <a href="#skills">
        <button className="btn btn-secondary font-primary">Skills</button>
      </a>
      <a href="#projects">
        <button className="btn btn-secondary font-primary">Projects</button>
      </a>
      <a href="#contact">
        <button className="btn btn-secondary font-primary">Contact</button>
      </a>
    </div>
  );
};
