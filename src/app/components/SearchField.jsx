import React from "react";

const SearchField = () => {
  return (
    <form className="max-w-xl mx-auto font-square721-normal mb-4 ">
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 ps-8 text-sm text-white border-[2px] border-white rounded-3xl bg-transparent "
          placeholder="I want to create a draft for a presentation"
          required
        />
        <button
          type="submit"
          className=" absolute end-2 bottom-[.5rem] text-black rounded-3xl bg-white w-2xl hover:bg-blue-800 font-medium  text-[1.03em] px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchField;
