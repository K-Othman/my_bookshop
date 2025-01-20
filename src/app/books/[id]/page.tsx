"use client";
import { BooksContext } from "@/app/context/booksContext";
import { useParams } from "next/navigation";
import { useContext } from "react";

const bookPage = () => {
  const { books } = useContext(BooksContext);
  const { id } = useParams();

  const book = books?.find((b) => id === String(b.id));

  if (!book) {
    return <p className="text-center text-red-500">Book not found.</p>;
  }

  return (
    <main className="container mx-auto my-10 p-4">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={book.image}
          alt={book.title}
          className="w-64 h-64 object-contain mb-6 md:mb-0 md:mr-10"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl text-green-600 font-bold mt-4">
            Price: £{book.price}
          </p>
        </div>
      </div>
    </main>
  );
};

export default bookPage;
