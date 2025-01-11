import { Button } from '@chakra-ui/react';
import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CartCheckout = () => {
    return (
        <div className="checkout">
            <div className="container">
                <div className="row">
                    <div className="cart__title">
                        <h1>Cart</h1>
                    </div>
                    <div className="cart__header">
                        <h1 className='header__movie'>Movie</h1>
                        <h1 className='header__quantity'>Quantiy</h1>
                        <h1>Price</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCheckout;

{/* <Link to="/search">
                <Button 
                colorPalette="red" 
                variant="solid"
                >
                <RiArrowLeftLine /> Movies
                </Button>
</Link> */}