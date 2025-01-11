import React from 'react';

const StarRating = ({rating}) => {
    const fullStar = Math.floor(rating)
    const halfStar = false
    const starCount = (5)
    
    
    return (
        <div className='movie__stars'>
            {Array(fullStar).fill().map((_, i) => (
                <i key={i} class="fa-solid fa-star"></i>
            ))}

            {Array(halfStar).fill().map((_, i) => (
                <i key={i} class="fa-regular fa-star-half-stroke"></i>
            ))}
            
            {Array(starCount - fullStar - halfStar).fill().map((_, i) => (
                <i key={i} class="fa-regular fa-star"></i>
            ))}


        </div>
    );
}

export default StarRating;
