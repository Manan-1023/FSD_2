import React, { useState } from 'react';
import AddItemButton from './AddItemButton';
import CartIndicator from './CartIndicator';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddItem = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <AddItemButton onAddItem={handleAddItem} />
      <CartIndicator itemCount={cartCount} />
    </div>
  );
}

export default App;
