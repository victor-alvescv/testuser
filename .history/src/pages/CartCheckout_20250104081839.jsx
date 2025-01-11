import CartItem from '../components/CartItem';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CartCheckout = ({cart, setCart}) => {

    // const removeCartItem = (id) => {
    //     setCart((prevCart) => prevCart.filter(item => item.imdbID !== id));
    // }

    return (
        <div className="checkout">
            <div className="container">
                <div className="row">
            <Link to="/search">
                            <Button 
                            colorPalette="red" 
                            variant="solid"
                            >
                            <RiArrowLeftLine /> Movies
                            </Button>
            </Link>
                    <div className="cart__title">
                        <h1>Cart</h1>
                    </div>
                    <div className="cart__header">
                        <h1 className='htxt header__movie'>Movie</h1>
                        <h1 className='htxt header__quantity'>Quantity</h1>
                        <h1 className='htxt header__price'>Price</h1>
                    </div>
                    {cart.map((item) => (
                        <CartItem movieOb={item} />
                    ))

                    }
                <div className="checkout__container">
                    <div className="checkout__wrapper">
                        <div className="checkout__text Subtotal">
                            <span>Subtotal</span>
                            <span>$40</span>
                        </div>
                        <div className="checkout__text Taxes">
                            <span>Tax</span>
                            <span>$2</span>
                        </div>
                        <div className="checkout__text Total">
                            <span>Total</span>
                            <span>$42</span>
                        </div>
                        <Button colorPalette="red" variant="solid">
                             Proceed to checkout
                        </Button>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}

export default CartCheckout;