import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';

const CartWidget = () => {
  return (
    <div>
      <span>
        <TiShoppingCart />
      </span> 
      <span className="notification">5</span>
    </div>
  );
};

export default CartWidget;
