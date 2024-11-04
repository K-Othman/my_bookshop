import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className=" container z-10 relative">
      <div className="mx-2 text-[#FCFCEA] flex justify-between items-center">
        <Link href="/">My Bookshop</Link>
        <div className="space-x-4">
          <Link href="/books">Books</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
