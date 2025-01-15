import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import SkeletonLoading from '../components/SkeletonLoading';
import MovieCard from '../components/MovieCard';
import { SparklesCore } from '../components/ui/sparkles';

const API__URL = 'http://www.omdbapi.com/?apikey=da77d71e';

const Directory = ({ search, setSearch, page, setPage }) => {
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(search);
    const [type, setType] = useState('');
  
    // Debounce search input to reduce unnecessary API calls
    const debounceSearch = useCallback(
        (func, delay) => {
            let timer;
            return (event) => {
                clearTimeout(timer);
                timer = setTimeout(() => func(event), delay);
            };
        },
        []
    );

    const handleSearchChange = (e) => setSearchQuery(e.target.value);
    
    // Fetch movies based on search, type, and page
    useEffect(() => {
        const fetchMovies = async () => {
            if (!searchQuery) return; // Don't fetch if no search query
            setLoading(true);
            const response = await fetch(`${API__URL}&s=${searchQuery}&type=${type}&page=${page}`);
            const data = await response.json();
            setMovieData(data);
            setLoading(false);
        };
        fetchMovies();
    }, [searchQuery, page, type]);

    useEffect(() => {
        if (movieData.Search?.length > 0 && !loading) {
            // Using GSAP for animation of cards
            gsap.fromTo('.card', 
                { opacity: 0, y: 200 },
                { 
                    y: 0,
                    delay: 0.3,
                    duration: 1,
                    opacity: 1,
                    stagger: { amount: 0.5, grid: [1, 5], axis: 'x', ease: 'power', from: 'start' }
                }
            );
        }
    }, [movieData, loading]);

    const handleSearchSubmit = () => {
        setSearch(searchQuery);
        setPage(1);
    };

    return (
        <div className="directory">
            <SparklesCore />
            <div className="search__container">
                <div className="search__row">
                    <div className="search__header--wrapper">
                        <div className="search__header--title">
                            Find your favorites with an endless selection of film and TV.
                        </div>
                        <div className="searchbar__wrapper">
                            <div className="search">
                                <input
                                    type="search"
                                    className="search_input"
                                    placeholder="Search your favorites!"
                                    value={searchQuery}
                                    onChange={debounceSearch(handleSearchChange, 500)} // debounce on input change
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                                />
                                <Link to="/search">
                                    <i 
                                        className="fa-solid fa-magnifying-glass"
                                        onClick={handleSearchSubmit}
                                    />
                                </Link>
                            </div>

                            <div className="search__type--wrapper">
                                {['', 'movie', 'series', 'game'].map((item) => (
                                    <button 
                                        key={item}
                                        className={`search__type-button ${type === item ? 'active' : ''}`}
                                        onClick={() => setType(item)}
                                    >
                                        {item || 'All'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="search__info__wrapper">
                        <h1 className="search__results__for">Search results for: {search}</h1>
                        <div className="search__page__buttons__wrapper">
                            {page > 1 && (
                                <RiArrowLeftLine
                                    className="prevPage_btn"
                                    onClick={() => setPage(page - 1)}
                                />
                            )}
                            <h1 className="search__page__number">Page: {page}</h1>
                            {movieData.Search?.length > 0 && (
                                <RiArrowRightLine
                                    className="nextPage_btn"
                                    onClick={() => setPage(page + 1)}
                                />
                            )}
                        </div>
                    </div>

                    <div className="cards__wrapper">
                        <div className="search__cardsContainer">
                            {loading ? (
                                <SkeletonLoading />
                            ) : movieData.Search?.length > 0 ? (
                                movieData.Search.map((movie) => (
                                    <MovieCard key={movie.imdbID} className="card" movie={movie} />
                                ))
                            ) : (
                                <div className="search__data__error__wrapper">
                                    <h1 className="search__data__error">{movieData.Error}</h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Directory;
