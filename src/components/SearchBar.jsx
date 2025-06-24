// ✅ File: src/components/SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="w-full p-2 rounded border"
      value={term}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
