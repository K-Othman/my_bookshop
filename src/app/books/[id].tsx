import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Book {
  id: string;
  title: string;
  image: string;
  url: string;
  price: string;
}

const page = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/books/${id}`)
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

  return <main>LandingPage</main>;
};

export default page;
