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
        setMovieData(data)
        console.log(data)
    }

    useEffect(() => {
        searchResults(search)
    }, []);


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
                       {movieData.Search?.length > 0 ? movieData.Search.map((movie) => (
                        <MovieCard movie={movie}/>
                       )) : (
                        <>
                       <h1>
                            {movieData.Error}
                       </h1>
                        
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
