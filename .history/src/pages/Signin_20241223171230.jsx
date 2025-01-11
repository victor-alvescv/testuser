import React from 'react';

const Signin = () => {
    return (
        <div>
            <div className='signup_form'>
            <h2>Sign Up!</h2>
            <div className="signup_inputs">
            <input onChange={(event) => (event.target.value)} type="text"
            placeholder='Email' />
            <input onChange={(event) => setPassword(event.target.value)} placeholder='Password' type="password" />
            <button onClick={register}>Sign Up</button> 
            </div>
            </div>
        </div>
    );
}

export default Signin;
