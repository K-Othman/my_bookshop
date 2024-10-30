const LandingPage = () => {
  return (
    <section className="container bg-neutral-500 h-screen mx-auto ">
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/images/home_background.jpg')" }}
      ></div>
      <div className="mx-auto">
        <h1>Welcome To My Bookshop</h1>
        <input type="search" placeholder="Search Books" />
      </div>
    </section>
  );
};

export default LandingPage;
