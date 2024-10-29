import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">Bookshop</Link>
        <div className="space-x-4">
          <Link href="/books">Books</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
