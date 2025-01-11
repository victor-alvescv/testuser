import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/init';
import { Avatar } from "./ui/avatar"

const Nav = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const auth = getAuth();
    const checkLogin = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }

      return () => checkLogin();
    }, [])


  }, []);

  function logout() {
    signOut(auth);
  }

    return (
        <nav>
          <div className="row">
            <div className="nav_wrapper">
              <Link to='/'>
              <img src={logo} className='logo_svg' alt="" />
              </Link>

              {user ? (
                <div className="profile">
                  <div onClick={logout} className="profile_circle">
                  <Avatar size="xs" name={user.email/>
                    {user.email[0].toUpperCase()}
                  </div>
                </div>
              ) : <Link to='/signin'> Sign In
              
              </Link>
              }
            </div>
          </div>
        </nav>
    );
}

export default Nav;
