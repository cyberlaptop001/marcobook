// ✅ File: src/pages/Settings.jsx

import React from "react";

const Settings = () => {
  const clearAllData = () => {
    if (window.confirm("⚠️ Are you sure you want to delete all entries?")) {
      localStorage.removeItem("cashbook_entries");
      alert("🗑️ All entries deleted!");
      window.location.reload();
    }
  };

  const backupData = () => {
    const data = localStorage.getItem("cashbook_entries");
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "cashbook-backup.json";
    link.click();
  };

  const restoreData = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const json = JSON.parse(evt.target.result);
        localStorage.setItem("cashbook_entries", JSON.stringify(json));
        alert("✅ Data restored!");
        window.location.reload();
      } catch (error) {
        alert("❌ Invalid file!");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">⚙️ Settings</h1>

      <div className="space-y-4">
        <button
          onClick={clearAllData}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          🗑️ Clear All Data
        </button>

        <div>
          <button
            onClick={backupData}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            📂 Backup Data
          </button>
        </div>

        <div>
          <label className="block mb-1 font-medium">🔄 Restore from Backup</label>
          <input
            type="file"
            accept=".json"
            onChange={restoreData}
            className="block border px-3 py-2 rounded w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
