import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/init'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Button, Fieldset, Input, Stack,  } from "@chakra-ui/react"
import { Field } from "../components/ui/field"
import { RiArrowRightLine } from "react-icons/ri"
import { PasswordInput, PasswordStrengthMeter } from "../components/ui/password-input"

const SignupForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [form, setForm] = useState(false);
const [user, setUser] = useState(null)
const [signupError, setSignupError] = useState();
const [emailErrorMessage, setEmailErrorMessage] = useState('');
const [passErrorMessage, setPassErrorMessage] = useState('');

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
    }, [])



function register() {
setPassErrorMessage('')
setEmailErrorMessage('')
console.log('registered')
createUserWithEmailAndPassword(auth, email, password).then(({user}) => {
  alert(`${user.email} has been successfully registered and logged in!`)
    setForm(true)
    setSignupError(null)
})
.catch((error) => {

  if (error.code === 'auth/invalid-email') {
    setEmailErrorMessage('Enter a valid email')
  }else if (error.code === 'auth/email-already-in-use') {
    setEmailErrorMessage('Email already in use')
  } 
  else if (error.code === 'auth/password-does-not-meet-requirements') {
    
    setPassErrorMessage('Password needs to be above 6 characters')
  } else if ( error.code === 'auth/missing-password') {
    setPassErrorMessage('Missing Password')
  }
  
  setSignupError(true)
console.error(error.message);
})
}

    return (
    <div className='signup_form'>
        { form ? ( <Link to='/search'>
          <Button 
          colorPalette="red" 
          variant="solid"
          >
        Explore Movies <RiArrowRightLine />
      </Button>
        </Link>) 
            : 
            (
            
        <Fieldset.Root size="lg" maxW="md" invalid={passErrorMessage || emailErrorMessage} >
                <Fieldset.Content className='form'>

                   <Field color='white' label="Email address" invalid={emailErrorMessage}>
                      <Input
                      width='50%'
                      height='45px'
                      padding="4px"
                      color="white"
                      background='gray.focusRing'
                      onChange={(event) => setEmail(event.target.value)} name="email" 
                      placeholder='me@example.com'
                      type="email"
                      id="email"
                      onKeyDown={(e) => {
                        if(e.key === "Enter") {
                          register();
                        }
                      }}
                      required
                      />
                    </Field>
                    <Fieldset.ErrorText style={{ fontWeight: 'bolder', fontSize: '16px',}}>
                    {emailErrorMessage}
                     </Fieldset.ErrorText>
                  
                  <Stack>
                    <PasswordInput
                    height='45px'
                    padding="4px"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    borderColor={!passErrorMessage || 'red'} 
                    color="white"
                    background='gray.focusRing'
                    onKeyDown={(e) => {
                      if(e.key === "Enter") {
                        register();
                      }
                    }}
                    />
                    <PasswordStrengthMeter value={password.length * .5}/>
                    <Fieldset.ErrorText style={{ fontWeight: 'bolder', fontSize: '18px'}}>
                    {passErrorMessage}
                     </Fieldset.ErrorText>
                    </Stack>
                </Fieldset.Content>
                  <Button 
                  className='form_button'
                  onClick={register} 
                  type="submit" 
                  alignSelf="flex-start"
                  width="120px"
                  fontWeight="600"
                  fontSize='18px'>
                    Sign Up!
                  </Button>

        </Fieldset.Root>
                   

            )
          }
    </div>
    );
  }
  
export default SignupForm;
