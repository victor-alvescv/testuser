import React from 'react';
import SignupForm from '../components/SignupForm';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="home_wrapper">
                    <h1 className='home_title'> Countless movies, shows, and more.</h1>
                    <h2 className='home_subtitle'>Welcome to Cinema Library, the universal library for all your favorite films.</h2>

                    <Link to="/search">
                    <button className='home__explore--button'>
                        Explore
                    </button>
                    </Link>

                    <div className="home__movies--container">
                        <div className="home__movies--wrapper">
                            <div className="home__movie--card">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
