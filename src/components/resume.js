import React from "react";
import styles from "../styles/resume.module.css";
import TechResume from "../assets/resume-2022.pdf";

export default function Resume() {
  return (
    <section className={styles.section} id="resume">
      <div className={`${styles.resumecon} container`}>
        <div className={styles.resume}>
          <h2>Resume</h2>
          <p>
            I'm a full-stack web developer with a background in customer service
            and a passion for learning. I'm currently enrolled in the
            University of Washington's Coding Bootcamp, and I am looking for
            opportunities to apply my skills and grow as a developer.
          </p>

          <button className={styles.resumebtn}>
            <a href={TechResume} target="_blank" rel="noreferrer">
              Download My Resume
            </a>
          </button>
        </div>
        <div>
          <h4>Skills</h4>

          {/* progress bar */}
          <div>
            <h6>HTML5/CSS3/Bootstrap/Bulma</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "95%", backgroundColor: "#000" }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                95%
              </div>
            </div>
          </div>
          <div className="mt-2">
            <h6>Javascript ES6/jQuery</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "90%", backgroundColor: "#000" }}
                aria-valuenow="89"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
          </div>

          <div className="mt-2">
            <h6>Node.js/React.js</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "88%", backgroundColor: "#000" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                88%
              </div>
            </div>
          </div>

          <div className="mt-2">
            <h6>MySQL/MongoDB</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "92%", backgroundColor: "#000" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                92%
              </div>
            </div>
          </div>

          <div className="mt-2">
            <h6>APIs/GraphQL</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "85%", backgroundColor: "#000" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// <ul className="card-text list">
//   <li>HTML5</li>
//   <li>CSS</li>
//   <li>Javascript ES6</li>
//   <li>jQuery</li>
//   <li>Node.js</li>
//   <li>React</li>
//   <li>MongoDB</li>
//   <li>Heroku</li>
//   <li>MySQL</li>
//   <li>Bootstrap</li>
//   <li>Bulma</li>
//   <li>APIs</li>
//   <li>GraphQL</li>
// </ul>;
