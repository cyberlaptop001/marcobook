// ✅ File: src/pages/ExportData.jsx

import React from "react";
import { saveAs } from "file-saver";

const ExportData = () => {
  const handleExport = () => {
    const entries = JSON.parse(localStorage.getItem("cashbook_entries")) || [];
    const blob = new Blob([JSON.stringify(entries, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "cashbook_backup.json");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📤 Export Data</h1>
      <p className="mb-4 text-gray-700">
        Click the button below to download a backup of your entries as a .json file.
      </p>
      <button
        onClick={handleExport}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download Backup
      </button>
    </div>
  );
};

export default ExportData;
