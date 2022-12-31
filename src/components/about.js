import React from "react";
import Profile from "../assets/images/profile.png";
import "../styles/about.css";
import blob from "../assets/images/blob.svg";
import blob1 from "../assets/images/blob1.svg";

export default function About() {
  return (
    <section className="section bg-light" id="about">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-6 d-flex justify-content-center align-items-center about-content ">
            <div className=" d-flex-column justify-content-center align-items-center">
              <h2 className="fw-bold">About Me</h2>
              <div>
                <h1>Bryan Sayavong</h1>
              </div>
              <p className="card-text mb-1">
                During my career of 7+ years as a logistics specialist, I have
                gained an expertise to exceed performance standards in diverse
                work environments. Currently I am enrolled in the University of
                Washington Bootcamp to become a full-stack developer.
                <br />
                <br />I am passionate about cooking, camping and travel.
                Recently I've acquired a fond interest in coding and web
                development.
              </p>

              <button className="workbtn">MY WORK</button>
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-end align-items-center position-relative">
            <img src={blob} alt="blob" className="position-absolute blob" />
            <img src={blob1} alt="blob" className="position-absolute blob1" />
            <img src={Profile} alt="profile" className="about-img z-3" />
          </div>
        </div>
      </div>
    </section>
  );
}

// <p className="card-text mb-1">
//   During my career of 7+ years as a logistics specialist, I have gained
//   an expertise to exceed performance standards in diverse work
//   environments. Currently I am enrolled in the University of Washington
//   Bootcamp to become a full-stack developer.
//   <br />I am passionate about cooking, camping and travel. Recently I've
//   acquired a fond interest in coding and web development.
// </p>;
