import React from 'react';

const StarRating = ({rating}) => {
    const fullStar = Math.floor(rating)
    const halfStar = !Number.isInteger(rating)
    const starCount = (5)
    
    
    return (
        <div className='movie__stars'>
            {fullStar && Array(fullStar).fill().map((_, i) => (
                <i key={i} class="fa-solid fa-star"></i>
            ))}

            { rating &&
                <i class="fa-regular fa-star-half-stroke"></i>
            }
            
            {rating && Array(starCount - fullStar - halfStar).fill().map((_, i) => (
                <i key={i} class="fa-regular fa-star"></i>
            ))}


        </div>
    );
}

export default StarRating;
