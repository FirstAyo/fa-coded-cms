import React, { useState } from "react";

function SearchBox() {
  const [changeOption, setChangeOption] = useState("All Projects");

  return (
    <>
      <section>
        <div className="flex items-center justify-center flex-col gap-3 my-10 w-[95%] lg:w-[60%] mx-auto">
          <input
            placeholder={changeOption}
            className="border border-[#3d5168] py-2 px-4 rounded-md w-[100%] md:w-[60%] uppercase"
          />
          {/* <button className="bg-gradient-to-r from-purple-700 via-orange-700 to-red-800 text-white px-5 py-2 border rounded-r-md md:w-[20%]">
            Search
          </button> */}
          <select
            name="categories"
            id="categories"
            title="categories"
            // value={changeOption}
            className="uppercase font-semibold rounded-md py-2 px-10 bg-[#3d5168] text-white"
            onChange={(e) => setChangeOption(e.target.value)}
          >
            <option value="All Projects">All Projects</option>
            <option value="HTML & CSS">HTML & CSS</option>
            <option value="REACT JS">REACT JS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Tailwind CSS">Tailwind CSS</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default SearchBox;
