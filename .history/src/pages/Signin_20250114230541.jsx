import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Fieldset, Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { RiArrowRightLine } from "react-icons/ri";
import { PasswordInput } from '../components/ui/password-input';
import movieCollage from '../assets/movie_collage.png';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passErrorMessage, setPassErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const checkLogin = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setSignedIn(true);
        navigate('/search');
      } else {
        setUser(null);
        setSignedIn(false);
      }
    });

    return () => checkLogin();
  }, [navigate]);

  const signin = () => {
    setEmailErrorMessage('');
    setPassErrorMessage('');

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(`${userCredential.user.email} has been signed in`);
        setSignedIn(true);
      })
      .catch((error) => {
        console.error(error.message);
        handleError(error);
      });
  };

  const handleError = (error) => {
    switch (error.code) {
      case 'auth/invalid-email':
        setEmailErrorMessage('Enter a valid email');
        break;
      case 'auth/user-not-found':
        setEmailErrorMessage('Email not found');
        break;
      case 'auth/wrong-password':
        setPassErrorMessage('Incorrect password');
        break;
      case 'auth/missing-password':
        setPassErrorMessage('Missing Password');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.body.style.background = `url(${movieCollage}) no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <div className="container">
      <div className="signin_form">
        {signedIn ? (
          <Link to="/search">
            <Button className="explore_button" colorScheme="red" variant="solid">
              Explore Movies <RiArrowRightLine />
            </Button>
          </Link>
        ) : (
          <Fieldset.Root size="lg" maxW="md" invalid={emailErrorMessage || passErrorMessage}>
            <div className="signin_wrapper">
              <h1 className="signin_title">Sign in</h1>
              <Fieldset.Content className="form">
                <Field color="white" label="Email address" invalid={emailErrorMessage}>
                  <Input
                    height="45px"
                    padding="4px"
                    color="black"
                    background="white"
                    onChange={(event) => setEmail(event.target.value)}
                    name="email"
                    placeholder="me@example.com"
                    type="email"
                    onKeyDown={(e) => e.key === "Enter" && signin()}
                  />
                </Field>
                {emailErrorMessage && (
                  <Fieldset.ErrorText style={{ fontWeight: 'bolder', fontSize: '16px' }}>
                    {emailErrorMessage}
                  </Fieldset.ErrorText>
                )}

                <Field color="white" label="Password">
                  <PasswordInput
                    height="45px"
                    padding="4px"
                    color="black"
                    background="white"
                    borderColor={passErrorMessage ? 'red' : undefined}
                    name="password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && signin()}
                  />
                </Field>
                {passErrorMessage && (
                  <Fieldset.ErrorText style={{ fontWeight: 'bolder', fontSize: '18px', color: 'red' }}>
                    {passErrorMessage}
                  </Fieldset.ErrorText>
                )}
              </Fieldset.Content>

              <Button
                className="form_button"
                onClick={signin}
                type="submit"
                alignSelf="flex-start"
                width="120px"
                fontWeight="600"
                fontSize="18px"
              >
                Sign In!
              </Button>

              <div className="signin__signup--wrapper">
                <h1>New to Cinema Library?</h1>
                <Link to="/signup">
                  <u className="signupnow__link">Signup now</u>
                </Link>
              </div>
            </div>
          </Fieldset.Root>
        )}
      </div>
    </div>
  );
};

export default Signin;
