import React from "react";

export const AboutMe: React.FC = () => {
  return (
    <div className="d-flex d-col center" id="about-me">
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
        I first fell in love with coding and problem solving in highschool and
        now I want to make a profession out of it. I believe that team work
        makes the dream work and love working with other people, hearing their
        opinions, and making something to improve our everyday lives. My hobbies
        include gaming, reading, and sitting down to watch some shows or movies
        with the people I care about.
      </p>
    </div>
  );
};
