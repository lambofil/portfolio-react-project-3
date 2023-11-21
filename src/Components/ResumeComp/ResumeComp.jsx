import React from "react";
import "./ResumeComp.css";

function ResumeComp() {
  return (
    <section className="resume-container">
      <div className="resume-body">
        <div className="section-title">
          <h4>Resume</h4>
          <p>CHECK MY RESUME</p>
        </div>
        <div className="summary-flex">
          <div className="summary-container">
            <div className="summary-body">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item">
                <h4>AKINTAYO AYINDE</h4>
                <p>
                  <em>
                    Innovative and deadline-driven web developer with over 1+ of
                    experience developing and imporving on web applications and
                    websites designing from initial concept to final, polished
                    deliverable.
                  </em>
                </p>
                <p>
                  <ul>
                    <li>Nigeria, Oyo-State, Ibadan.</li>
                    <li>+234 706 9053 540</li>
                    <li>akintayo.ayinde @ gmail.com</li>
                  </ul>
                </p>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>MASTER OF SCIENCE ECONOMICS</h4>
                <h5>2014-2016</h5>
                <p className="p-bs">
                  <em>University of Ibadan, Ibadan, Oyo-State</em>
                </p>
                <p>
                  <ul>
                    <li>
                      Capable of using economic principles and models to
                      predicting market and consumer behaviour on both a long
                      and short-term basis.
                    </li>
                    <li>
                      Use computer programs and other modeling tools to perform
                      analysis and make data and other resources accessible to
                      non-economists.
                    </li>
                    <li>
                      Ability to use collected data to decide whether an
                      organisation should expand operations or reduce overall
                      spending habits.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="resume-item">
                <h4>BACHELOR OF SCIENCE ECONOMICS</h4>
                <h5>2007-2011</h5>
                <p className="p-bs">
                  <em>Osun State University, Osogbo, Osun-State</em>
                </p>
                <p>
                  <ul>
                    <li>Strong written and verbal communication skills.</li>
                    <li>
                      Ability to perform statistical and mathematical
                      operations.
                    </li>
                    <li>
                      Capable of simplifying economic and mathematical data
                      using modelling tools.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="summary-container2">
            <div className="summary-body2">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>FRONTEND DEVELOPER</h4>
                <h5>2O22-Present</h5>
                <p>
                  <ul>
                    <li>
                      Worked with cross-functional teams to develop and execute
                      on-time initiatives by effectively communicating project
                      timelines, progress and objectives using tools such as
                      Slack and Zoom.
                    </li>
                    {/* <li>Created a database backed web application todolist using flask and postgresql providing an amazing web experience for user.</li> */}
                    <li>
                      Fixed bugs from existing websites and implemented
                      enhancements that significantly improved web functionality
                      and speed.
                    </li>
                    <li>
                      Developed a user friendly and interactive portfolio, a
                      restaurant website, 3gpt landing page and a model banking
                      website among others capable of providing a fasinating
                      user experience using reactjs.
                    </li>
                    <li>
                      Skilled with javascript library like Reactjs, Nextjs, and
                      Vitejs for building dynamic and impressive websites and
                      applications.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="resume-item">
                <h4>ENTREPRENEUR & INSTRUCTOR</h4>
                <h5>2017-2021</h5>
                <p>
                  <ul>
                    <li>
                      Managed and supervised a fully dedicated internet access
                      services as digital associate where I was able to build
                      relationships with clients, managed finance and utilities,
                      and also ensured smooth functionalities and operations.
                    </li>
                    <li>
                      Volunteered in providing service as an instructor and
                      employing <br /> my leadership and problem solving skills
                      to counsel pupils in their academic line under a federal
                      social investment program and was evaluated with an
                      outstanding performance and satisfaction during my
                      service.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeComp;
