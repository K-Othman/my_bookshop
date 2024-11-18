"use client";
import Link from "next/link";
// import Image from "next/image";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

interface Book {
  isbn13: string;
  title: string;
  image: string;
  url: string;
  price: string;
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

  const filterByPrice = (books: Book[]): Book[] => {
    books.sort((a, b) => a.price - b.price);
  };

  if (isLoading) return <p>Loading ...</p>;
  if (!books.length) return <p>No Books</p>;

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 text-center">
      <button onClick={() => filterByPrice}>Higher</button>
      {books.map((book) => (
        <div key={book.isbn13} className="">
          <Link href={book.url} className="text-center">
            <img className="mx-auto" src={book.image} alt="The Book Cover" />
            <div className="-mt-5">
              <h2 className="font-bold">{book.title}</h2>
              <p>{book.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Books;
