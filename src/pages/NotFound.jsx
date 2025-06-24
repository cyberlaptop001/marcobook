// ✅ Final version – already confirmed

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-2">Oops! Page not found.</p>
      <p className="mb-6 text-gray-600">
        The page you are looking for might have been removed or doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        🔙 Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
