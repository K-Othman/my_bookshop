// "use client";
// import { useContext, useEffect } from "react";
// import { BooksContext } from "../context/booksContext";

// const Wishlist = () => {
//   const { favBooks, addToFavorites } = useContext(BooksContext);

//   useEffect(() => {
//     addToFavorites();
//   }, []);

//   const deleteBook = (book) => {
//     console.log(book.id);
//   };
//   console.log(favBooks, " <<<<");

//   if (!favBooks || favBooks.length === 0) return <p>No favorite books yet!</p>;

//   return (
//     <main className="container">
//       <div>
//         {favBooks?.map((book) => (
//           <div key={book.id} className="text-center flex justify-around">
//             <div>
//               <img
//                 className="mx-auto h-48 object-contain"
//                 src={book.image}
//                 alt="The Book Cover"
//               />
//               <div className="">
//                 <h2 className="font-bold w-1/2 mx-auto">{book.title}</h2>
//                 <div className="flex justify-center items-center gap-5">
//                   <p>{book.price}</p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <button onClick={() => deleteBook(book)}>X</button>
//               <button className="bg-secondary text-white p-1 rounded-lg px-2">
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div></div>
//     </main>
//   );
// };

// export default Wishlist;

"use client";
import { useContext, useEffect } from "react";
import { BooksContext } from "../context/booksContext";

const Wishlist = () => {
  const { favBooks, addToFavorites } = useContext(BooksContext);

  useEffect(() => {
    addToFavorites();
  }, []);

  const deleteBook = (book) => {
    console.log(book.id);
  };

  if (!favBooks || favBooks.length === 0) return <p>No favorite books yet!</p>;

  return (
    <main className="container">
      <div>
        {favBooks.map((book) => (
          <div key={book.id} className="text-center flex justify-around">
            <div>
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
            <div>
              <button onClick={() => deleteBook(book)}>X</button>{" "}
              {/* 🛠 fixed here */}
              <button className="bg-secondary text-white p-1 rounded-lg px-2">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Wishlist;
