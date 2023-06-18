import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
import "../css/ShoppingCart.css";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (bookId) => {
    dispatch(removeFromCart(bookId));
  };

  return (
    <div className="shopping-cart">
      <h1 className="shopping-cart-title">Shopping Cart</h1>
      {cartItems && cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <p>{item.author}</p>
              <button
                onClick={() => handleRemove(item.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/checkout">
        <button className="checkout-btn">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default ShoppingCart;
