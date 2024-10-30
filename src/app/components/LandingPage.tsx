const LandingPage = () => {
  return (
    <section className="h-screen max-w-screen mx-auto">
      <div
        className="bg-cover bg-center h-screen -mt-9"
        style={{ backgroundImage: "url('/images/home_background.jpg')" }}
      >
        <span className="absolute h-full w-full bg-black bg-opacity-50"></span>
      </div>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <h1 className="text-[#FCFCEA]">
          Welcome To <span>My Bookshop</span>{" "}
        </h1>
        <input type="search" placeholder="Search Books" />
      </div>
    </section>
  );
};

export default LandingPage;
