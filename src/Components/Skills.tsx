import React from "react";
import TS from "./../assets/images/TS.svg";
import JS from "./../assets/images/JS.svg";
import CSS from "./../assets/images/CSS.svg";
import ReactSVG from "./../assets/images/React.svg";

export const Skills: React.FC = () => {
  return (
    <div>
      <h1 className="header">Skills</h1>
      <div className="d-flex center">
        <img src={TS} alt="typescript" className="image-padding" />
        <img src={JS} alt="javascript" className="image-padding" />
        <img src={CSS} alt="css" className="image-padding" />
        <img src={ReactSVG} alt="react" className="image-padding" />
      </div>
    </div>
  );
};
