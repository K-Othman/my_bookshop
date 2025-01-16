"use client";
import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface Book {
  id: string;
  title: string;
  image: string;
  url: string;
  price: string;
}

export interface IBooksContext {
  books: Book[];
  isLoading: boolean;
}

type Props = {
  children: ReactNode;
};

export const BooksContext = createContext<IBooksContext>({} as IBooksContext);

export const BooksContextProvider: FC<Props> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  //   const [filter, setFilter] = useState<string>("all");
  const baseUrl = `http://localhost:8080/api`;

  useEffect(() => {
    fetch(`${baseUrl}/books`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        if (data) {
          setBooks(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  //   const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     setFilter(event.target.value);
  //   };

  //   const filterBooks = (): Book[] => {
  //     if (filter === "low-to-high") {
  //       return [...books].sort(
  //         (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
  //       );
  //     }
  //     if (filter === "high-to-low") {
  //       return [...books].sort(
  //         (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
  //       );
  // }
  //     return books;
  //   };

  if (isLoading) return <p>Loading ...</p>;
  if (!books.length) return <p>No Books</p>;

  return (
    <BooksContext.Provider value={{ books, isLoading }}>
      {children}
    </BooksContext.Provider>
  );
};
