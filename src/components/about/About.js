import React from "react";
import "./about.css";
import My from "../../img/Word-photo.jpg";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={My} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Passionate Mobile Application Developer with over 2 years of
          experience.
        </p>
        <p className="a-desc">
          I'm a Mobile Application Developer specializing in building
          cross-platform apps using the React Native framework. With a Bachelor
          of Science in Computer Science and Information Technology (BSc. CSIT)
          from St. Lawrence College, affiliated with Tribhuvan University, I
          have honed my skills in developing scalable and efficient applications
          that provide seamless user experiences.
        </p>
        <p className="a-desc">
          My journey in software development began during my academic years, and
          since then, I've worked on numerous projects that span diverse
          industries. Beyond coding, I take pride in problem-solving, team
          collaboration, and staying updated with the latest technology trends.
        </p>
        <p className="a-desc">
          In addition to mobile app development, I'm skilled in modern front-end
          frameworks, API integration, and maintaining clean, maintainable code.
          I thrive on challenges that require creativity, logical thinking, and
          innovation.
        </p>
      </div>
    </div>
  );
};

export default About;
