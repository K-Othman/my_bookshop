import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
      <div className="container z-10 text-[#FCFCEA] flex justify-between items-center absolute">
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
