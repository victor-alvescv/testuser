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
                        .
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