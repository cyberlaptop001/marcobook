// updated – replace the whole file

import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">📘 MarcoBook</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
