import React from "react";

import "./intro.css";
import Me from "../../img/img1.png";
import CV from "../../img/file/JenishShresthaResume.pdf"
const intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello My Name is</h2>
          <h1 className="i-name">Jenish Shrestha</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Mobile Application Developer</div>
              {/* <div className="i-title-item">Full Stack Developer</div> */}
            </div>
          </div>
          <p className="i-desc">
            I design and develop mobile applications for clients of all sizes,
            specializing in creating intuitive, modern, and high-performing apps
            that deliver exceptional user experiences and meet business needs.
          </p>
          <a href={CV} download className="i-button">
            Download CV
          </a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} className="i-img" />
      </div>
    </div>
  );
};

export default intro;
