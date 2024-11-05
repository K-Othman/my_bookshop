import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="z-10 relative">
      <div className="px-3 md:px-0 container md:mx-auto text-[#FCFCEA] flex justify-between items-center">
        <Link
          href="/"
          className="text-[#FCFCEA] hover:text-gray-300 transition-all font-bold"
        >
          My Bookshop
          {/* <Image
            src={"/images/logo.webp"}
            alt="My Bookshop Logo"
            width={50}
            height={50}
          /> */}
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
      </div>
    </nav>
  );
};

export default Navbar;
