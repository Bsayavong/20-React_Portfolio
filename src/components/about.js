import React from 'react';
import Profile from '../assets/images/profile.png';
import '../styles/about.css';

export default function About() {
    return (
        <section className='card text-center'>
            <div className="card-header mb-1">
                About Me
            </div>
            <img className="me" src={Profile} alt="me"></img>
            <p className='card-text mb-1'>
            During my career of 7+ years as a logistics specialist, I have gained an expertise to exceed
            performance standards in diverse work environments. Currently I am enrolled in the University of Washington Bootcamp
            to become a full-stack developer.
                <br />
                I am passionate about cooking, camping and travel. Recently I've acquired a fond interest in coding and web development.
            </p>
        </section>
    );
}