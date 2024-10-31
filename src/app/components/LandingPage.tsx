const LandingPage = () => {
  return (
    <section className="h-screen max-w-screen mx-auto">
      <div
        className="bg-cover bg-center h-[70vh] -mt-9"
        style={{ backgroundImage: "url('/images/home_background.jpg')" }}
      >
        <span className="absolute h-full w-full bg-black bg-opacity-50"></span>
      </div>
      <div className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
        <div className="text-[#FCFCEA] text-center w-full">
          <div className="text-5xl">Welcome to</div>
          <h1 className="text-8xl lette tracking-wider">My Bookshop</h1>
        </div>
        <div className="mt-5">
          <input
            className="w-full rounded-3xl py-4 px-2"
            type="search"
            placeholder="Search Books"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
