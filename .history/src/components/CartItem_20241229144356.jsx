import React from 'react';

const CartItem = () => {
    return (
        <div className='cart__item--wrapper'>
                <div className="cart__item--poster">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg" alt="" />
                </div>
                <div className="cart__item--info">
                    <div className="cart__item--title"></div>
                    <div className="cart__item--price"></div>
                    <div className="cart__item--remove">Remove</div>
                </div>
        </div>
    );
}

export default CartItem;
