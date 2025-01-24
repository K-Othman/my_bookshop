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

  const dateFormatted = book.published_date
    ? new Date(book.published_date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown";

  return (
    <main className="container mx-auto md:h-[60vh] text-center p-4 flex justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <img
          src={book.image}
          alt={book.title}
          className="w-64 h-64 object-contain mb-6 md:mb-0 md:mr-10"
        />
        <div className="flex-1 flex-col m">
          <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
          <p>Author : {book.author}</p>
          <p>Published at : {dateFormatted}</p>
          <p className="text-xl text-green-600 font-bold mt-4">
            Price: £{book.price}
          </p>
        </div>
      </div>
    </main>
  );
};

export default bookPage;

// "use client";
// import { BooksContext } from "@/app/context/booksContext";
// import { useParams } from "next/navigation";
// import { useContext } from "react";

// const BookPage = () => {
//   const { books } = useContext(BooksContext);
//   const { id } = useParams();

//   const book = books?.find((b) => id === String(b.id));

//   if (!book) {
//     return (
//       <div className="flex justify-center items-center min-h-[calc(100% - 356px)]">
//         <p className="text-red-500 text-2xl font-bold">Book not found.</p>
//       </div>
//     );
//   }

//   const dateFormatted = book.published_date
//     ? new Date(book.published_date).toLocaleDateString("en-GB", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       })
//     : "Unknown";

//   return (
//     <main className="container mx-auto my-10 p-6 flex justify-center h-[calc(100% - 356px)]">
//       <div className="flex flex-col md:flex-row items-center gap-8 bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-4xl">
//         {/* Book Image */}
//         <div className="flex-shrink-0">
//           <img
//             src={book.image}
//             alt={book.title}
//             className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-lg shadow-md"
//           />
//         </div>

//         {/* Book Details */}
//         <div className="flex flex-col items-start text-left">
//           <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
//             {book.title}
//           </h1>
//           <p className="text-lg text-gray-600 mb-2">
//             <span className="font-semibold text-gray-800">Author:</span>{" "}
//             {book.author}
//           </p>
//           <p className="text-lg text-gray-600 mb-2">
//             <span className="font-semibold text-gray-800">Published at:</span>{" "}
//             {dateFormatted}
//           </p>
//           <p className="text-2xl font-bold text-green-600 mt-4">
//             Price: £{book.price}
//           </p>
//           <button className="mt-6 px-6 py-2 text-white bg-secondary rounded-lg hover:bg-secondary-dark transition duration-300 shadow-md">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default BookPage;
