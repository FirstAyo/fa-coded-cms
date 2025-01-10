import React from "react";

function SearchBox() {
  return (
    <>
      <section>
        <div className="flex items-center justify-center flex-col gap-3 md:gap-0 md:flex-row my-10 w-[95%] lg:w-[50%] mx-auto">
          <input
            placeholder="Select from Categories"
            className="border border-red-700 py-2 px-4 rounded-l-md w-[100%] md:w-[60%]"
          />
          {/* <button className="bg-gradient-to-r from-purple-700 via-orange-700 to-red-800 text-white px-5 py-2 border rounded-r-md md:w-[20%]">
            Search
          </button> */}
          <select
            name="categories"
            id="categories"
            className="uppercase font-semibold border border-red-700 rounded-r-md py-2.5 px-4 bg-red-700/80 text-white"
          >
            <option value="volvo">All Projects</option>
            <option value="volvo">HTML & CSS</option>
            <option value="saab">REACT JS</option>
            <option value="opel">JavaScript</option>
            <option value="audi">Tailwind CSS</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default SearchBox;
