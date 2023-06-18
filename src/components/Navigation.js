import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/Navigation.css";

const Navigation = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/books" className="nav-link">
            Browse Books
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to="/cart" className="nav-link cart-link">
            <span className="cart-icon" aria-hidden="true">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png"
                alt="cart-icon"
              />
              <span> ({cartItems.length}) </span>
            </span>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
