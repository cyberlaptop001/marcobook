// ✅ File: src/components/SearchBar.jsx (Updated – fix applied)

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
