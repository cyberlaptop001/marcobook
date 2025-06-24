// updated – replace the whole file

import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="🔍 Search transactions..."
      className="border px-3 py-2 rounded w-full sm:w-1/2"
    />
  );
};

export default SearchBar;
