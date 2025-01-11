import React from 'react';

const StarRating = ({rating}) => {
    const fullStar = Math.floor(rating)
    const halfStar = !Number.isInteger(rating)
    const stars = 5
    
    return (
        <div>
            {(<i class="fa-regular fa-star-half-stroke"></i>).repeat(fullStar)
            }
             <i class="fa-solid fa-star"></i>
        </div>
    );
}

export default StarRating;
