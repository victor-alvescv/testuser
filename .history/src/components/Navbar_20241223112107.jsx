import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
          <img src={logo} className='logo' alt="" />
        </nav>
    );
}

export default Nav;
