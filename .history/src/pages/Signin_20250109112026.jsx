import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Button, Fieldset, Input } from "@chakra-ui/react"
import { Field } from "../components/ui/field"
import { RiArrowRightLine } from "react-icons/ri"
import { PasswordInput } from '../components/ui/password-input';
import SignForm from '@/components/signForm';


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedIn, setSignedIn] = useState(false);
    const [user, setUser] = useState(null)
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passErrorMessage, setPassErrorMessage] = useState('');

     useEffect(() => {
        const auth = getAuth();
        const checkLogin = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            setSignedIn(true);
          } else {
            setUser(null);
            setSignedIn(false);
          }
        });
    
          return () => checkLogin();
        }, [])


    function signin() {
    setPassErrorMessage('')
    setEmailErrorMessage('')
    console.log('signing in')
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user.email + ' has been signed in')
    setSignedIn(true)
  })
  .catch((error) => {
    console.error(error.message)
    if (error.code === 'auth/invalid-email') {
      setEmailErrorMessage('Enter a valid email')
    }else if (error.code === 'auth/user-not-found') {
      setEmailErrorMessage('Email not found')
    } 
    else if (error.code === 'auth/wrong-password') {
      setPassErrorMessage('Incorrect password')
    } else if ( error.code === 'auth/missing-password') {
      setPassErrorMessage('Missing Password')
    }
  });

    }

    return (
      <div className="container">
        <SignForm signedIn={signedIn} passErrorMessage={passErrorMessage} emailErrorMessage={emailErrorMessage} setEmail={setEmail} signin={signin} setPassword={setPassword}/>
  </div>
    );
}

export default Signin;
