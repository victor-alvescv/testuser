import React from 'react';
import styles from '../Directory.module.css'
import { Link } from 'react-router-dom';


const MovieCard = ({movie}) => {
    return (
        <div className={styles.movie} >
            <Link to={`/movie/${movie.imdbID}`}>
                <div>
                    <p>{movie.Year}</p>
                    <h3>{movie.Title}</h3>
                </div>

                <div>
                    <img src={movie.Poster !== 'N/A' ?movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
                </div>

                <div>
                    <span>{movie.Type}</span>
                   
                </div>
             </Link>
            </div>
    );
}

export default MovieCard;
