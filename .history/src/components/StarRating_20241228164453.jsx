import React from 'react';

const StarRating = ({rating}) => {
    const stars = {<i class="fa-solid fa-star"></i>}.repeat(Math.floor(rating))
    return (
        <div>
             <i class="fa-regular fa-star-half-stroke"></i>
        </div>
    );
}

export default StarRating;
