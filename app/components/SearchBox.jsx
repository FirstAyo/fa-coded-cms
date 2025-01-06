import React from "react";

function SearchBox() {
  const homepageText = "I build innovative solutions with each line of <code>";
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

        <div className="lg:w-[70%] mx-auto font-mono">
          <h2 className="bg-gradient-to-r from-purple-700 via-orange-700 to-red-800 bg-clip-text text-transparent text-center text-2xl md:text-3xl lg:text-4xl font-bold px-1 tracking-wide leading-normal lg:leading-normal pb-5">
            {homepageText}
          </h2>
        </div>
      </section>
    </>
  );
}

export default SearchBox;
