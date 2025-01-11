import { SkeletonText } from '../components/ui/skeleton';
import StarRating from '../components/StarRating';
import { Button, Skeleton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';

const Selected = ({setCart, cart}) => {
const {movieId} = useParams();
const [movie, setMovie] = useState(null);
const [price, setPrice] = useState();
const [added, setAdded] = useState(false);


useEffect(() => {
    selectedResults(movieId)
}, []);

    const selectedResults = async (id) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=da77d71e&i=${id}`)
        const data = await response.json()
        console.log(data)
        setMovie(data)
        setPrice(Math.floor(data.Year / 100))
    }

    return (
        <div className="selected">
            <div className="container">
                <div className="row">
                    <div className="movies__back-button">
                        <Link to="/search">
                            <Button 
                            colorPalette="red" 
                            variant="solid"
                            >
                            <RiArrowLeftLine /> Movies
                            </Button>
                        </Link>
                    </div>

                    <div className="selected__container">
                        <div className="poster__wrapper">
                        {movie ? (
                        <img className='movie__poster' src={movie.Poster} alt="" />
                        ) : (<Skeleton className='movie__poster' minWidth="300px"/>)}


                        </div>
                        <div className="movie__details__wrapper">
                        {movie ? (
                        <>
                            <h2 className='movie__details__title'>{movie.Title}</h2> 
                                <StarRating 
                                rating={Number(movie.imdbRating) / 2} />
                            <h2>${price}</h2>
                        </>        
                        ) : (<>
                        <Skeleton 
                        className='skeleton__title'
                        width='40%' 
                        height="10%"/>
                        <SkeletonText 
                            className="skeleton__info"
                            width="45%" 
                            noOfLines={3} 
                            gap={4}/>
                        </>
                        )}

{movie ? 
(
    <>
    <div className="movie__description__wrapper">
                                <h2>{movie.Plot}</h2>
                            </div>

                            
                            {added ? (
                            <Link to="/cart">
                                <Button
                            colorPalette="red"
                            variant="solid"
                            >Go to cart!</Button>
                            </Link>
                        
                        ) : (<Button
                            colorPalette="red"
                            variant='solid'
                            className='addtocart__btn'
                            onClick={() =>{ 
                                 setAdded(true)
                                setCart((prevCart) => {
                                const movieExists = prevCart.find((item) => item.movie.imdbID === movie.imdbID)    
                                if (movieExists) {
                                return prevCart.map((item) => 
                                    item.movie.imdbID === movie.imdbID ? {...item, quantity: +item.quantity + 1} : item
                                )
                            } else {
                                return [...prevCart, {movie, quantity: 1, price: price}]
                            }
                            
                                })
                            
                            }}
                            >
                                Add to Cart!
                            </Button>)}
                                </>
                            ) : (
                            <>
                            <div className='skeleton__desc'>
                                <SkeletonText noOfLines={6} gap={4} />
                            </div>
                                <Skeleton height="8%" width="25%"/>
                            </> )}
                            
                        </div>
                    </div>
                </div>
                </div>
                </div>
            );
        }

export default Selected;
