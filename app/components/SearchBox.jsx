import React from "react";

function SearchBox() {

  return (
    <>
      <section>
        <div className="flex items-center justify-center my-10 w-[60%] mx-auto">
          <input
            placeholder="Search Blog"
            className="border py-2 px-4 rounded-l-md md:w-[60%]"
          />
          <button className="bg-gradient-to-r from-purple-700 via-orange-700 to-red-800 text-white px-5 py-2 border rounded-r-md md:w-[20%]">
            Search
          </button>
        </div>

      </section>
    </>
  );
}

export default SearchBox;
