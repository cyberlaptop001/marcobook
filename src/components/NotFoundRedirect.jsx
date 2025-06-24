// ✅ File: src/components/NotFoundRedirect.jsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-700">
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-lg mb-4">Redirecting you to the dashboard in 3 seconds...</p>
      <p className="text-sm text-gray-500">If you’re not redirected, click <span onClick={() => navigate("/")} className="text-blue-600 underline cursor-pointer">here</span>.</p>
    </div>
  );
};

export default NotFoundRedirect;
