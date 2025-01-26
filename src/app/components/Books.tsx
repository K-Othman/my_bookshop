import {
  BookmarkIcon,
  BookmarkSlashIcon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useContext } from "react";
import { BooksContext } from "../context/booksContext";
import { UserAuth } from "../context/AuthContext";

/* eslint-disable @next/next/no-img-element */

interface Book {
  id: string;
  title: string;
  image: string;
  price: string;
  published_date: number;
  author: string;
}

interface BooksProps {
  books: Book[];
}

const Books: React.FC<BooksProps> = ({ books }) => {
  const { addToFavorites } = useContext(BooksContext);
  const { user } = UserAuth();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-center">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <Link href={`/books/${book.id}`} className="block">
            <div className="text-center">
              <img
                className="mx-auto h-48 object-contain mb-4"
                src={book.image}
                alt="The Book Cover"
              />
              <h2 className="font-bold text-lg text-gray-800 mb-2">
                {book.title}
              </h2>
              <p className="text-secondary font-semibold">£{book.price}</p>
            </div>
          </Link>
          <div className="flex justify-center items-center gap-3 mt-4">
            <button
              className="bg-secondary text-white px-4 py-2 rounded-lg shadow hover:bg-secondary-dark transition-colors"
              onClick={() => {
                console.log("Add to Cart:", book);
              }}
            >
              Add To Cart
            </button>

            {/* The wishlist Button */}

            {!user ? (
              <div className="relative">
                <p className="bg-amber-400 text-white p-1 rounded-lg absolute -top-10 right-0 w-56">
                  You Need To Sign In First.
                </p>
                <button
                  className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition-colors"
                  // onClick={() => {
                  //   addToFavorites(book);
                  //   console.log("Added to Favorites:", book);
                  // }}
                >
                  <BookmarkIcon className="h-5 w-5 text-secondary" />
                </button>
              </div>
            ) : (
              <button
                className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition-colors"
                onClick={() => {
                  addToFavorites(book);
                  console.log("Added to Favorites:", book);
                }}
              >
                <BookmarkIcon className="h-5 w-5 text-secondary" />
              </button>
            )}
            {/* <button
              className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition-colors"
              onClick={() => {
                addToFavorites(book);
                console.log("Added to Favorites:", book);
              }}
            >
              <BookmarkIcon className="h-5 w-5 text-secondary" />
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
