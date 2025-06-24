// ✅ File: src/pages/ImportExport.jsx

import React, { useRef } from "react";

const ImportExport = () => {
  const fileInputRef = useRef();

  const handleExport = () => {
    const data = localStorage.getItem("cashbook_entries");
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "cashbook_backup.json";
    a.click();
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        if (Array.isArray(importedData)) {
          localStorage.setItem("cashbook_entries", JSON.stringify(importedData));
          alert("✅ Import successful! Please refresh to see updated data.");
        } else {
          alert("❌ Invalid file format");
        }
      } catch (err) {
        alert("❌ Failed to import file");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📂 Backup & Restore</h1>

      <div className="space-y-4 max-w-md">
        <button
          onClick={handleExport}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ⬇️ Export Backup
        </button>

        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImport}
            accept="application/json"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current.click()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            📤 Import Backup
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportExport;
