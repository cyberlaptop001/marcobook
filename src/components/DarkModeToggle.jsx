// ✅ File: src/components/DarkModeToggle.jsx
import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("marcobook_theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("marcobook_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("marcobook_theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded shadow hover:scale-105 transition"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
