import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <form className="flex items-center space-x-2 p-2 bg-white dark:bg-gray-800 shadow-md rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus-within:scale-105">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered w-full max-w-xs rounded-full bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300"
      >
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchInput;
