import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import AddEntry from "./pages/AddEntry";
import EditEntry from "./pages/EditEntry"; // Correctly placed
<Route path="*" element={<NotFound />} />

const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderPage = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "transactions":
        return <Transactions />;
      case "add":
        return <AddEntry />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 bg-gray-50 min-h-screen">{renderPage()}</main>
    </div>
  );
};

export default App;
