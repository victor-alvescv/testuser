import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const CartCheckout = () => {
    return (
        <div>
            <Link to="/search">
                            <Button 
                            colorPalette="red" 
                            variant="solid"
                            >
                            <RiArrowLeftLine /> Movies
                            </Button>
            </Link>
        </div>
    );
}

export default CartCheckout;
