import React from 'react';
import PasswordGenerator from '../assets/images/password-generator.png';
import JsQuiz from '../assets/images/js-quiz.png';
import WorkDayScheduler from '../assets/images/work-day-scheduler.png';
import WeatherDashboard from '../assets/images/weather-dashboard.png';
import JobFinder from '../assets/images/job-finder.png';
import JustAnotherTextEditor from '../assets/images/jate.png';
import '../styles/portfolio.css';

export default function Portfolio() {
    const projects = [
        {
            name: 'PasswordGenerator',
            description: 'Password generator, can create a length between 8 to 128 characters.',
            link: "https://bsayavong.github.io/password-generator03/",
            repo: "https://github.com/Bsayavong/password-generator03",
            image: PasswordGenerator,
        },
        {
            name: 'JsQuiz',
            description: 'Timed quiz on JavaScript fundamentals that stores high scores',
            link: "https://bsayavong.github.io/JS-Quiz-04/",
            repo: "https://github.com/Bsayavong/JS-Quiz-04",
            image: JsQuiz,
        },
        {
            name: 'WorkDayScheduler',
            description: 'This application is a simple work calendar that can be utilized to schedule events throughout a work day',
            link: "https://bsayavong.github.io/05-Work-Day-Scheduler/",
            repo: "https://github.com/Bsayavong/05-Work-Day-Scheduler",
            image: WorkDayScheduler,
        },
        {
            name: 'WeatherDashboard',
            description: `This is a weather application that will search current and 5 day forecast when a specified city is inputted into the form.`,
            link: "https://bsayavong.github.io/06-Weather-Dashboard/",
            repo: "hhttps://github.com/Bsayavong/06-Weather-Dashboard",
            image: WeatherDashboard,
        },
        {
            name: 'JobFinder',
            description: 'This project presented is a simple job search engine.',
            link: "https://sheetaljwl795.github.io/dream-job-finder/",
            repo: "https://github.com/sheetaljwl795/dream-job-finder",
            image: JobFinder,
        },
        {
            name: 'TextEditor',
            description: 'Create notes or code snippets with or without an internet connection that can be retrieved them for later use.',
            link: "https://pwa-19-texteditor.herokuapp.com/",
            repo: "https://github.com/Bsayavong/19-PWA_TextEditor",
            image: JustAnotherTextEditor,
        },

    ]
    return (
        <div>
            {projects.map((project, idx) => (
                <div className='card project' key={idx}>
                    <img className='mx-auto mt-1' src={project.image} alt={project.name + ' Project'}></img>
                    <div className="card-body">
                        <h5 className="card-title text-center">{project.name}</h5>
                        <p className="card-text text-center">{project.description}</p>
                        <div className='text-center'>
                            <a href={project.link} target="_blank" rel="noreferrer"> <i className="fa-solid fa-rocket fa-3x"></i></a>
                            <a href={project.repo} target="_blank" rel="noreferrer"> <i className="fa-brands fa-github fa-3x m-3 icon-color"></i></a>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    );
}