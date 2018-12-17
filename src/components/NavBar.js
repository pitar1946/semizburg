import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="mainNav">
        <div className="container">
         <Link className="navbar-brand" to='/'>Semizburg</Link>
         <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/story'>Story</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/ourbeers'>Our Beers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/howitsmade'>How it's made</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/shop'>Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/blog'>Blog</Link>
            </li>
          </ul>
        </div> 
       </div>
      </nav>
    </div>
    );
  }
}

export default NavBar;