import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <section className="container mx-auto my-5 py-5 bg-third md:text-left text-center">
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
            alt=""
            width={500}
            height={500}
            priority
          />
          {/* <img src={require('/images/la')} alt="" /> */}
        </div>
      </div>
      {/* <div
        className="bg-cover bg-center h-[70vh] md:-mt-15 -mt-9"
        style={{ backgroundImage: "url('/images/home_background.jpg')" }}
      >
        <span className="absolute h-[70vh] w-full bg-black bg-opacity-50"></span>
      </div>
      <div className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
        <div className="text-[#FCFCEA] text-center w-full">
          <div className="md:text-5xl text-3xl">Welcome to</div>
          <h1 className="md:text-8xl text-5xl lette tracking-wider">
            My Bookshop
          </h1>
        </div>
        <div className="mt-5 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search absolute top-[50%] translate-y-[-50%] w- rounded-l-xl ml-2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            className="w-full rounded-3xl py-4 px-2 pl-12 outline-none"
            type="search"
            placeholder="Search Books"
          />
        </div>
      </div> */}
    </section>
  );
};

export default LandingPage;
