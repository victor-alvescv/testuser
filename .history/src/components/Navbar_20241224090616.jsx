import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/init';
import { Avatar } from "./ui/avatar"
import { RiArrowRightLine } from 'react-icons/ri';
import { Button } from '@chakra-ui/react';

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
                  <Avatar
                   colorPalette='red' 
                   onClick={logout}
                  size="sm"
                  name={user.email}/>
              ) :
               <Link to='/signin'>
               <Button colorPalette="red" variant="solid">
                    Sign in <RiArrowRightLine />
                </Button>
              </Link>
              }
            </div>
          </div>
        </nav>
    );
}

export default Nav;
