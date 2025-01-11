import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Button, Fieldset, Input } from "@chakra-ui/react"
import { Field } from "../components/ui/field"
import { RiArrowRightLine } from "react-icons/ri"
import { PasswordInput } from '../components/ui/password-input';
import movieCollage from '../assets/movie_collage.png'


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

    useEffect(() => {
      // Change the root element's background
      document.body.style.background = `url(${movieCollage}) no-repeat center center fixed`;
      document.body.style.backgroundSize = "cover";
  
      // Cleanup on component unmount
      return () => {
        document.body.style.background = "";
      };
    }, []);

    return (
      <div className="container">
        
        <div className='signin_form'>
        { signedIn ? ( 
          <Link to='/search'>
              <Button 
              className='explore_button'
              colorPalette="red" 
              variant="solid">
                Explore Movies <RiArrowRightLine />
              </Button>
          </Link>) :
    <Fieldset.Root size="lg" maxW="md" invalid={passErrorMessage || emailErrorMessage}>
    <div className="signin_wrapper">
      <h1 className='signin_title'>Sign in</h1>
      <Fieldset.Content className='form'>
       <Field color="white" label="Email address" invalid={emailErrorMessage}>
          <Input
          height='45px' 
          padding="4px"
          color="black"
          background='white' 
          onChange={(event) => setEmail(event.target.value)} name="email" 
          placeholder='me@example.com'
          type="email" 
          onKeyDown={(e) => {
            if(e.key === "Enter") {
              signin();
            }
          }}
          />
        </Field>
             <Fieldset.ErrorText style={{ fontWeight: 'bolder', fontSize: '16px'}}>
          {emailErrorMessage}
              </Fieldset.ErrorText>

        <Field color="white" label="Password">
          <PasswordInput
          height='45px' 
          padding="4px"
          color="black"
          background='white'
          borderColor={!passErrorMessage || 'red'} 
          name="name" 
          type='password'
          onChange={(event) => setPassword(event.target.value)} 
          onKeyDown={(e) => {
            if(e.key === "Enter") {
              signin();
            }
          }}
          />
        </Field>
            <Fieldset.ErrorText style={{ fontWeight: 'bolder', fontSize: '18px', color: 'red'}}>
            {passErrorMessage}
            </Fieldset.ErrorText>
      </Fieldset.Content>

      <Button 
      className='form_button'
      onClick={signin} 
      type="submit" 
      alignSelf="flex-start"
      width="120px"
      fontWeight="600"
      fontSize='18px'>
        Sign In!
      </Button>
<div className="signin__signup--wrapper">
        <h1>
          New to Cinema Library?   
        </h1>
        <Link to='/signup'>
          <u className='signupnow__link'>  Signup now</u>
        </Link>
</div>
    </div>
    </Fieldset.Root>
             }
        </div>
  </div>
    );
}

export default Signin;
