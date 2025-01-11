import React, { useEffect, useState } from 'react';

// da77d71e


const API__URL = 'http://www.omdbapi.com/?apikey=da77d71e';

const Directory = () => {
    const [search, setSearch] = useState('Godfather');
    const [movieData, setMovieData] = useState([]);

    const searchResults = async (title) => {
        const response = await fetch(`${API__URL}&s=${title}`)
        const data = await response.json();
        setMovieData(data)
    }

    useEffect(() => {
        searchResults(search)
    }, []);


    return (
        <div className="directory">
            <div className="container">
                <div className="row">
                    <div className="searchbar__wrapper">
                        <div className="searchbar__container">
                        <input 
                        type="search" 
                        className='searchbar'
                        placeholder='Search your favorites!'
                        aria-label='Search'
                        onChange={(event) => {setSearch(event.target.value)}}
                        />
                        <i className="fa-solid fa-magnifying-glass"
                        onClick={() => searchResults(search)}
                        
                        ></i>
                        </div>
                    </div>

                    <div className="search__results__container">
                       {movieData.map((movie) => (
                        <div>
                       ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Directory;
