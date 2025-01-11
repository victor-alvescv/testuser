import React from 'react';
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='nav_wrapper'>
         <img src={Logo} alt="" />
          <div className="links">
             <Link to='/' >Home</Link>
             <Link to='/search'>Find your movie</Link>
             <Link to='/cart'>Cart/Checkout</Link>
          </div>
        </div>
    );
}

export default Nav;
