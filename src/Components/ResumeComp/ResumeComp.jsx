import React from 'react';
import './ResumeComp.css';

function ResumeComp() {
  return (
        <div className='resume-container'>
            <div className='resume-body'>
                <div className='section-title'>
                    <h4>Resume</h4>
                    <p>CHECK MY RESUME</p>
                </div>
                <div className='summary-flex'>
                    <div className='summary-container'>
                        <div className='summary-body'>
                            <h3 className='resume-title'>Summary</h3>
                            <div className='resume-item'>
                                <h4>AKINTAYO AYINDE</h4>
                                <p><em>Innovative and deadline-driven web developer with 1+ year <br/> of experience developing and imporving on web applications <br/> and website designing from initial concept to final, polished deliverable.</em> </p>
                                <p>
                                    <ul>
                                        <li>Nigeria, Oyo-State, Ibadan.</li>
                                        <li>+234 706 9053 540</li>
                                        <li>lambofil@gmail.com</li>
                                    </ul>
                                </p>    
                            </div>

                            <h3 className='resume-title'>Education</h3>
                            <div className='resume-item'>
                                <h4>MASTER OF SCIENCE ECONOMICS</h4>
                                <h5>2014-2016</h5>
                                <p className='p-bs'><em>University of Ibadan, Ibadan, Oyo-State</em></p>
                                <p>
                                    <ul>
                                        <li>Capable of using economic principles to predicting market and consumer behaviour on both a long and short-term basis.</li>
                                        <li>Use computer programs and other modeling tools to perform calculations and make data accessible to non-economists.</li>
                                        <li>Ability to use collected data to decide whether an organisation should expand operations or reduce overall spending habits.</li>
                                    </ul>
                                </p>
                            </div>
                            <div className='resume-item'>
                                <h4>BACHELOR OF SCIENCE ECONOMICS</h4>
                                <h5>2007-2011</h5>
                                <p className='p-bs'><em>Osun State University, Osogbo, Osun-State</em></p>
                                <p>
                                    <ul>
                                        <li>Ability to perform complex mathematical operations and model   data.</li>
                                        <li>Strong written and verbal communication skills.</li>
                                        <li>Capable of simplifying economic and mathematical data using modelling tools.</li>
                                    </ul>
                                </p>
                               
                            </div>
                        </div>
                    </div>
                    <div className='summary-container2'>
                        <div className='summary-body2'>
                            <h3 className='resume-title'>Professional Experience</h3>
                            <div className='resume-item'>
                                <h4>JUNIOR WEB DEVELOPER</h4>
                                <h5>2O22-Present</h5>
                                <p>
                                    <ul>
                                        <li>Participated in the design, development and implementation of the websites landing page that's responsive and interactive.</li>
                                        <li>Created a database backed web application todolist using flask and postgresql providing an amazing web experience for user.</li>
                                        <li>Developed a user friendly and interactive portfolio website capable of providing a fasinating user experience.</li>
                                        <li>Skilled with various frontend frameworks like Reactjs, Angular and Vue for building a dynamic and impressive websites and applications.</li>
                                    </ul>
                                </p>
                            </div>
                            <div className='resume-item'>
                                <h4>ENTREPRENEUR & INSTRUCTOR</h4>
                                <h5>2017-2021</h5>
                                <p>
                                    <ul>
                                        <li>Managed and supervised a fully dedicated internet access <br/> business as digital associate where I was able to build       relationships with clients, manage finances, and make sure that everything runs smoothly.</li>
                                        <li>Volunteered in providing service as an instructor and employing <br/> my leadership and problem solving skills to counsel pupils in   <br/>their academic line of study under a federal social investment <br/> program and evaluated with outstanding performance and satisfaction.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ResumeComp