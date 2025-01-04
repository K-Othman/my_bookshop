import Link from "next/link";

const Explore = () => {
  return (
    <section className="bg-primary flex flex-col items-center py-10 text-center">
      <div className="container flex flex-col items-center py-10 text-center">
        <h3 className="text-4xl font-bold mt-5 mb-2">
          Explore Features of Our Bookshop
        </h3>
        <p className="mb-9">
          Explore our curated collection, handpicked for book lovers like you.
        </p>
        <img
          src="/images/explore.jpeg"
          className="rounded-lg"
          alt="the explore image"
        />
        <Link
          href={"/books"}
          className="mt-8 mb-10 bg-secondary text-third px-6 py-4 rounded-full font-bold"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
};

export default Explore;
