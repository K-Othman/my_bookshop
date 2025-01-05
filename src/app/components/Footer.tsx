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
      <div className="flex justify-between md:flex-row flex-col ml-6 container md:mx-auto my-16">
        <div className="mb-6">
          <h5 className="font-bold text-xl">K_Bookshop</h5>
          <p className="text-xs text-[#41404055]">© 2025 K_Bookshop</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-btween gap-10">
          <div>
            <p className="font-bold">Product</p>
            <p className="my-3">Overview</p>
            <p>Customers</p>
          </div>
          <div>
            <p className="font-bold">Company</p>
            <p className="my-3">About</p>
            <p>Jobs</p>
          </div>
          <div>
            <p className="font-bold">Support</p>
            <p className="my-3">FAQs</p>
            <p>Contact us</p>
          </div>
          <div>
            <p className="font-bold">Legal</p>
            <p className="my-3">Terms</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
