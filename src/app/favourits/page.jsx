"use client";
import { useContext } from "react";
import { BooksContext } from "../context/booksContext";

const page = () => {
  const { favBooks } = useContext(BooksContext);
  console.log(favBooks);
  if (!favBooks) return <p>No favorite books yet!</p>;

  return (
    <main>
      {favBooks?.map((book) => (
        <div key={book.id} className="text-center">
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
      ))}
    </main>
  );
};

export default page;
