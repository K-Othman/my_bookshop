"use client";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useContext } from "react";
import { BooksContext } from "../context/booksContext";

const Navbar: React.FC = () => {
  const { user, logOut } = UserAuth();
  const { isLoading } = useContext(BooksContext);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="container mx-auto bg-third relative">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link href={"/"}>
          <h1 className="font-bold">K_Bookshop</h1>
        </Link>
        <div className="flex gap-3">
          <Link href={"/"} className="nav">
            Home
          </Link>
          <Link href={"/books"} className="nav">
            Shop Books
          </Link>
          <Link href={"/contactUs"} className="nav">
            Contact Us
          </Link>
          {isLoading ? (
            <p>Loading...</p>
          ) : !user ? (
            <Link href={"/login"} className="nav">
              Log in
            </Link>
          ) : (
            <div className="flex items-center gap-1">
              <button className="nav" onClick={handleSignOut}>
                Sign Out
              </button>
              {/* <p className=" text-xs absolute -right-16 top-2"> */}
              <p className=" text-xs ">
                Welcome,
                <br />
                <span className="font-bold">
                  {user.displayName?.split(" ")[0]}
                </span>
              </p>
            </div>
          )}
          <Link href={"/cart"} className="py-4 text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-bag"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </Link>
          <Link
            href={"/books/wishlist"}
            className=" w-6 text-secondary my-auto"
          >
            <BookmarkIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
