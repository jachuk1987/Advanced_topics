import React, { useState, useEffect } from "react";



const createBook = ({ id, title, author, status }) => {
  if (status !== "Available" && status !== "Lent Out") {
    throw new Error("Invalid book status!");
  }
 
  return {
    id,
    title,
    author,
    status,
    setStatus(newStatus) {
      if (newStatus !== "Available" && newStatus !== "Lent Out") {
        throw new Error("Invalid book status!");
      }
      this.status = newStatus;
    },
  };
};

const createLendingTracker = () => {
  const lendingDurations = new Map();
  return {
    lendBook: (bookId) => {
      lendingDurations.set(bookId, Date.now());
    },
    returnBook: (bookId) => {
      const lendTime = lendingDurations.get(bookId);
      const duration = lendTime ? (Date.now() - lendTime) / 1000 : 0;
      lendingDurations.delete(bookId);
      return duration.toFixed(2);
    },
  };
};

const LibraryManagement = () => {
  const [library, setLibrary] = useState([]);
  const lendingTracker = createLendingTracker();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://openlibrary.org/subjects/science.json?limit=5");
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();

        const books = data.works.map((book) =>
          createBook({
            id: book.key,
            title: book.title,
            author: book.authors?.[0]?.name || "Unknown",
            status: "Available",
          })
        );
        setLibrary(books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  const renderBooks = () => {
    return library.map((book) => (
      <div key={book.id} className="book-item">
        <div>
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Status:</strong> {book.status}</p>
        </div>
        <div>
          <button className="lend-button" onClick={() => lendBook(book.id)}>Lend</button>
          <button className="return-button" onClick={() => returnBook(book.id)}>Return</button>
        </div>
      </div>
    ));
  };

  const lendBook = (bookId) => {
    setLibrary((prevLibrary) =>
      prevLibrary.map((book) =>
        book.id === bookId && book.status === "Available"
          ? { ...book, status: "Lent Out" }
          : book
      )
    );
    lendingTracker.lendBook(bookId);
  };

  const returnBook = (bookId) => {
    setLibrary((prevLibrary) =>
      prevLibrary.map((book) =>
        book.id === bookId && book.status === "Lent Out"
          ? { ...book, status: "Available" }
          : book
      )
    );
    lendingTracker.returnBook(bookId);
  };

  const addBook = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;

    if (title && author) {
      const newBook = createBook({
        id: Date.now().toString(),
        title,
        author,
        status: "Available",
      });
      setLibrary((prevLibrary) => [...prevLibrary, newBook]);
      event.target.reset();
    }
  };

  return (
    <div className="library-container">
      <h1 className="title">Library Management System</h1>

      <form onSubmit={addBook} className="book-form">
        <input name="title" type="text" placeholder="Book Title" className="input-field" required />
        <input name="author" type="text" placeholder="Author" className="input-field" required />
        <button type="submit" className="add-book-button">Add Book</button>
      </form>

      <div className="library-inventory">
        <h2 className="inventory-title">Library Inventory</h2>
        <div className="books-container">{renderBooks()}</div>
      </div>
    </div>
  );
};

export default LibraryManagement;