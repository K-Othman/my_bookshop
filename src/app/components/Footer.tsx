import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <div className="bg-secondary text-third text-center py-10 pb-20">
        <h4 className="text-3xl font-bold mt-5 mb-2">
          Join Our Bookshop Community
        </h4>
        <p className="mb-7">
          Stay in the loop with book releases and special deals.
        </p>
        <Link
          href={"/signUp"}
          className=" bg-third text-black px-6 py-4 rounded-full font-bold"
        >
          Sign up
        </Link>
      </div>
      <div></div>
    </section>
  );
};

export default Footer;
