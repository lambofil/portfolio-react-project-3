import React from 'react'
import './SkillComp.css'
import { ProgressBar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function SkillComp() {

  return (
   <div className="skills container1">

        <div class="section-title">
            <h2>Skills</h2>
        </div>

        <div className="skillsflex-row">

            <div className="skillflex1">
                <div className="progress">
                    <span className="skill">HTML<i className="val">100%</i></span>
                    <div className="progress-bar-wrap">
                        <ProgressBar now={100} min={0} max={100} />
                        {/* <div className="progressbar" role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></div> */}
                    </div>
                    
                </div>
                <div className="progress">
                    <span className="skill">CSS<i className="val">85%</i></span>
                    <div className="progress-bar-wrap">
                        <ProgressBar now={85} min={0} max={100} />
                        {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'90'} aria-valuemin={'0'} aria-valuemax={'100'}></div>  */}
                    </div>
                </div>
                <div className="progress">
                    <span className="skill">JAVASCRIPT<i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                        <ProgressBar now={75} min={0} max={100} />
                        {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'75'} aria-valuemin={'0'} aria-valuemax={'100'}></div> */}
                    </div>
                </div>
                <div className="progress">
                    <span className="skill">VUE<i className="val">70%</i></span>
                    <div className="progress-bar-wrap">
                        <ProgressBar now={70} min={0} max={100} />
                        {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'75'} aria-valuemin={'0'} aria-valuemax={'100'}></div> */}
                    </div>
                </div>
            </div>

            <div className="skillflex2">
                <div className="progress">
                    <span className="skill">PYTHON<i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                        <ProgressBar now={75} min={0} max={100} />
                        {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'80'} aria-valuemin={'0'} aria-valuemax={'100'}></div> */}
                    </div>
                </div>
                <div className="progress">
                    <span className="skill">ANGULAR<i className="val">78%</i></span>
                    <div className="progress-bar-wrap">
                        <ProgressBar now={78} min={0} max={100} />
                        {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'85'} aria-valuemin={'0'} aria-valuemax={'100'}></div> */}
                    </div>
                </div>
                <div className="progress">
                    <span className="skill">REACTJS<i className="val">77%</i></span>
                    <div className="progress-bar-wrap">
                        <ProgressBar now={77} min={0} max={100} />
                        {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'85'} aria-valuemin={'0'} aria-valuemax={'100'}></div> */}
                    </div>
                </div>
                <div className="progress">
                    <span className="skill">FLASK<i className="val">79%</i></span>
                    <div className="progress-bar-wrap">
                        <ProgressBar now={79} min={0} max={100} />
                        {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'85'} aria-valuemin={'0'} aria-valuemax={'100'}></div> */}
                    </div>
                </div>
            </div>
        </div>

    </div>


  );
}

export default SkillComp