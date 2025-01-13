import MovieCard from '../components/MovieCard';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from "../Directory.module.css"
import SkeletonLoading from '../components/SkeletonLoading';
import YearSlider from '../components/YearSlider';
import { Button } from '@chakra-ui/react';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { SparklesCore } from '../components/ui/sparkles';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Spotlight } from '../components/ui/Spotlight';
// da77d71e


const API__URL = 'http://www.omdbapi.com/?apikey=da77d71e';

const Directory = ({search, setSearch, page, setPage}) => {

    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

useLayoutEffect(() => {
    console.log('gsap animation GO!')
        
        if (movieData.Search?.length > 0 && !loading) {
            const cardElements = document.querySelectorAll('.card')
            if(cardElements.length === movieData.Search.length) {
                gsap.fromTo('.card', 
                  { opacity:0,
                    y:200},
                    {
                    y:0,
                    delay: .3,
                    duration: 1,
                    opacity: 1,
                    stagger: {
                        amount: .5,
                        grid: [1, 5],
                        axis: 'x',
                        ease: 'power',
                        from: 'start'}
                    }
                )
            }
        }

}, [movieData, loading])


    const startSearch = (searchVal = search, pageNum = page) => {
        setPage(pageNum)
        setLoading(true)
        searchResults(searchVal)
    }

    const searchResults = async (title) => {
        setLoading(true)
        const response = await fetch(`${API__URL}&s=${title}&page=${page}`)
        const data = await response.json();
        setMovieData(data)
        setLoading(false)
        console.log(data)
    }


    useEffect(() => {
        startSearch();
    }, [search, page]);


    return (
        <div className="directory">
            <SparklesCore/>
            <div className={styles.container}>
                <div className={styles.row}>
        <div className="search__header--wrapper">
            <div className="search__header--title">
                Find your favorites with an endless selection of film and TV.
            </div>
                <div className="searchbar__wrapper">
                        <div className='search'>
                        <input 
                        type="search" 
                        className='search_input'
                        placeholder='Search your favorites!'
                        aria-label='Search'
                        onChange={(event) => {setSearchQuery(event.target.value)}}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setSearch(searchQuery)
                                setPage(1)
                            }
                        }}
                        />
                        <Link to='/search'>
                        <i className="fa-solid fa-magnifying-glass"
                        onClick={() => {
                            setSearch(searchQuery)
                            setPage(1)
                        }}
                        
                        ></i>
                        </Link>
                        </div>
                    </div>

                    <div className="search__type--wrapper">
                        <utton className='search__type-button'>All</button>
                        <utton className='search__type-button'>Movies</button>
                        <utton className='search__type-button'>Series</button>
                    </div>
            </div>

                     
                      
                  
                    <div className={styles.search__info__wrapper}>
                        <h1 className={styles.results__for}>Search results for: {search}</h1>
                        <div className={styles.page__buttons__wrapper}>
                        {page === 1 ? (<><div></div></>) : (
                            <Button 
                            className='prevPage_btn'
                            colorPalette="red" 
                            variant="subtle"
                            onClick={() => setPage(page - 1)}
                            >
                        <RiArrowLeftLine />
                        </Button>
                            
                        )}
                        <h1 className={styles.page__number}>Page: {page}</h1>
                        {movieData.Search?.length > 0 ? ( 
                            <>
                       
                            <Button 
                            className='nextPage_btn'
                            colorPalette="red" 
                            variant="solid"
                            onClick={() => setPage(page + 1)}
                            >
                           <RiArrowRightLine />
                            </Button>
                            
                        </>
                            ) : (<></>)}
                            </div>
                    </div>

                <div className="cards__wrapper">
            <div className={styles.cardsContainer}>

                {(movieData.Search?.length > 0 && !loading) 
                ? 
                movieData.Search.map(
                    (movie) => {
                            return <MovieCard className='card' movie={movie}/>
                    }
                ) : (
                    
                    <>
                            {loading ? (<SkeletonLoading/>) : (
                                <div className={styles.data__error__wrapper}>
                                    <h1 className={styles.data__error}>
                                        {movieData.Error}
                                    </h1>
                            </div>)}
                            </>
                        )    
                        
                    }
                    </div>
                    </div>

               
                </div>
            </div>
        </div>
    );
}

export default Directory;