import React from "react";

function SearchBox() {
  return (
    <>
      <section>
        <div className="flex items-center justify-center my-10 lg:w-[40%] mx-auto">
          <input
            placeholder="Select from Categories"
            className="border py-2 px-4 rounded-l-md md:w-[60%]"
          />
          {/* <button className="bg-gradient-to-r from-purple-700 via-orange-700 to-red-800 text-white px-5 py-2 border rounded-r-md md:w-[20%]">
            Search
          </button> */}
          <select
            name="categories"
            id="categories"
            className="uppercase font-semibold border-2 rounded-r-md py-2.5 px-4 bg-red-700/80 text-white"
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
