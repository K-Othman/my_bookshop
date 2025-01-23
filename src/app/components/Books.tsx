import {
  BookmarkIcon,
  BookmarkSlashIcon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { BooksContext } from "../context/booksContext";
import { log } from "util";

/* eslint-disable @next/next/no-img-element */

interface Book {
  id: string;
  title: string;
  image: string;
  price: string;
}

interface BooksProps {
  books: Book[];
}

const Books: React.FC<BooksProps> = ({ books }) => {
  const { addToFavorites } = useContext(BooksContext);

  return (
    // <div className="grid grid-cols-2 gap-8 md:grid-cols-3 text-center">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 text-center items-center align-middle">
      {books.map((book) => (
        <div key={book.id} className="">
          <Link href={`/books/${book.id}`} className="text-center">
            <div className="text-center">
              <img
                className="mx-auto h-48 object-contain"
                src={book.image}
                alt="The Book Cover"
              />
              <div className="">
                <h2 className="font-bold w-1/2 mx-auto">{book.title}</h2>
                <div className="flex justify-center items-center gap-5">
                  <p>{book.price}</p>
                </div>
              </div>
            </div>
          </Link>
          <div className="flex justify-center items-center gap-1">
            <div>
              <button className="bg-secondary text-white p-1 rounded-lg px-2">
                Add To Cart
              </button>
            </div>
            <button
              className="w-7 p-1 bg-secondary text-white border m-1 rounded-full"
              onClick={() => {
                addToFavorites(book);
                console.log(book);
              }}
            >
              <BookmarkIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
