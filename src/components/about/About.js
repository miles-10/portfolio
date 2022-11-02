import React from 'react'
import './about.css';
import My from '../../img/Word-photo.jpg';
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
            Lorem ipsum dolor sit amet, consectetur
             adipiscing elit, sed do eiusmod tempor 
             incididunt ut labore et dolore magna 
             aliqua. 
            </p>
            <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis 
            aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id 
            est laborum.
            </p>
        </div>
    </div>
  )
}

export default About