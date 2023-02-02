import React from 'react'
import { Link} from 'react-router-dom';
import'./Navbar.css'

function Navbar() {
  return (
    <nav>
    <ul>
        <li id='title'>Saquib's Portfolio</li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
    
  </nav>
  
  )
}

export default Navbar
