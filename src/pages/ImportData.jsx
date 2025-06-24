// ✅ File: src/pages/ImportData.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const ImportData = () => {
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        if (!Array.isArray(importedData)) {
          throw new Error("Invalid format");
        }

        const confirm = window.confirm(
          "This will overwrite your current entries. Continue?"
        );
        if (confirm) {
          localStorage.setItem("cashbook_entries", JSON.stringify(importedData));
          alert("✅ Entries imported successfully!");
          navigate("/");
        }
      } catch (err) {
        alert("❌ Failed to import data. Make sure the file format is correct.");
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📥 Import Data</h1>
      <p className="mb-4 text-gray-700">
        Upload a previously exported <code>.json</code> file to restore your data.
      </p>
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="border px-3 py-2 rounded"
      />
    </div>
  );
};

export default ImportData;
