import React, { useState } from "react";
import "./CartModal.css";
import CartItem from "./CartItem";

function CartModal({ cart, totalPrice, onClose, onRemoveItem }) {
  const [cartItems, setCartItems] = useState(cart);

  const handleRemoveItem = (id, price) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    onRemoveItem(price);
  };

  return (
    <div className="cartModal">
      <div className="cartModal__header">
        <h3>Shopping Cart</h3>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="cartModal__body">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} removeItem={handleRemoveItem} />
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cartModal__footer">
          <p>Total: ${parseFloat(totalPrice.toFixed(2))}</p>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartModal;
