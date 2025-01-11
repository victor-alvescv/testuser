import React from 'react';
import { useParams } from 'react-router-dom';

const Selected = () => {
const {movieId} = useParams();

    const 

    return (
        <h1>
            Movie {movieId} Selected!
        </h1>
    );
}

export default Selected;
