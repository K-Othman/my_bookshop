// import Link from "next/link";
import React from "react";

/* eslint-disable @next/next/no-img-element */

interface Book {
  id: string;
  title: string;
  image: string;
  url: string;
  price: string;
}

interface BooksProps {
  books: Book[];
}

const Books: React.FC<BooksProps> = ({ books }) => {
  console.log(books, "<<<");

  return (
    // <div className="grid grid-cols-2 gap-8 md:grid-cols-3 text-center">
    <div>
      {books.map((book) => (
        <div key={book.id} className="">
          {/* <Link href={book.url} className="text-center"> */}
          <div className="text-center">
            <img className="mx-auto" src={book.image} alt="The Book Cover" />
            <div className="">
              <h2 className="font-bold">{book.title}</h2>
              <p>{book.price}</p>
            </div>
          </div>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
};

export default Books;
