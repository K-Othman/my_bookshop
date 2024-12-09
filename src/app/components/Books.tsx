import Link from "next/link";
import React from "react";

/* eslint-disable @next/next/no-img-element */

interface Book {
  isbn13: string;
  title: string;
  image: string;
  url: string;
  price: string;
}

interface BooksProps {
  books: Book[];
}

const Books: React.FC<BooksProps> = ({ books }) => {
  // const higherToLowerPrice = (books: Book[]): Book[] => {
  //   return books.sort(
  //     (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
  //   );
  // };

  // const LowerToHigher = (books: Book[]): Book[] => {
  //   return books.sort(
  //     (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
  //   );
  // };

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 text-center">
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
