import React from 'react';

const CartItem = ({movieOb} ) => {
const [quantity, setQuantity] = useState(movieOb.quantity);

    function changeQuantity(value) {
       movieOb.quantity = value
    }


    return (
        <div className='cart__item--wrapper'>
            <div className="cart__item--movie-wrapper">
                <div className="cart__item--poster">
                    <img src={movieOb.movie.Poster} className='poster' alt="" />
                </div>
                <div className="cart__item--info">
                    <h1 className="cart__item--title">{movieOb.movie.Title}</h1>
                    <h1 className="cart__item--price">$20</h1>
                    <h1 className="cart__item--remove">Remove</h1>
                </div>
            </div>
            <div className="cart__item--quantity">
                <input type="number" id="quantity" value={movieOb.quantity} name="quantity" min="1" max="99" onChange={(event) => changeQuantity(event.target.value)} />
            </div>

            <h1 className="cart__item--total">
                $40
            </h1>

        </div>
    );
}

export default CartItem;
