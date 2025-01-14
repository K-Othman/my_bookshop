// "use client";
// import { log } from "console";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// interface Book {
//   id: string;
//   title: string;
//   image: string;
//   url: string;
//   price: string;
// }

// const page = () => {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const { id } = useParams();

//   // useEffect(() => {
//   //   fetch(`http://localhost:8080/api/books/${id}`)
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       console.log("book response:", data);
//   //       if (data) {
//   //         setBooks(data);
//   //       }
//   //       setIsLoading(false);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching data:", error);
//   //       setIsLoading(false);
//   //     });
//   // }, []);

//   useEffect(() => {
//     fetch(`http://localhost:8080/api/books/${id}`).then((res) => res.json());
//   }, []);

//   console.log(id);

//   return <main>LandingPage</main>;
// };

// export default page;

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  price: string;
  published_date: string;
  description: string;
}

interface BookPageProps {
  book: Book | null;
}

const BookPage: React.FC<BookPageProps> = ({ book }) => {
  const router = useRouter();

  if (!book) {
    return <p className="text-center text-red-500">Book not found.</p>;
  }

  return (
    <div className="container mx-auto my-10 p-4">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-64 h-64 object-contain mb-6 md:mb-0 md:mr-10"
          src={book.image}
          alt={book.title}
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
          <p className="text-gray-600 text-lg">by {book.author}</p>
          <p className="text-xl text-green-600 font-bold mt-4">
            Price: {book.price}
          </p>
          <p className="text-gray-500 mt-2">Published: {book.published_date}</p>
          <p className="text-gray-700 mt-6">{book.description}</p>
          <button
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => router.push("/books")}
          >
            Back to Books
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  try {
    const res = await fetch(`http://localhost:8080/api/books/${id}`);
    if (!res.ok) {
      return { notFound: true };
    }
    const book = await res.json();

    return {
      props: { book },
    };
  } catch (error) {
    console.error("Error fetching book:", error);
    return {
      props: { book: null },
    };
  }
};

export default BookPage;
