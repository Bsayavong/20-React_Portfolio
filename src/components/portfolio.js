import React from "react";
import PasswordGenerator from "../assets/images/password-generator.png";
import JsQuiz from "../assets/images/js-quiz.png";
import WorkDayScheduler from "../assets/images/work-day-scheduler.png";
import WeatherDashboard from "../assets/images/weather-dashboard.png";
import JobFinder from "../assets/images/job-finder.png";
import JustAnotherTextEditor from "../assets/images/jate.png";
import styles from "../styles/portfolio.module.css";
import github from "../assets/images/github_mark.svg";
import link from "../assets/images/link.png";

export default function Portfolio() {
  const projects = [
    {
      name: "PasswordGenerator",
      description:
        "Password generator, can create a length between 8 to 128 characters.",
      link: "https://bsayavong.github.io/password-generator03/",
      repo: "https://github.com/Bsayavong/password-generator03",
      image: PasswordGenerator,
    },
    {
      name: "JsQuiz",
      description:
        "Timed quiz on JavaScript fundamentals that stores high scores",
      link: "https://bsayavong.github.io/JS-Quiz-04/",
      repo: "https://github.com/Bsayavong/JS-Quiz-04",
      image: JsQuiz,
    },
    {
      name: "WorkDayScheduler",
      description:
        "This application is a simple work calendar that can be utilized to schedule events throughout a work day",
      link: "https://bsayavong.github.io/05-Work-Day-Scheduler/",
      repo: "https://github.com/Bsayavong/05-Work-Day-Scheduler",
      image: WorkDayScheduler,
    },
    {
      name: "WeatherDashboard",
      description: `This is a weather application that will search current and 5 day forecast when a specified city is inputted into the form.`,
      link: "https://bsayavong.github.io/06-Weather-Dashboard/",
      repo: "hhttps://github.com/Bsayavong/06-Weather-Dashboard",
      image: WeatherDashboard,
    },
    {
      name: "JobFinder",
      description: "This project presented is a simple job search engine. where you can search for jobs by location and job title.",
      link: "https://sheetaljwl795.github.io/dream-job-finder/",
      repo: "https://github.com/sheetaljwl795/dream-job-finder",
      image: JobFinder,
    },
    {
      name: "TextEditor",
      description:
        "Create notes or code snippets with or without an internet connection that can be retrieved them for later use.",
      link: "https://pwa-19-texteditor.herokuapp.com/",
      repo: "https://github.com/Bsayavong/19-PWA_TextEditor",
      image: JustAnotherTextEditor,
    },
  ];
  return (
    <section className={styles.section} id="portfolio">
      <div className={`container`}>
        <h1 className="text-center fw-bold">Porfolio</h1>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <div className={styles.project} key={index}>
              <img
                src={project.image}
                alt={project.name}
                className={styles.projectimg}
              />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className={styles.links}>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={link} alt="link" />
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <img src={github} alt="github" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
