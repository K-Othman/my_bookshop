"use client";

import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../context/booksContext";
import Books from "./Books";
import { Book } from "../context/booksContext";

const Bookshop = () => {
  const { books, isLoading } = useContext(BooksContext);

  const [filter, setFilter] = useState<string>("all");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const filterBooks = (): Book[] => {
    if (filter === "low-to-high") {
      return [...books].sort(
        (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
      );
    }
    if (filter === "high-to-low") {
      return [...books].sort(
        (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
      );
    }
    return books;
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
      <div className="mt-6 flex justify-end gap-4 my-5 outline-none">
        <label htmlFor="filter" className="font-medium">
          Filter By:
        </label>
        <select
          id="filter"
          className="px-2 py-1 border rounded-md"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <Books books={filterBooks()} />
    </section>
  );
};

export default Bookshop;
