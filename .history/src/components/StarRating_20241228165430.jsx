import React from 'react';

const StarRating = ({rating}) => {
    const fullStar = Math.floor(rating)
    const halfStar = !Number.isInteger(rating)
    
    return (
        <div>
            {(<i class="fa-regular fa-star-half-stroke"></i>).repeat(3)
            }
             <i class="fa-solid fa-star"></i>
        </div>
    );
}

export default StarRating;
