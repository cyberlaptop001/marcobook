// updated – replace the whole file

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-4">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
