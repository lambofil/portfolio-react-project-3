import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="hero-container">
        <div className="home__content">
            <div className="home__meta">
                <h1 className="home__text pz__10">Welcome! I'm Akintayo Ayinde.</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Frontend</div>
                        <div className="i-title-item">Instructor</div>
                        <div className="i-title-item">Freelancer</div>
                        <div className="i-title-item">Entrepreneur</div>
                    </div>  
                </div>
                <h4 className='home__text pz__10'>Based in Nigeria.</h4>
            </div>
        </div>

    </div>
  );
}

export default Header;