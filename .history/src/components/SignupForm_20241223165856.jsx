import React, { useState } from 'react';
import { auth } from '../firebase/init'
import {createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [form, setForm] = useState(false);

function register() {
console.log('registered')
createUserWithEmailAndPassword(auth, email, password).then((user) => {
    setForm(true)
})
.catch(() => {
console.error();
})
}

    return (
        {

            <div className='signup_form'>
            <h2>Sign Up!</h2>
            <div className="signup_inputs">
            <input onChange={(event) => setEmail(event.target.value)} type="text"
            placeholder='Email' />
            <input onChange={(event) => setPassword(event.target.value)} placeholder='Password' type="text" />
            <button onClick={register}>Sign Up</button> 
            </div>
            </div>
        }
    );
}

export default SignupForm;
