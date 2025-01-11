import React from 'react';

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
