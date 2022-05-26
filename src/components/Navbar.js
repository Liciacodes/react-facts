import React from 'react';
import logo from '../images/logo.png'

const Navbar = () => {
  return (
     <nav>
     <img  
     className='nav-logo'
     src={logo} 
     alt='logo'/>
     <h3 className='nav-logo-text'>ReactFacts</h3>
     <h4 className='nav-text'>React Course- Project 1</h4>
     </nav>
  )
}

export default Navbar
