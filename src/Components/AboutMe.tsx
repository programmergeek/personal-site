import React from "react";

export const AboutMe: React.FC = () => {
  return (
    <div className="d-flex d-col center">
      <h1 className="header highlight" style={{ marginTop: 62 }}>
        Hey, I{"'"}m Will.
      </h1>
      <p
        className="p font-secondary text-center"
        style={{
          width: "75%",
          alignSelf: "center",
        }}
      >
        I hope you{"'"}re having an amazing day.
      </p>
    </div>
  );
};
