import React from 'react';
import Logo from '../assets/Logo.png'

const Nav = () => {
    return (
        <div>
         <img src={Logo} alt="" />
          <div className="links">
              <a href="">Home</a>
              <a href="">Find your movie</a>
              <a href="">Cart</a>
          </div>
        </div>
    );
}

export default Nav;
