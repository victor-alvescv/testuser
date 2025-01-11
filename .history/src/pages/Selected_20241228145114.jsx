import React from 'react';
import { useParams } from 'react-router-dom';

const Selected = () => {
const {movieId} = useParams();
    return (
        <div>
            Movie {movieId} Selected!
        </div>
    );
}

export default Selected;
