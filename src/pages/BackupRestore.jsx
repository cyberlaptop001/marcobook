// ✅ Already added – final version for backup/restore page

import React from "react";

const BackupRestore = () => {
  const handleBackup = () => {
    const data = localStorage.getItem("cashbook_entries");
    if (!data) return alert("⚠️ No data to backup.");
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "cashbook_backup.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleRestore = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        if (!Array.isArray(json)) throw new Error("Invalid format");
        localStorage.setItem("cashbook_entries", JSON.stringify(json));
        alert("✅ Backup restored successfully!");
      } catch {
        alert("❌ Invalid backup file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📂 Backup & Restore</h1>

      <div className="space-y-6">
        <div>
          <button
            onClick={handleBackup}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            📤 Backup Data
          </button>
        </div>

        <div>
          <label className="block mb-2 font-medium">📥 Restore from File</label>
          <input
            type="file"
            accept=".json"
            onChange={handleRestore}
            className="border px-3 py-2 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default BackupRestore;
