import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import "../css/BookDetails.css";

const BookDetails = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch book details based on the ID
    /* const fetchBookDetails = async () => {
      try {
        const response = await fetch(`/api/books/${id}`);
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.log("Error fetching book details:", error);
      }
    };

    fetchBookDetails();*/
    const mockBookDetails = {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      description: "Description of Book 1",
    };
    setBookDetails(mockBookDetails);
  }, [id]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(bookDetails));
    alert("Book added to cart!");
  };

  return (
    <>
      <button style={{ marginLeft: 10 }} onClick={() => navigate("/books")}>
        Back
      </button>
      <div className="book-details">
        <h1 className="book-title">{bookDetails.title}</h1>
        <p className="book-author">Author: {bookDetails.author}</p>
        <p className="book-description">{bookDetails.description}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default BookDetails;
