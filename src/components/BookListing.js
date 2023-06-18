import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/BookListing.css";

const BookListing = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch book data from an API or use a data source
    const mockBooks = [
      { id: 1, title: "Book 1", author: "Author 1" },
      { id: 2, title: "Book 2", author: "Author 2" },
      { id: 3, title: "Book 3", author: "Author 3" },
    ];
    setBooks(mockBooks);
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="book-listing">
      <h1>Book Listing</h1>
      <input type="text" placeholder="Search books" onChange={handleSearch} />

      <div className="book-cards">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
            <Link to={`/books/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookListing;
