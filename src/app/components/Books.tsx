// "use client";
// import { useEffect, useState } from "react";

// interface Book {
//   id: string;
//   title: string;
// }

// interface GoogleBooksResponse {
//     items: Book[];
//   }

// const Books = () => {
//   const [books, setBooks] = useState<Book>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://www.googleapis.com/books/v1/volumes?q=books")
//       .then((res) => res.json())
//       .then((data: GoogleBooksResponse) => {
//         setBooks(data.items);
//         setIsLoading(false);
//       });
//   }, []);

//   if (isLoading) return <p>Loading ...</p>;
//   if (!books) return <p>No Books</p>;
//   console.log(books.items);

//   return (
//     <div>
//       {books.items.map((book) => (
//         <div key={book.id}>{book.title}</div>
//       ))}
//     </div>
//   );
// };

// export default Books;

"use client";
import { useEffect, useState } from "react";

interface Book {
  id: number;
  title: string;
}

// interface GoogleBooksResponse {
//   items: Book[];
// }

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     fetch("https://gutendex.com/books/?search=pride+and+prejudice")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);

  //         setBooks(data.results || []); // Set items to an empty array if undefined
  //         setIsLoading(false);
  //       });
  //     //   .catch(err){
  //     //     console.error("Error fetching data", err)

  //     //   }
  //   }, []);

  useEffect(() => {
    fetch("https://gutendex.com/books/?search=pride+and+prejudice")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data); // Log the entire response to see its structure
        setBooks(data.results); // Assign the "results" array to the books state
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading ...</p>;
  if (!books.length) return <p>No Books</p>;
  console.log(books);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Books;
