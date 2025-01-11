import React, { useState } from 'react';

const CartItem = ({movieOb} ) => {
const [quantity, setQuantity] = useState(movieOb.quantity);

    function changeQuantity(value) {
       setQuantity(value)
       movieOb.quantity = quantity
       console.log(movieOb)
    }


    return (
        <div className='cart__item--wrapper'>
            <div className="cart__item--movie-wrapper">
                <div className="cart__item--poster">
                    <img src={movieOb.movie.Poster} className='poster' alt="" />
                </div>
                <div className="cart__item--info">
                    <h1 className="cart__item--title">{movieOb.movie.Title}</h1>
                    <h1 className="cart__item--price">${}}</h1>
                    <h1 className="cart__item--remove">Remove</h1>
                </div>
            </div>
            <div className="cart__item--quantity">
                <input type="number" id="quantity" value={quantity} name="quantity" min="1" max="99" onChange={(event) => changeQuantity(event.target.value)} />
            </div>

            <h1 className="cart__item--total">
                ${quantity}
            </h1>

        </div>
    );
}

export default CartItem;
