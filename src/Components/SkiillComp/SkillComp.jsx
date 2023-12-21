import React from "react";
import "./SkillComp.css";
import { ProgressBar } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

function SkillComp() {
  return (
    <div className="skills container1">
      {/* <div class="section-title">
            <h2>Skills</h2>
        </div> */}
      <h2>Skills</h2>
      <div className="skillsflex-row">
        <div className="skillflex1">
          <div className="progress">
            <span className="skill">
              HTML<i className="val">79.9%</i>
            </span>
            <div className="progress-bar-wrap">
              <ProgressBar now={79.9} min={0} max={100} />
              {/* <div className="progressbar" role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></div> */}
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              CSS<i className="val">69.5%</i>
            </span>
            <div className="progress-bar-wrap">
              <ProgressBar now={69.5} min={0} max={100} />
              {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'90'} aria-valuemin={'0'} aria-valuemax={'100'}></div>  */}
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              Javascript<i className="val">69%</i>
            </span>
            <div className="progress-bar-wrap">
              <ProgressBar now={69} min={0} max={100} />
              {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'75'} aria-valuemin={'0'} aria-valuemax={'100'}></div> */}
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              Typescript<i className="val">58%</i>
            </span>
            <div className="progress-bar-wrap">
              <ProgressBar now={58} min={0} max={100} />
              {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'75'} aria-valuemin={'0'} aria-valuemax={'100'}></div> */}
            </div>
          </div>
        </div>

        <div className="skillflex2">
          <div className="progress">
            <span className="skill">
              ViteJs<i className="val">60%</i>
            </span>
            <div className="progress-bar-wrap">
              <ProgressBar now={60} min={0} max={100} />
              {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'80'} aria-valuemin={'0'} aria-valuemax={'100'}></div> */}
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              Tailwindcss<i className="val">55%</i>
            </span>
            <div className="progress-bar-wrap">
              <ProgressBar now={55} min={0} max={100} />
              {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'85'} aria-valuemin={'0'} aria-valuemax={'100'}></div> */}
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              ReactJs<i className="val">77%</i>
            </span>
            <div className="progress-bar-wrap">
              <ProgressBar now={77} min={0} max={100} />
              {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'85'} aria-valuemin={'0'} aria-valuemax={'100'}></div> */}
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              React-redux<i className="val">70%</i>
            </span>
            <div className="progress-bar-wrap">
              <ProgressBar now={70} min={0} max={100} />
              {/* <div className="progress-bar" role={'progressbar'} aria-valuenow={'85'} aria-valuemin={'0'} aria-valuemax={'100'}></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillComp;
