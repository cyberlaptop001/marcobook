// updated – replace the whole file

import React from "react";
import { saveAs } from "file-saver";

const ExportButton = ({ entries }) => {
  const handleExport = () => {
    if (!entries.length) return alert("No data to export.");
    const headers = ["Type", "Amount", "Description", "Date"];
    const rows = entries.map((e) => [
      e.type,
      e.amount,
      e.description,
      e.date,
    ]);
    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    saveAs(blob, "marcobook_export.csv");
  };

  return (
    <button
      onClick={handleExport}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      📤 Export CSV
    </button>
  );
};

export default ExportButton;
