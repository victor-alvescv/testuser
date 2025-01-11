import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';

const Selected = () => {
const {movieId} = useParams();
const [movie, setMovie] = useState();

useEffect(() => {
    selectedResults(movieId)
}, []);

    const selectedResults = async (id) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=da77d71e&i=${id}`)
        const data = await response.json()
        console.log(data)
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
                            {}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Selected;
