"use client";

import { createContext, FC, ReactNode, useEffect, useState } from "react";

export interface Book {
  id: string;
  title: string;
  image: string;
  price: string;
  published_date: number;
  author: string;
}

export interface IBooksContext {
  books: Book[];
  isLoading: boolean;
  addToFavorites: (book: Book) => void;
  favBooks: Book[];
}

type Props = {
  children: ReactNode;
};

export const BooksContext = createContext<IBooksContext>({} as IBooksContext);

export const BooksContextProvider: FC<Props> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [favBooks, setFavBooks] = useState<Book[]>([]);
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
  }, [baseUrl]);

  // const addToFavorites = (book: Book) => {
  //   setFavBooks((prevBooks) => {
  //     if (prevBooks.some((favBook) => favBook.id === book.id)) {
  //       return prevBooks;
  //     }
  //     return [...prevBooks, book];
  //   });
  // };
  const addToFavorites = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${baseUrl}/books/wishlist`);
      const data = await res.json();

      if (data) {
        setFavBooks(data);
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      setIsLoading(false);
    }
  };

  if (isLoading) return <p>Loading ...</p>;
  if (!books.length) return <p>No Books</p>;

  return (
    <BooksContext.Provider
      value={{ books, isLoading, addToFavorites, favBooks }}
    >
      {children}
    </BooksContext.Provider>
  );
};
