import MovieCard from '../components/MovieCard';
import React, { useEffect, useState } from 'react';
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
    const [year, setYear] = useState([1888, 2024]);
    const [searchQuery, setSearchQuery] = useState('');

useGSAP(() => {
    if (movieData.length > 0) {

        gsap.from('.card', {
            y:200,
            opacity:0,
            duration: 1,
            stagger: {
                amount: .5,
                grid: [1, 4],
                axis: 'x',
                ease: 'power',
                from: 'start'
            }
        })
    }
}, [movieData])


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
        cardAnimate();
        console.log(data)
    }


    useEffect(() => {
        startSearch();
    }, [search, page]);


    return (
        <div className="directory">
            <Spotlight className='homeSpot'/>
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
                                startSearch(search)
                                setPage(1)
                            }
                        }}
                        />
                        <Link to='/search'>
                        <i className="fa-solid fa-magnifying-glass"
                        onClick={() => {
                            setSearch(searchQuery)
                            startSearch(search)
                            setPage(1)
                        }}
                        
                        ></i>
                        </Link>
                        </div>
                    </div>
            </div>
                  
                    <div className={styles.search__info__wrapper}>
                        <h1 className={styles.results__for}>Search results for: {search}</h1>
                        <YearSlider year={year} onYearChange={setYear}/>
                    </div>

                <div className="cards__wrapper">
            <div className={styles.container}>

                {(movieData.Search?.length > 0 && !loading) 
                ? 
                movieData.Search.map(
                    (movie) => {
                        if (movie.Year.slice(0, 4) > year[0] || movie.Year.slice(-4) < year[1]) {
                            return <MovieCard className='card' movie={movie}/>
                        } else return () => setMovieData([null])
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

                    <div className={styles.page__buttons__wrapper}>
                        {page === 1 ? (<><div></div></>) : (
                            <Button 
                            className='prevPage_btn'
                            colorPalette="red" 
                            variant="solid"
                            onClick={() => setPage(page - 1)}
                            >
                        <RiArrowLeftLine /> Prev page
                        </Button>
                            
                        )}
                       {movieData.Search?.length > 0 ? ( 
                           <>
                        <h1 className={styles.page__number}>Page: {page}</h1>
                            <Button 
                            className='nextPage_btn'
                            colorPalette="red" 
                            variant="solid"
                            onClick={() => setPage(page + 1)}
                            >
                            Next page <RiArrowRightLine />
                            </Button>
                        </>
                            ) : (<></>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Directory;
