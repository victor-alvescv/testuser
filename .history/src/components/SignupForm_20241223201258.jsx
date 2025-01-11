import React, { useState } from 'react';
import { auth } from '../firebase/init'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Button, Fieldset, Input,  } from "@chakra-ui/react"
import { Field } from "../components/ui/field"
import { RiArrowRightLine } from "react-icons/ri"

const SignupForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [form, setForm] = useState(false);

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
        (<Fieldset.Root size="lg" maxW="md">
                <Fieldset.Content>
                   <Field label="Email address">
                      <Input 
                      onChange={(event) => setEmail(event.target.value)} name="email" 
                      placeholder='me@example.com'
                      type="email" />
                    </Field>
            
                    <Field label="Password">
                      <Input 
                      name="name" 
                      type='password'
                      onChange={(event) => setPassword(event.target.value)} />
                    </Field>
                </Fieldset.Content>
            
                  <Button onClick={register} type="submit" alignSelf="flex-start">
                    Sign Up!
                  </Button>

        </Fieldset.Root>
            )
        }
    </div>
    );
}

export default SignupForm;
