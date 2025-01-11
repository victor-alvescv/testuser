import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Button, Fieldset, Input } from "@chakra-ui/react"
import { Field } from "../components/ui/field"
import { RiArrowRightLine } from "react-icons/ri"


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedIn, setSignedIn] = useState(false);
    const [user, setUser] = useState(null)

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
        { signedIn ? ( 
          <Link to='/search'>
              <Button colorPalette="teal" variant="outline">
                Explore Movies <RiArrowRightLine />
              </Button>
          </Link>) :
            // <h2>Sign In!</h2>
          <div className=''>
            <div className="signup_inputs">


    <Fieldset.Root size="lg" maxW="md">
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
