import React from 'react';

const CartIndicator = ({ itemCount }) => {
  return (
    <div>
      <h2>Cart Indicator</h2>
      <p>Total Items: {itemCount}</p>
    </div>
  );
};

export default CartIndicator;
