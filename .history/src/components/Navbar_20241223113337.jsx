import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
          <div className="row">
        <nav>
          <img src={logo} className='logo_svg' alt="" />
          <button> Sign In</button>
        </nav>
      </div>
    );
}

export default Nav;
