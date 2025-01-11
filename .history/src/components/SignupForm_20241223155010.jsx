import React from 'react';

const SignupForm = () => {
    return (
        <div>
            <h2>Sign Up!</h2>
        <div className="signup_inputs">
            <input type="text" placeholder='Username' />
            <input type="text"
            placeholder='Email' />
            <input placeholder='' type="text" />
        </div>
        </div>
    );
}

export default SignupForm;
