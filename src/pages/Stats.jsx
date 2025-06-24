// updated – replace the whole file

import React, { useEffect, useState } from "react";

const Stats = () => {
  const [entries, setEntries] = useState([]);
  const [totals, setTotals] = useState({ income: 0, expense: 0, balance: 0 });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cashbook_entries")) || [];
    setEntries(data);
    calculateTotals(data);
  }, []);

  const calculateTotals = (data) => {
    let income = 0;
    let expense = 0;
    data.forEach((entry) => {
      if (entry.type === "income") {
        income += parseFloat(entry.amount);
      } else {
        expense += parseFloat(entry.amount);
      }
    });
    const balance = income - expense;
    setTotals({ income, expense, balance });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📊 Summary Stats</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
        <div className="bg-green-600 rounded p-4 shadow">
          <h2 className="text-lg">Total Income</h2>
          <p className="text-2xl font-bold mt-2">₹{totals.income}</p>
        </div>
        <div className="bg-red-600 rounded p-4 shadow">
          <h2 className="text-lg">Total Expense</h2>
          <p className="text-2xl font-bold mt-2">₹{totals.expense}</p>
        </div>
        <div className="bg-blue-600 rounded p-4 shadow">
          <h2 className="text-lg">Balance</h2>
          <p className="text-2xl font-bold mt-2">₹{totals.balance}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
