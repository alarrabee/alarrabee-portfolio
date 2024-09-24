import React from 'react';
import { Link } from 'react-router-dom'

import './header.css'

function Header () {
  return (
    <header>
      <div className='header-container'>
        <Link to="/"><h1 className='title'>Alexandra Larrabee</h1></Link>
        <nav>
          <ul className='nav-links'>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
  
  
  