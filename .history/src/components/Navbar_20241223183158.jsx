import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Nav = () => {
  const [user, setUser] = useState(null)

    return (
        <nav>
          <div className="row">
            <div className="nav_wrapper">
              <Link to='/'>
              <img src={logo} className='logo_svg' alt="" />
              </Link>

              {

              <Link to='/signin'> Sign In</Link>
              }
            </div>
          </div>
        </nav>
    );
}

export default Nav;
