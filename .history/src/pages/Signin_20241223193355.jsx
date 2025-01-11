import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Input } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"


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

              <Field label="Email">
                
              </Field>
              <input type="text"
             placeholder='Email' onChange={(event) => setEmail(event.target.value)} />


              <input placeholder='Password' type="password" onChange={(event) => setPassword(event.target.value)} />
              <button onClick={signin}>Sign in</button> 
            </div>
          </div>
        }
        </>
    );
}

export default Signin;
