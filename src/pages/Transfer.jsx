// ✅ full file – Transfer logic between virtual accounts

import React, { useState } from "react";

const Transfer = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();
    if (!from || !to || !amount || from === to) {
      setMessage("❌ Invalid transfer details.");
      return;
    }

    const entries = JSON.parse(localStorage.getItem("cashbook_entries")) || [];

    const now = new Date().toISOString().split("T")[0];

    const out = {
      type: "expense",
      amount: parseFloat(amount),
      description: `Transfer to ${to}`,
      date: now,
    };

    const incoming = {
      type: "income",
      amount: parseFloat(amount),
      description: `Received from ${from}`,
      date: now,
    };

    const updated = [...entries, out, incoming];
    localStorage.setItem("cashbook_entries", JSON.stringify(updated));
    setMessage("✅ Transfer successful!");

    // Clear form
    setFrom("");
    setTo("");
    setAmount("");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔄 Transfer Between Accounts</h1>
      <form onSubmit={handleTransfer} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">From</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">To</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Transfer
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default Transfer;
