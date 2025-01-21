"use client";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

export interface Book {
  id: string;
  title: string;
  image: string;
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
  const [favBooks, setFavBooks] = useState<Book[]>();
  const [isLoading, setIsLoading] = useState(true);
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

  const favouritBooks = () => {};

  if (isLoading) return <p>Loading ...</p>;
  if (!books.length) return <p>No Books</p>;

  return (
    <BooksContext.Provider value={{ books, isLoading }}>
      {children}
    </BooksContext.Provider>
  );
};
