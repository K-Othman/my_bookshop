const LandingPage = () => {
  return (
    <section className="h-[70vh] mx-auto">
      <div
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
      </div>
    </section>
  );
};

export default LandingPage;
