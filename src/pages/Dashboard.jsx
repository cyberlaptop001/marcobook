// ✅ File: src/pages/Dashboard.jsx

import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp, FaRupeeSign } from "react-icons/fa";

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cashbook_entries")) || [];
    setEntries(data);

    const income = data.filter((e) => e.type === "income").reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
    const expense = data.filter((e) => e.type === "expense").reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

    setTotalIncome(income);
    setTotalExpense(expense);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard Summary</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-100 p-5 rounded shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Total Income</h2>
            <FaArrowDown className="text-green-600 text-xl" />
          </div>
          <p className="text-2xl font-bold text-green-700 mt-2">
            <FaRupeeSign className="inline mr-1" />
            {totalIncome}
          </p>
        </div>

        <div className="bg-red-100 p-5 rounded shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Total Expense</h2>
            <FaArrowUp className="text-red-600 text-xl" />
          </div>
          <p className="text-2xl font-bold text-red-700 mt-2">
            <FaRupeeSign className="inline mr-1" />
            {totalExpense}
          </p>
        </div>

        <div className="bg-blue-100 p-5 rounded shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Balance</h2>
            <span className="text-blue-600 text-xl">💰</span>
          </div>
          <p className="text-2xl font-bold text-blue-700 mt-2">
            <FaRupeeSign className="inline mr-1" />
            {totalIncome - totalExpense}
          </p>
        </div>
      </div>

      {entries.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">📅 Latest Entries</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">Type</th>
                  <th className="py-2 px-4 border-b">Amount</th>
                  <th className="py-2 px-4 border-b">Description</th>
                  <th className="py-2 px-4 border-b">Date</th>
                </tr>
              </thead>
              <tbody>
                {entries.slice(0, 5).map((entry, index) => (
                  <tr
                    key={index}
                    className={
                      entry.type === "income"
                        ? "bg-green-50"
                        : "bg-red-50"
                    }
                  >
                    <td className="py-2 px-4 border-b capitalize">{entry.type}</td>
                    <td className="py-2 px-4 border-b">₹{entry.amount}</td>
                    <td className="py-2 px-4 border-b">{entry.description}</td>
                    <td className="py-2 px-4 border-b">{entry.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
