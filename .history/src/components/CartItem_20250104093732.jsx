import React, { useState } from 'react';

const CartItem = ({movieOb, remove, setCart, cart} ) => {
const [quantity, setQuantity] = useState(movieOb.quantity);

    const changeQuantity = (value) => {
        setCart((prevCart) => prevCart.map((item) => item.movie.imdbID === movieOb.movie.imdbID ? {...item, quantity: value} : item )})
    }



    return (
        <div className='cart__item--wrapper'>
            <div className="cart__item--movie-wrapper">
                <div className="cart__item--poster">
                    <img src={movieOb.movie.Poster} className='poster' alt="" />
                </div>
                <div className="cart__item--info">
                    <h1 className="cart__item--title">{movieOb.movie.Title}</h1>
                    <h1 className="cart__item--price">${movieOb.price}</h1>
                    <h1 className="cart__item--remove"
                    onClick={() => remove(movieOb.movie.imdbID)}
                    >Remove</h1>
                </div>
            </div>
            <div className="cart__item--quantity">
                <input type="number" id="quantity" value={quantity} name="quantity" min="1" max="99" onChange={(event) => changeQuantity(event.target.value)} />
            </div>

            <h1 className="cart__item--total">
                ${quantity * movieOb.price}
            </h1>

        </div>
    );
}

export default CartItem;
