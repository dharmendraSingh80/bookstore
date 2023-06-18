import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Bookstore</h1>
      <p>Explore our wide collection of books.</p>
      <Link to="/books" className="browse-link">
        Browse Books
      </Link>
    </div>
  );
};

export default Home;
