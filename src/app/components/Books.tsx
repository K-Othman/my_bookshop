import {
  BookmarkIcon,
  BookmarkSlashIcon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { useParams } from "next/navigation";

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
                  <div className="w-5 h-5">
                    <BookmarkIcon />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Books;
