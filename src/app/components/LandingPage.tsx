import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <section>
      <div className="container mx-auto my-5 py-5 bg-third md:text-left text-center">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="max-w-[500px]">
            <h5 className="text-secondary font-bold mt-5">
              #1 on readers&apos; choice
            </h5>
            <p className="md:text-6xl text-3xl font-bold mb-5">
              Explore Worlds Within Pages
            </p>
            <p className="text-sm">
              K_Bookshop: Where every book is a new adventure waiting for you.
            </p>
            <input
              className="w-1/2 block py-4 pl-1 mt-7 mb-7 outline-none border mx-auto md:ml-0"
              type="search"
              placeholder="Search Books"
            />
            <Link
              href="/"
              className="bg-secondary  text-third py-4 px-4 rounded-3xl font-bold"
            >
              Sign up today
            </Link>
          </div>
          <div>
            <Image
              src={"/images/landingPage.jpeg"}
              alt="the main landing page image"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
      {/* The Second Part Of The Landing Page */}
      <div className="text-center mx-auto bg-secondary text-third py-7">
        <div>
          <p className="font-bold md:text-xl">
            The #1 Online Bookshop Experience
          </p>
          <p>As recognized by top literary critics and book bloggers.</p>
        </div>
        <div className="flex justify-center md:gap-9 gap-2 my-4">
          <img
            className="rounded md:w-24 md:h-24 w-16 h-16 object-cover"
            src="/images/landing2.jpeg"
            alt="Landing Image 2"
          />
          <img
            className="rounded md:w-24 w-16 md:h-24 h-16 object-cover"
            src="/images/landing3.jpeg"
            alt="Landing Image 3"
          />
          <img
            className="rounded md:w-24 w-16 md:h-24 h-16 object-cover"
            src="/images/landing4.jpeg"
            alt="Landing Image 4"
          />
          <img
            className="rounded md:w-24 w-16 md:h-24 h-16 object-cover"
            src="/images/landing5.jpeg"
            alt="Landing Image 5"
          />
          <img
            className="rounded md:w-24 w-16 md:h-24 h-16 object-cover"
            src="/images/landing6.jpeg"
            alt="Landing Image 6"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
