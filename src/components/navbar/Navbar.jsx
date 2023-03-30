import React from 'react';
import './navbar.css';
import Logo from '../../images/logo.png';
import {NavLink} from 'react-router-dom'



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <NavLink to="/"><a className="navbar-brand" href="home"><img src={Logo} alt="" /></a></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav_link" activeClassName="active" to="/"><a className="nav-link" aria-current="page" href="home">Home</a></NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav_link" activeClassName="active" to='/characters'><a className="nav-link" aria-current="page" href="home">Characters</a></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav_link" activeClassName="active" to='/episodes'><a className="nav-link" aria-current="page" href="home">Episodes</a></NavLink>
            </li>
          </ul>    
        </div>
      </div>
    </nav>
  )
}

export default Navbar
