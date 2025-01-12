import React from 'react';
import styles from '../Directory.module.css'
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const MovieCard = ({movie}) => {


    return (
        <div className=".card" className={movie.} >
            <Link to={`/movie/${movie.imdbID}`}>
                <div>
                    <p>{movie.Year}</p>
                </div>

                <div>
                    <img src={movie.Poster !== 'N/A' ?movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
                </div>

                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
             </Link>
            </div>
    );
}

export default MovieCard;
