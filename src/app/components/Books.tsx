"use client";
import { useEffect, useState } from "react";

interface Book {
  isbn13: string;
  title: string;
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/python")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        if (data && data.books) {
          setBooks(data.books);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading ...</p>;
  if (!books.length) return <p>No Books</p>;

  return (
    <div>
      {books.map((book) => (
        <div key={book.isbn13}>
          <h2>{book.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Books;
