import React from 'react';
import './AboutComp.css';
import img1 from '../../img/Akin.png';
import mydoc from '../../img/Akintayo-CV.docx';
import {Link} from 'react-router-dom';

function AboutComp() {
  return (
    <div className="about component__space" id="About">
      <div className="container">

        <div className="roww">

          <div className="col__2">
            <img src={img1} alt="" />

            <div className='personal-info'>
              <h1><a href="/about" className='animate__animated animate__bounceInLeft'>Akintayo O Ayinde</a></h1>
              <h2>I'm a passionate <font>web developer</font> <span>from Nigeria</span></h2>

              <div class="social-links">
                <a href="https://twitter.com/lambofil" class="twitter" target={'_blank'} rel={'noreferrer'} ><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://facebook.com/lambofill" class="facebook" target={'_blank'} rel={'noreferrer'}><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/lambofill_ty/" class="instagram" target={'_blank'} rel={'noreferrer'}><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/akintayo-ayinde-a91b9a111" class="linkedin" target={'_blank'} rel={'noreferrer'}><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="https://join.skype.com/invite/gtdGfd4lqF9p" class="skype" target={'_blank'}><i class="fa fa-skype" aria-hidden="true"></i></a>
                <a href="https://github.com/lambofil" class="git-hub" target={'_blank'} rel={'noreferrer'}><i class="fa fa-github-square" aria-hidden="true"></i></a>
              </div>

            </div>
          </div>

          <div className="col__2">
            <h1 className="about__heading animate__animated animate__bounceInDown">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">My name is Akintayo Olaleye Ayinde. A passionate entry-level fullstack (frontend) web-development professional with 1<sup>+</sup> years of experience creating and debugging a robust, performant and interactive website landing page and applications that can support millions of daily users. Currently a freelancer and open to new opportunities and services.</p>
              <p className="about__text p__color">I possess relevant skill stack in HTML, CSS, JAVASCRIPT, REACTJS, ANGULAR, VUE AND WORDPRESS. In addition, I possess leadership skill, excellent team player, good interpersonal skill as well as a problem-solving skill. I've spearheaded the completion of a sample website landing page as well as various other web applications that is highly performant and capable of providing an impressive user experience (UX).</p>  <p className="about__text p__color">I look forward to seeking a frontend developer role to build on my passion and to be part of a team developing an effective and responsive websites as well as managing them in other to ensure efficiency and growth.</p> 
              {/* <p className="about__text p__color">I am passionate about software computers and technology because it has facinated me from a young age and that's one of the reasons I pursued a career in software engineering, web development. Further, I want to use my skill and knowledge to make other people's job easier and productive.</p> <p className="about__text p__color">I hold a honors degree in Economics from Osun State University (Second Class Upper) with a Masters degree in Economics from the University of Ibadan, Ibadan Nigeria. Worked as an administrative officer with one year experience at the apex bank of Nigeria where I was responsible for doing paper works, representing the bank in the wider community, perform administrative duties like payment disbursements, file collation and sorting, inventory inspections, managed staff's records and datas, co-ordinated audit preparations and also participated in protocol duties. Received the highest appraisal of 98% rating during the period. Also volunteered with four years <sup>+</sup> experience as an instructor and counsellor in a social investment program organised by the government where i was able to tutor and counsel pupils in their line of studies and learning. Also received 95% <sup>+</sup> satisfaction rating from guardians and stakeholders.</p> */}
              <div className="about__button d__flex align__items__center">
                <Link to={mydoc} target={'_blank'} download={mydoc}>
                  <button className="about btn pointer">Download CV</button>
                </Link>
                <Link to='/contact'><button className="about btn pointer">Hire Me</button></Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComp;