import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/init'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Button, Fieldset, Input,  } from "@chakra-ui/react"
import { Field } from "../components/ui/field"
import { RiArrowRightLine } from "react-icons/ri"
import { PasswordInput } from "../components/ui/password-input"

const SignupForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [form, setForm] = useState(false);
const [user, setUser] = useState(null)

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
createUserWithEmailAndPassword(auth, email, password).then(() => {
    setForm(true)
    console.log(form)
})
.catch(() => {
console.error();
})
}

    return (
    <div className='signup_form'>
        { form ? ( <Link to='/search'>
          <Button colorPalette="teal" variant="outline">
        Explore Movies <RiArrowRightLine />
      </Button>
        </Link>) 
            : 
        (
        <Fieldset.Root size="lg" maxW="md">
          <h1>Create your account</h1>
                <Fieldset.Content>
                   <Field color='white' label="Email address">
                      <Input
                      color="white"
                      background='gray.focusRing' 
                      onChange={(event) => setEmail(event.target.value)} name="email" 
                      placeholder='me@example.com'
                      type="email" />
                    </Field>
            
                    <PasswordInput
                    onChange={(event) => setPassword(event.target.value)}
                    color="white"
                    background='gray.focusRing'  />
                </Fieldset.Content>
            
                  <Button 
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
