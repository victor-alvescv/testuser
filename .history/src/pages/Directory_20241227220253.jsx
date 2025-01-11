import MovieCard from '../components/MovieCard';
import React, { useEffect, useState } from 'react';
import styles from "../Directory.module.css"
import SkeletonLoading from '../components/SkeletonLoading';
import YearSlider from '../components/YearSlider';
import { Button } from '@chakra-ui/react';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
// da77d71e


const API__URL = 'http://www.omdbapi.com/?apikey=da77d71e';

const Directory = () => {
    const [search, setSearch] = useState('Godfather');
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [year, setYear] = useState([1888, 2024]);
    const [page, setPage] = useState(1);

    const startSearch = (search) => {
        setLoading(true)
        searchResults(search)
    }

    const searchResults = async (title) => {
        
        const response = await fetch(`${API__URL}&s=${title}`)
        const data = await response.json();
        setMovieData(data)
        setLoading(false)
        console.log(data)
    }

    useEffect(() => {
        searchResults(search)
        console.log(page)
    }, [page]);


    return (
        <div className="directory">
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.search_title}>
                        Browse Endlessly
                    </div>
                    <div className="searchbar__wrapper">
                        <div className={styles.search}>
                        <input 
                        type="search" 
                        className={styles.search_input}
                        placeholder='Search your favorites!'
                        aria-label='Search'
                        onChange={(event) => {setSearch(event.target.value)}}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                startSearch(search)
                            }
                        }}
                        />
                        <i className="fa-solid fa-magnifying-glass"
                        onClick={() => startSearch(search)}
                        
                        ></i>
                        </div>
                    </div>

                    <div className={styles.search__info__wrapper}>
                        <h1 className={styles.results__for}>Search results for: {search}</h1>
                        <YearSlider year={year} onYearChange={setYear}/>
                    </div>

            <div className={styles.container}>
                {(movieData.Search?.length > 0 && !loading) 
                ? 
                movieData.Search.map(
                (movie) => {
                 if (movie.Year > year[0] && movie.Year < year[1]) {
                        return <MovieCard movie={movie}/>
                    } else return null
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

                    <div className={styles.page__buttons__wrapper}>
                        {page === 1 ? (<><div></div></>) : (
                        <Button 
                        colorPalette="red" 
                        variant="solid"
                        onClick={() => setPage(page - 1)}
                        >
                        <RiArrowLeftLine /> Prev page
                        </Button>
                            
                        )}
                            <Button 
                            colorPalette="red" 
                            variant="solid"
                            onClick={() => setPage(page + 1)}
                            >
                            Next page <RiArrowRightLine />
                            </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Directory;
