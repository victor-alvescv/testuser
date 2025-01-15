import React from 'react';
import { SparklesCore } from '../components/ui/sparkles';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import poster1 from '../assets/managerPoster1.webp'
import poster2 from '../assets/walkaloneposter1.webp'
import poster3 from '../assets/homeposter3.jpg'
import poster4 from '../assets/homeposter4.jpg'
import poster5 from '../assets/homeposter5.avif'
import poster6 from '../assets/homeposter6.webp'
import poster7 from '../assets/homeposter7.jpg'
import poster8 from '../assets/homeposter8.jpg'
import poster9 from '../assets/homeposter9.jpg'
import poster10 from '../assets/homeposter10.jpg'


const Home = ({user}) => {

    useGSAP(() => {
        gsap.from('.hh', {
            y: 175,
            opacity: 0,
            duration: .45,
            // stagger: 0.5
            stagger: {
              amount: .5,
              grid: [1, 4],
              axis: 'x',
              ease: 'power',
              from: 'start'
            }   
        })
        gsap.from('.home__movie--card', {
            delay: 1,
            scale:5,
            opacity: 0,
            y: -300,

            ease: 'power3.out',

            stagger: {
                amount:1,
                grid: [2, 10],
                axis: 'x',
         
                from:'random'
            }
        })
    })





    return (
        <div className="container">
            <div className="row">
                <div className="home_wrapper">
                    <SparklesCore className=''/>
        
        <div className="home__header--wrapper">

                    <h1 className='hh home_title'> Countless movies, shows, and more.</h1>
                    <h2 className='hh home_subtitle'>Welcome to Cinema Library, the universal library for all your favorite films.</h2>

                   <Link to="/search">
                    <button className='hh home__explore--button'
                    >
                        Explore
                    </button>
                        </Link>
        </div>

                    <div className="home__movies--container">
                        <div className="home__movies--wrapper hh">
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src={poster1} alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src={poster2}alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src={poster3} alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src={poster4} alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src={poster5} alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src={poster6} alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src={poster7} alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src={poster8} alt="" />
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
