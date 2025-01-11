import React from 'react';

const StarRating = ({rating}) => {
    const fullStar = Math.floor(rating)
    const halfStar = !Number.isInteger(rating)
    const starCount = (5)
    
    return (
        <div>
            {Array(fullStar).fill.map((_, i) => (
            <i class="fa-regular fa-star-half-stroke"></i>
            ))               
            }
             <i class="fa-solid fa-star"></i>
        </div>
    );
}

export default StarRating;
