import MovieCard from '../components/MovieCard';
import React, { useEffect, useState } from 'react';
import styles from "../Directory.module.css"

// da77d71e


const API__URL = 'http://www.omdbapi.com/?apikey=da77d71e';

const Directory = () => {
    const [search, setSearch] = useState('Godfather');
    const [movieData, setMovieData] = useState([]);

    const searchResults = async (title) => {
        const response = await fetch(`${API__URL}&s=${title}`)
        const data = await response.json();
        setMovieData(data.Search)
        console.log(data.Search)
    }

    useEffect(() => {
        searchResults(search)
    }, []);


    return (
        <div className="directory">
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.search_title}>
                        Hey
                    </div>
                    <div className="searchbar__wrapper">
                        <div className="searchbar__container">
                        <input 
                        type="search" 
                        className='searchbar'
                        placeholder='Search your favorites!'
                        aria-label='Search'
                        onChange={(event) => {setSearch(event.target.value)}}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                searchResults(search)
                            }
                        }}
                        />
                        <i className="fa-solid fa-magnifying-glass"
                        onClick={() => searchResults(search)}
                        
                        ></i>
                        </div>
                    </div>

                    <div className={styles.container}>
                       {movieData?.length > 0 ? movieData.map((movie) => (
                        <MovieCard movie={movie}/>
                       )) : (
                        <>
                        WHAT!
                        </>
                       )
                    
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Directory;