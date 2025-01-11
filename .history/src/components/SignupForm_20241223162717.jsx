import React from 'react';
import { auth } from '../firebase/init'
import { createUserWithEmailAndPassword } from '../firebase/init'

const SignupForm = () => {

function register() {
console.log('registered')
createUserWithEmailAndPassword(auth, '')
}

    return (
        <div className='signup_form'>
            <h2>Sign Up!</h2>
        <div className="signup_inputs">
            <input type="text" placeholder='Username' />
            <input type="text"
            placeholder='Email' />
            <input placeholder='Password' type="text" />
           <button onClick={register}>Sign Up</button> 
        </div>
        </div>
    );
}

export default SignupForm;
