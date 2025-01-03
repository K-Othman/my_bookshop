import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="container mx-auto bg-third">
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
          <Link href={"/signUp"} className="nav">
            Sign Up
          </Link>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
