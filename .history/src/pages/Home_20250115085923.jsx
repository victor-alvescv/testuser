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
                                <img className='home__movie--poster' src={} alt="" />
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
