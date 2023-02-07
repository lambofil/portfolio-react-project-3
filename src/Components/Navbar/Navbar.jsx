import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/facebook.com' className="navbar-logo">Akin<font className="tayo">tayo</font></Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul> 
            </div>
        </nav>

    </>
  )
}

export default Navbar