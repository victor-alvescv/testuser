import React, { useEffect } from 'react';

// da77d71e


const API__URL = 'http://www.omdbapi.com/?apikey=da77d71e';

const Directory = () => {
    const searchResults = async (title) => {
        const response = await fetch(`${API__URL}&s=${title}`)
        return response
    }

    useEffect(() => {
        
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
                        />
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                    <div className="search__results__container">
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Directory;
