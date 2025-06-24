// ✅ Utility for exporting entries to CSV
import { saveAs } from "file-saver";

export const exportEntriesToCSV = (entries, filename = "transactions.csv") => {
  if (!entries || entries.length === 0) return;

  const headers = ["Type", "Amount", "Description", "Date"];
  const rows = entries.map((e) => [e.type, e.amount, e.description, e.date]);

  const csvContent = [headers, ...rows]
    .map((row) => row.map((cell) => `"${cell}"`).join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, filename);
};
