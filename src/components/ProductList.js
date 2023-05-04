import React from "react";
import "./ProductList.css";

function ProductList({ products, addToCart }) {
  return (
    <div className="productList">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product__info">
            <p className="product__title">{product.title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{product.price}</strong>
            </p>
            <div className="product__rating">
              {Array(Math.ceil(product.rating))
                .fill()
                .map((_, i) => (
                  <span key={i} role="img" aria-label="star">
                    ⭐
                  </span>
                ))}
            </div>
          </div>
          <img src={product.image} alt={product.title} />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
