import React from 'react';

const CartItem = () => {
    return (
        <div className='cart__item--wrapper'>
            <div className="cart__item--movie-wrapper">
                <div className="cart__item--poster">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg" alt="" />
                </div>
                <div className="cart__item--info">
                    <h1 className="cart__item--title">The Dark Knight</h1>
                    <h1 className="cart__item--price">$20</h1>
                    <h1 className="cart__item--remove">Remove</h1>
                </div>
            </div>
            <div className="cart__item--quantity">
            <input type="number" id="quantity" name="quantity" min="1" max="5"/>
            </div>

        </div>
    );
}

export default CartItem;
