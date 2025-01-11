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
                                <img className='home__movie--poster' src="https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1.jpg?v=1733910535" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-mistery-movie-poster-design-template-2ec690d65c22aa12e437d765dbf7e4af_screen.jpg?ts=1680854635" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMXxbxBtOMgVBgXObvgPHc1tfxXcNm1vGpQ&s" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://i5.walmartimages.com/seo/The-Godfather-Original-Movie-Poster-poster-Frameless-Gift-12-x-18-inch-30cm-x-46cm_c6df3fd5-1e9c-49ca-8cb6-1af6078df4c2.b21fd8bc877c5645b9340a53580833a2.jpeg" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1700270983" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://m.media-amazon.com/images/I/61CRq2R6i4L._AC_UF894,1000_QL80_.jpg" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://lh4.googleusercontent.com/proxy/I4gierj6yMIjBy5O01cAK7pAmjXvn0kQY938aTn8T7SMWx3uecU_khgjX-ZjCJJTFWO48Ac-FpBtX0WU3NgZrXVSR7UhiLOydI71eGJQ-rI" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://images.squarespace-cdn.com/content/v1/5a7f41ad8fd4d236a4ad76d0/1669842708561-ZGO3HUU3P9F24PKN1V6I/JungleBook_023B_ResUp_DC_v02logo2k.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
