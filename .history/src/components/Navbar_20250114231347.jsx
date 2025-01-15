import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../firebase/init';
import { Avatar } from "./ui/avatar";
import { Box, Button } from '@chakra-ui/react';
import logo from '../assets/logo.svg';

const Nav = ({ quantity, user }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  const logout = () => {
    signOut(auth);
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="row">
        <div className="nav_wrapper">
          <div className="nav__logo--wrapper">
            <Link className="logo__link" to="/">
              <img src={logo} className="logo_svg" alt="Logo" />
            </Link>

            <Link to="/">
              <Button
                color="white"
                variant="plain"
                fontWeight="300"
                fontSize="16px"
                marginLeft="12px"
              >
                Home
              </Button>
            </Link>

            <Link to="/search">
              <Button
                color="white"
                variant="plain"
                fontWeight="300"
                fontSize="16px"
                marginLeft="12px"
              >
                Directory
              </Button>
            </Link>
          </div>

          {user ? (
            <>
              <div className="profile">
                <div className="shopping__cart--wrapper">
                  <Link to="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Link>
                  <div className="cart__value--popup">{quantity || 0}</div>
                </div>

                <Avatar
                  className="avatar"
                  colorPalette="red"
                  border="2px solid white"
                  variant="solid"
                  onClick={toggleMenu}
                  size="sm"
                  name={user.email}
                />

                {showMenu && (
                  <Box
                    ref={menuRef}
                    bg="white"
                    boxShadow="md"
                    p="2"
                    borderRadius="md"
                  >
                    <Button onClick={logout} colorScheme="red" variant="solid">
                      Logout
                    </Button>
                  </Box>
                )}
              </div>
            </>
          ) : (
            <div className="sign__buttons--wrapper">
              <Link to="/signin">
                <div className="signin__button">Sign in</div>
              </Link>
              <Link to="/signup">
                <div className="signup__button">Join CL</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
