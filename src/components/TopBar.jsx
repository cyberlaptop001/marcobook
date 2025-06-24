// updated – replace the whole file

import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const TopBar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white shadow-sm dark:bg-gray-800">
      <h1 className="text-xl font-semibold dark:text-white">Marcobook 💼</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default TopBar;
