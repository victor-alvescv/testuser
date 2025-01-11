import React from 'react';
import SignupForm from '../components/SignupForm';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className='home_title'> Countless movies, shows, and more!</h1>
                <SignupForm/>
            </div>
        </div>
    );
}

export default Home;
