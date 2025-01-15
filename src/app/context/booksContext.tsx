import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { createContext } from "vm";
import { Book } from "../components/Bookshop";

export const BooksContext = createContext();

type Props = {
  children: ReactNode;
};

export const BooksContextProvider: FC<Props> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
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

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const filterBooks = (): Book[] => {
    if (filter === "low-to-high") {
      return [...books].sort(
        (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
      );
    }
    if (filter === "high-to-low") {
      return [...books].sort(
        (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
      );
    }
    return books;
  };

  if (isLoading) return <p>Loading ...</p>;
  if (!books.length) return <p>No Books</p>;

  const BoooksContextValue = useMemo(
    () => ({
      books,
      isLoading,
      filter,
    }),
    [books, isLoading, filter]
  );

  return (
    <BooksContext.Provider value={BoooksContextValue}>
      {children}
    </BooksContext.Provider>
  );
};
