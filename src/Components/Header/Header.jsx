import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="hero-container">
        <div className="home__content">
            <div className="home__meta">
                <h1 className="home__text pz__10">Hi, I'm Akintayo Ayinde</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Frontend Developer</div>
                        <div className="i-title-item">Backend Developer</div>
                        <div className="i-title-item">Instructor & Counsellor</div>
                        <div className="i-title-item">Freelancer</div>
                        <div className="i-title-item">Entrepreneur</div>
                    </div>  
                </div>
                <h4 className='home__text pz__10'>based in Nigeria.</h4>
            </div>
            {/* <h4 className='home__text pz__10'>based in Nigeria.</h4> */}
        </div>

    </div>
  );
}

export default Header;