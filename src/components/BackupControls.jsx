// updated – replace the whole file

import React from "react";

const BackupControls = () => {
  const handleBackup = () => {
    const data = localStorage.getItem("cashbook_entries");
    if (!data) return alert("No data to backup.");
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "marcobook-backup.json";
    link.click();
  };

  const handleRestore = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (!Array.isArray(parsed)) throw new Error("Invalid data");
        localStorage.setItem("cashbook_entries", JSON.stringify(parsed));
        alert("✅ Backup restored successfully. Reloading...");
        window.location.reload();
      } catch {
        alert("❌ Failed to restore. Invalid file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex gap-3 flex-wrap">
      <button
        onClick={handleBackup}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        📂 Backup
      </button>

      <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        🔄 Restore
        <input type="file" accept=".json" onChange={handleRestore} hidden />
      </label>
    </div>
  );
};

export default BackupControls;
