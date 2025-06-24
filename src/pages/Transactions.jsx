// ✅ File: src/pages/Transactions.jsx
import SearchBar from "../components/SearchBar";

<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
import { exportEntriesToCSV } from "../utils/csvExport";

const exportToCSV = () => exportEntriesToCSV(entries, "transactions.csv");

import { saveAs } from "file-saver";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cashbook_entries")) || [];
    setEntries(data.reverse());
  }, []);

  const deleteEntry = (index) => {
    if (!window.confirm("Are you sure you want to delete this entry?")) return;
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
    localStorage.setItem("cashbook_entries", JSON.stringify([...updated].reverse()));
  };

  const editEntry = (index) => {
    const actualIndex = entries.length - 1 - index;
    localStorage.setItem("edit_index", actualIndex);
    navigate("/edit");
  };

  const exportToCSV = () => {
    const headers = ["Type", "Amount", "Description", "Date"];
    const rows = entries.map((e) => [e.type, e.amount, e.description, e.date]);
    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "transactions.csv");
  };

  const filteredEntries = entries.filter((e) =>
    e.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📜 All Transactions</h1>

      {entries.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="🔍 Search..."
            className="border px-3 py-2 rounded w-full sm:w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            onClick={exportToCSV}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            📤 Export CSV
          </button>
        </div>
      )}

      {filteredEntries.length === 0 ? (
        <p className="text-gray-600">No transactions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded shadow">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 border-b">#</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntries.map((entry, i) => (
                <tr
                  key={i}
                  className={entry.type === "income" ? "bg-green-50" : "bg-red-50"}
                >
                  <td className="py-2 px-4 border-b">{i + 1}</td>
                  <td className="py-2 px-4 border-b capitalize">{entry.type}</td>
                  <td className="py-2 px-4 border-b">₹{entry.amount}</td>
                  <td className="py-2 px-4 border-b">{entry.description}</td>
                  <td className="py-2 px-4 border-b">{entry.date}</td>
                  <td className="py-2 px-4 border-b space-x-3">
                    <button
                      onClick={() => editEntry(i)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit ✏️
                    </button>
                    <button
                      onClick={() => deleteEntry(i)}
                      className="text-red-600 hover:underline"
                    >
                      Delete ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Transactions;
