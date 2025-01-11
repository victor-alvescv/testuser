import React from 'react';

const StarRating = ({rating}) => {
    const fullStar = Math.floor(rating)
    const halfStar = !Number.isInteger()
    
    return (
        <div>
             <i class="fa-regular fa-star-half-stroke"></i>
        </div>
    );
}

export default StarRating;
