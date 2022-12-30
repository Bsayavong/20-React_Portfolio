import React from 'react';
import TechResume from '../assets/resume-2022.pdf'

export default function Resume() {
    return (
        <section className="my-5 text-center">
            <div className="my-2">
                <p>
                    Download my <a href={TechResume} target="_blank" rel="noreferrer" className='resume' >Resume</a>
                </p>
                <div className="card-header">
                    A few languages and tools that I am familiar with...
                </div>
                <ul className='card-text list'>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Javascript ES6</li>
                    <li>jQuery</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Heroku</li>
                    <li>MySQL</li>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                    <li>APIs</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    );
}