import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import BookListing from "./components/BookListing";
import BookDetails from "./components/BookDetails";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookListing />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
