// import Link from "next/link";

import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="container mx-auto bg-third">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="font-bold">K_Bookshop</h1>
        </Link>
        <div className="flex gap-3">
          <Link href={"/"} className="nav">
            Home
          </Link>
          <Link href={"/"} className="nav">
            Shop Books
          </Link>
          <Link href={"/"} className="nav">
            Contact Us
          </Link>
          <Link href={"/"} className="nav">
            Sign Up
          </Link>
          <Link href={"/"} className="py-4 text-secondary">
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
        </div>
      </div>
      {/* <div className="px-3 md:px-0 container md:mx-auto text-[#FCFCEA] flex justify-between items-center">
        <Link
          href="/"
          className="text-[#FCFCEA] hover:text-gray-300 transition-all font-bold transform hover:scale-110"
        >
          My Bookshop
        </Link>
        <div className="space-x-4 ">
          <Link
            className="text-[#FCFCEA] hover:text-gray-300 transition-all"
            href="/books"
          >
            Books
          </Link>
          <Link
            className="text-[#FCFCEA] hover:text-gray-300 transition-all"
            href="/cart"
          >
            Cart
          </Link>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
