import React, { useState, useEffect } from "react";
import "./BookFinder.css";

const BookFinder = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Search for the book title...");

  // Debounce Function
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Fetch books from API
  const fetchBooks = async (searchQuery) => {
    if (searchQuery.length < 3) {
      setMessage("Please type at least 3 characters to search.");
      setBooks([]);
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${searchQuery}`
      );
      const data = await response.json();
      if (data.docs.length === 0) {
        setMessage("No books found. Try a different title.");
        setBooks([]);
      } else {
        setBooks(data.docs);
      }
    } catch (error) {
      setMessage("Error fetching books. Please try again.");
      setBooks([]);
    }
    setLoading(false);
  };

  // Debounced search handler
  const handleSearch = debounce((text) => {
    setQuery(text);
    fetchBooks(text);
  }, 500);

  // Input change handler
  const handleInputChange = (e) => {
    const text = e.target.value;
    handleSearch(text);
  };

  return (
    <div className="book-finder">
      {/* Heading and Search Bar */}
      <div className="header">
        <h1>Book Finder</h1>
        <p>Find your favorite books by title.</p>
        <input
          type="text"
          placeholder="Search by title..."
          onChange={handleInputChange}
        />
      </div>

      {/* Results Section */}
      <div className="results">
        {loading ? (
          <p>Loading books...</p>
        ) : books.length === 0 ? (
          <p className="message">{message}</p>
        ) : (
          <div className="book-grid">
            {books.slice(0, 20).map((book, index) => (
              <div className="book-card" key={index}>
                <h3>{book.title}</h3>
                <p>
                  <strong>Author:</strong>{" "}
                  {book.author_name ? book.author_name.join(", ") : "N/A"}
                </p>
                <p>
                  <strong>First Published:</strong>{" "}
                  {book.first_publish_year || "N/A"}
                </p>
                <a
                  href={`https://openlibrary.org${book.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  View Book
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookFinder;
