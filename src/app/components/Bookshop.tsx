import Books from "./Books";

const Bookshop = () => {
  return (
    <section className="container md:mx-auto my-7 mx-3">
      <h2 className="text-3xl md:text-5xl font-bold border-b-2 border-pink-500 w-[70%] md:pb-5 pb-3">
        Bookshop
      </h2>
      <p>
        Browse through our specially curated online bookshop. Featuring titles
        from British Library publishing, new titles, chart toppers and beautiful
        classics.
      </p>
      <div className="mt-6 flex justify-end gap-4">
        <div>
          <select className="px-2 py-1 w-44" name="cars" id="cars">
            <option value="all bookshop">All Bookshop</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <select className="px-2 py-1 w-44" name="cars" id="cars">
            <option value="new to old">Date: New to Old</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <Books />
    </section>
  );
};

export default Bookshop;
