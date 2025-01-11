import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Button, Fieldset, Input } from "@chakra-ui/react"
import { Field } from "../components/ui/field"
import { RiArrowRightLine } from "react-icons/ri"
import { PasswordInput, PasswordStrengthMeter } from '../components/ui/password-input';


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedIn, setSignedIn] = useState(false);
    const [user, setUser] = useState(null)
    const [signupError, setSignupError] = useState();
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
    setSignupError(false)
    setSignedIn(true)
  })
  .catch((error) => {
    if (error.code === 'auth/invalid-email') {
      setEmailErrorMessage('User email is invalid')
    }else if (error.code === 'auth/email-already-in-use') {
      setEmailErrorMessage('Email already in use')
    } 
    else if (error.code === 'auth/weak-password') {
      
      setPassErrorMessage('Password needs to be above 6 characters')
    } else if ( error.code === 'auth/missing-password') {
      setPassErrorMessage('Missing Password')
    }

    setSignupError(true)
  });

    }

    return (
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
    <Fieldset.Root size="lg" maxW="md" invalid={signupError}>
    <div className="signin_wrapper">
      <h1 className='signin_title'>Sign in to enjoy!</h1>
      <h1>Sign in to your account</h1>
      <Fieldset.Content className='form'>
       <Field color="white" label="Email address" invalid={signupError}>
          <Input 
            color="white"
            background='gray.focusRing' 
          onChange={(event) => setEmail(event.target.value)} name="email" 
          placeholder='me@example.com'
          type="email" />
        </Field>
             <Fieldset.ErrorText style={{ fontWeight: 'bolder', fontSize: '16px'}}>
                            {emailErrorMessage}
              </Fieldset.ErrorText>

        <Field color="white" label="Password">
          <PasswordInput 
            color="white"
          background='gray.focusRing' 
          name="name" 
          type='password'
          onChange={(event) => setPassword(event.target.value)} />
        </Field>
         <PasswordStrengthMeter value={password.length * .5}/>
            <Fieldset.ErrorText style={{ fontWeight: 'bolder', fontSize: '18px'}}>
                             {passErrorMessage}
            </Fieldset.ErrorText>
      </Fieldset.Content>

      <Button 
      className='form_button'
      onClick={signin} 
      type="submit" 
      alignSelf="flex-start">
        Sign In!
      </Button>
    </div>
    </Fieldset.Root>
             }
        </div>
    );
}

export default Signin;
