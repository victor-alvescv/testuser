import React from 'react';

const SignupForm = () => {
    return (
        <div className='signup'>
            <h2>Sign Up!</h2>
        <div className="signup_inputs">
            <input type="text" placeholder='Username' />
            <input type="text"
            placeholder='Email' />
            <input placeholder='Password' type="text" />
        </div>
        </div>
    );
}

export default SignupForm;
