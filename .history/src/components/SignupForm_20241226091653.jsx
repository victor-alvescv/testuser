import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/init'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Box, Button, Fieldset, Input,  } from "@chakra-ui/react"
import { Field } from "../components/ui/field"
import { RiArrowRightLine } from "react-icons/ri"
import { PasswordInput } from "../components/ui/password-input"

const SignupForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [form, setForm] = useState(false);
const [user, setUser] = useState(null)
const [signupError, setSignupError] = useState();
const [errorMessage, setErrorMessage] = useState('');

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

console.log('registered')
createUserWithEmailAndPassword(auth, email, password).then(({user}) => {
  alert(`${user.email} has been successfully registered and logged in!`)
    setForm(true)
    setSignupError(null)
})
.catch((error) => {
  setSignupError(true)
  setErrorMessage(error.message)
console.error(error.message);
})
}

    return (
    <div className='signup_form'>
        { form ? ( <Link to='/search'>
          <Button 
          colorPalette="red" 
          variant="solid">
        Explore Movies <RiArrowRightLine />
      </Button>
        </Link>) 
            : 
            (
            
        <Fieldset.Root size="lg" maxW="md" invalid={signupError} >
          <h1>Create your account</h1>
                <Fieldset.Content className='form'>

                   <Field color='white' label="Email address" invalid={signupError}>
                      <Input
                      color="white"
                      background='gray.focusRing' 
                      onChange={(event) => setEmail(event.target.value)} name="email" 
                      placeholder='me@example.com'
                      type="email"
                      id="email"
                      required
                      />
                    </Field>
                  
            
                    <PasswordInput
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    color="white"
                    background='gray.focusRing'  />
                </Fieldset.Content>
                <Fieldset.ErrorText>
                {(errorMessage === 'Firebase: Error (auth/invalid-email)') ? (< Invalid Email) : ('')}
                 </Fieldset.ErrorText>
                  <Button 
                  className='form_button'
                  onClick={register} 
                  type="submit" 
                  alignSelf="flex-start">
                    Sign Up!
                  </Button>

        </Fieldset.Root>
                   

            )
          }
    </div>
    );
  }
  
export default SignupForm;
