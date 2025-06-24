// updated – replace the whole file

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-auto border-t">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} <strong>Marcobook</strong>. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-purple-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-purple-600">
            About
          </Link>
          <Link to="/settings" className="hover:text-purple-600">
            Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
