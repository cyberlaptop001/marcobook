// ✅ src/components/SearchBar.jsx

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // ✅ this line is critical

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value); // optional callback if passed
    }
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="w-full p-2 rounded border"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
