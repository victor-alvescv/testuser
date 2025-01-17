import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { RiArrowRightLine } from "react-icons/ri";
import { PasswordInput, PasswordStrengthMeter } from "../components/ui/password-input";
import movieCollage from '../assets/movie_collage.png';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [form, setForm] = useState(false);
  const [user, setUser] = useState(null);
  const [signupError, setSignupError] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passErrorMessage, setPassErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const checkLogin = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setForm(true);
      } else {
        setUser(null);
        setForm(false);
      }
    });

    return () => checkLogin();
  }, []);

  useEffect(() => {
    document.body.style.background = `url(${movieCollage}) no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  const register = () => {
    setEmailErrorMessage('');
    setPassErrorMessage('');
    console.log('Registering...');

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        alert(`${user.email} has been successfully registered and logged in!`);
        setForm(true);
        setSignupError(null);
        navigate('/search');
      })
      .catch((error) => {
        handleSignupError(error);
      });
  };

  const handleSignupError = (error) => {
    if (error.code === 'auth/invalid-email') {
      setEmailErrorMessage('Enter a valid email');
    } else if (error.code === 'auth/email-already-in-use') {
      setEmailErrorMessage('Email already in use');
    } else if (error.code === 'auth/password-does-not-meet-requirements') {
      setPassErrorMessage('Password needs to be at least 6 characters');
    } else if (error.code === 'auth/missing-password') {
      setPassErrorMessage('Missing password');
    } else if (error.code === 'auth/missing-email') {
      setEmailErrorMessage('Missing email');
    }
    setSignupError(true);
    console.error(error.message);
  };

  return (
    <div className="signup_form">
      <div className="signup__wrapper">
        <h1 className="signup__title">Signup</h1>
        {form ? (
          <Link to="/search">
            <Button colorScheme="red" variant="solid">
              Explore Movies <RiArrowRightLine />
            </Button>
          </Link>
        ) : (
          <Fieldset.Root size="lg" maxW="md" invalid={emailErrorMessage || passErrorMessage}>
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
                  onKeyDown={(e) => e.key === "Enter" && register()}
                  required
                />
              </Field>
              {emailErrorMessage && (
                <Fieldset.ErrorText style={{ fontWeight: 'bolder', fontSize: '16px' }}>
                  {emailErrorMessage}
                </Fieldset.ErrorText>
              )}

              <Stack>
                <Field color="white" label="Password">
                  <PasswordInput
                    width="100%"
                    height="45px"
                    padding="4px"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    borderColor={passErrorMessage ? 'red' : undefined}
                    color="black"
                    background="white"
                    onKeyDown={(e) => e.key === "Enter" && register()}
                  />
                </Field>

                <PasswordStrengthMeter height="10px" value={password.length * 0.5} />

                {passErrorMessage && (
                  <Fieldset.ErrorText style={{ fontWeight: 'bolder', fontSize: '18px', color: 'red' }}>
                    {passErrorMessage}
                  </Fieldset.ErrorText>
                )}
              </Stack>
            </Fieldset.Content>

            <Button
              className="form_button"
              onClick={register}
              type="submit"
              alignSelf="flex-start"
              width="120px"
              fontWeight="600"
              fontSize="18px"
            >
              Sign Up!
            </Button>

            <div className="signin__signup--wrapper">
              <h1>Already have an account?</h1>
              <Link to="/signin">
                <u className="signupnow__link">Sign in now</u>
              </Link>
            </div>
          </Fieldset.Root>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
