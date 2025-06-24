// updated – replace the whole file

import React, { useEffect, useState } from "react";

const Summary = () => {
  const [summary, setSummary] = useState({ income: 0, expense: 0, balance: 0 });

  useEffect(() => {
    const entries = JSON.parse(localStorage.getItem("cashbook_entries")) || [];

    const income = entries
      .filter((e) => e.type === "income")
      .reduce((sum, e) => sum + Number(e.amount), 0);

    const expense = entries
      .filter((e) => e.type === "expense")
      .reduce((sum, e) => sum + Number(e.amount), 0);

    setSummary({
      income,
      expense,
      balance: income - expense,
    });
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📊 Summary</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-green-100 p-4 rounded shadow">
          <p className="text-sm text-green-700">Total Income</p>
          <p className="text-xl font-bold text-green-800">₹{summary.income}</p>
        </div>

        <div className="bg-red-100 p-4 rounded shadow">
          <p className="text-sm text-red-700">Total Expense</p>
          <p className="text-xl font-bold text-red-800">₹{summary.expense}</p>
        </div>

        <div className="bg-blue-100 p-4 rounded shadow">
          <p className="text-sm text-blue-700">Balance</p>
          <p className="text-xl font-bold text-blue-800">₹{summary.balance}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
