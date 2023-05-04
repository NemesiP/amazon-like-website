import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/amazon-logo.png";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import CartModal from "./CartModal";

function Header({ cart, totalPrice, onRemoveItem }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="header">
      <div className="nav">
        <div className="nav__logo">
          <img src={logo} alt="Amazon logo" />
        </div>
        <div className="nav__search">
          <input
            type="text"
            className="nav__searchInput"
            placeholder={isFocused ? "" : "Search Amazon"}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <FaSearch className="nav__searchIcon" />
        </div>
        <div className="nav__links">
          <div className="nav__link">
            <span className="nav__optionLineOne">Hello, sign in</span>
            <span className="nav__optionLineTwo">Account & Lists</span>
          </div>
          <div className="nav__link">
            <span className="nav__optionLineOne">Returns</span>
            <span className="nav__optionLineTwo">& Orders</span>
          </div>
          <div className="nav__link">
            <span className="nav__optionLineOne">Your</span>
            <span className="nav__optionLineTwo">Prime</span>
          </div>
          <div className="nav__link nav__optionCart" onClick={handleCartClick}>
            <FaShoppingCart className="nav__cartIcon" />
            <span className="nav__cartCount">{cart.length}</span>
          </div>
          <div className="nav__menu" onClick={handleMenuClick}>
            <FaBars />
          </div>
        </div>
      </div>
      {isCartOpen && (
        <CartModal
          cart={cart}
          totalPrice={totalPrice}
          onClose={handleCartClick}
          onRemoveItem={onRemoveItem}
        />
      )}
    </div>
  );
}

export default Header;
