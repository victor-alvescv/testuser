import React from 'react';
import SignupForm from '../components/SignupForm';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="home_wrapper">
                    <h1 className='home_title'> Countless movies, shows, and more.</h1>
                    <h2>Create your account</h2>
                    <SignupForm className="signup_form"/>
                </div>
            </div>
        </div>
    );
}

export default Home;
