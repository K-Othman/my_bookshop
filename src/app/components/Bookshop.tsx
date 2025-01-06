"use client";

import Books from "./Books";
import { useEffect, useState } from "react";

interface Book {
  id: string;
  title: string;
  image: string;
  url: string;
  price: string;
}

const Bookshop = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        if (data) {
          setBooks(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const higherToLowerPrice = (books: Book[]): void => {
    return setBooks(
      [...books].sort(
        (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
      )
    );
  };

  const LowerToHigher = (books: Book[]): void => {
    return setBooks(
      [...books].sort(
        (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
      )
    );
  };

  if (isLoading) return <p>Loading ...</p>;
  if (!books.length) return <p>No Books</p>;

  return (
    <section className="container md:mx-auto my-7 mx-3">
      <h2 className="text-3xl md:text-5xl font-bold border-b-4 border-secondary w-[70%] md:pb-5 pb-3 mb-3">
        Bookshop
      </h2>
      <p>
        Browse through our specially curated online bookshop. Featuring titles
        from British Library publishing, new titles, chart toppers and beautiful
        classics.
      </p>
      <div className="mt-6 flex justify-end gap-4">
        price :
        <div className="flex flex-col">
          <button
            onClick={() => {
              LowerToHigher(books);
              console.log(books);
            }}
          >
            lower
          </button>
          <button
            onClick={() => {
              higherToLowerPrice(books);
              console.log(books);
            }}
          >
            higher
          </button>
        </div>
      </div>
      <Books books={books} />
    </section>
  );
};

export default Bookshop;
