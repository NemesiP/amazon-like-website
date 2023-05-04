import React from "react";
import "./CartItem.css";

function CartItem({ item, removeItem }) {
  const handleRemove = () => {
    removeItem(item.id, item.price);
  };

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={item.image} alt={item.title} />
      <div className="cartItem__info">
        <h3 className="cartItem__title">{item.title}</h3>
        <p className="cartItem__price">${item.price.toFixed(2)}</p>
        <div className="cartItem__quantity">
          <span className="cartItem__quantityText">Quantity:</span>
          <div className="cartItem__quantitySelector">
            <button className="cartItem__quantityButton">-</button>
            <span className="cartItem__quantityValue">{item.quantity}</span>
            <button className="cartItem__quantityButton">+</button>
          </div>
        </div>
        <button className="cartItem__removeButton" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
