import React from 'react';

const AddItemButton = ({ onAddItem }) => {
  return (
    <button onClick={onAddItem}>
      Add Item
    </button>
  );
};

export default AddItemButton;
