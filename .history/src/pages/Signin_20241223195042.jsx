import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "../components/ui/field"


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedIn, setSignedIn] = useState(false);


    function signin() {
        console.log('signing in')
        const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.email + ' has been signed in')
    setSignedIn(true)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    }

    return (
        <>
        { signedIn ? ( <Link to="/search"> Go to movies!</Link>) :
          <div className='signup_form'>
            <h2>Sign In!</h2>
            <div className="signup_inputs">

              {/* <Field label="Email">
                <Input
                placeholder='me@example.com' 
                onChange={(event) => setEmail(event.target.value)}
                />
              </Field>
              <Field label="Password">
                <Input
                placeholder='password' 
                onChange={(event) => setPassword(event.target.value)}
                />
              </Field> */}


              <Fieldset.Root size="lg" maxW="md">

      <Fieldset.Content>
       <Field label="Email address">
          <Input 
          onChange={(event) => setEmail(event.target.value)} name="email" placeholder='me@example.com' type="email" />
        </Field>

        <Field label="Password">
          <Input name="name" type='password' />
        </Field>
      </Fieldset.Content>

      <Button onClick={signin} type="submit" alignSelf="flex-start">
        Sign In!
      </Button>
    </Fieldset.Root>
            
            </div>
          </div>
        }
        </>
    );
}

export default Signin;
