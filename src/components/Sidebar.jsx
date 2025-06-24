import React from "react";
import { FaHome, FaPlus, FaList, FaMoon, FaSun } from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <aside className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white w-64 h-screen shadow-lg p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6">📓 MarcoBook</h2>
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded hover:bg-purple-100 dark:hover:bg-gray-800 ${
              activeTab === "dashboard" ? "bg-purple-100 dark:bg-gray-800" : ""
            }`}
          >
            <FaHome /> Dashboard
          </button>

          <button
            onClick={() => setActiveTab("add")}
            className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded hover:bg-purple-100 dark:hover:bg-gray-800 ${
              activeTab === "add" ? "bg-purple-100 dark:bg-gray-800" : ""
            }`}
          >
            <FaPlus /> Add Entry
          </button>

          <button
            onClick={() => setActiveTab("transactions")}
            className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded hover:bg-purple-100 dark:hover:bg-gray-800 ${
              activeTab === "transactions" ? "bg-purple-100 dark:bg-gray-800" : ""
            }`}
          >
            <FaList /> Transactions
          </button>
        </nav>
      </div>

      <div className="pt-6 border-t dark:border-gray-700">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <FaSun className="block dark:hidden" />
          <FaMoon className="hidden dark:block" />
          Toggle Theme
        </button>
        <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
          Made with ❤️ by Badshah Bhai
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
