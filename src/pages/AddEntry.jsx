import React, { useState } from "react";

const AddEntry = () => {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const entry = {
      type,
      amount: parseFloat(amount),
      description: desc,
      date,
    };

    // ✅ Save to localStorage
    const existing = JSON.parse(localStorage.getItem("cashbook_entries")) || [];
    existing.push(entry);
    localStorage.setItem("cashbook_entries", JSON.stringify(existing));

    alert("✅ Entry added!");

    // Clear form
    setAmount("");
    setDesc("");
    setDate("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">➕ Add New Entry</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            required
            className="w-full border px-3 py-2 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default AddEntry;
