import React from 'react';

const CartItem = ({{movie}}) => {
    return (
        <div className='cart__item--wrapper'>
            <div className="cart__item--movie-wrapper">
                <div className="cart__item--poster">
                    <img src={movie.Poster} alt="" />
                </div>
                <div className="cart__item--info">
                    <h1 className="cart__item--title">{movie.Title}</h1>
                    <h1 className="cart__item--price">$20</h1>
                    <h1 className="cart__item--remove">Remove</h1>
                </div>
            </div>
            <div className="cart__item--quantity">
                <input type="number" value={2} id="quantity" name="quantity" min="1" max="5"/>
            </div>

            <h1 className="cart__item--total">
                $40
            </h1>

        </div>
    );
}

export default CartItem;
