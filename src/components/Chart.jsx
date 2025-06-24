// ✅ File: src/components/Chart.jsx

import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#4ade80", "#f87171"];

const Chart = ({ data }) => {
  const income = data
    .filter((e) => e.type === "income")
    .reduce((sum, e) => sum + e.amount, 0);
  const expense = data
    .filter((e) => e.type === "expense")
    .reduce((sum, e) => sum + e.amount, 0);

  const pieData = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((_, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={pieData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;


// ✅ File: src/components/Header.jsx

import React from "react";

const Header = () => {
  return (
    <header className="bg-purple-600 text-white py-4 px-6 shadow">
      <h1 className="text-xl font-bold">📒 Marcobook</h1>
    </header>
  );
};

export default Header;


// ✅ File: src/components/SummaryCards.jsx

import React from "react";

const SummaryCards = ({ data }) => {
  const income = data
    .filter((e) => e.type === "income")
    .reduce((sum, e) => sum + e.amount, 0);
  const expense = data
    .filter((e) => e.type === "expense")
    .reduce((sum, e) => sum + e.amount, 0);
  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-green-100 text-green-800 p-4 rounded shadow">
        <p className="text-sm">Income</p>
        <p className="text-xl font-bold">₹{income}</p>
      </div>

      <div className="bg-red-100 text-red-800 p-4 rounded shadow">
        <p className="text-sm">Expense</p>
        <p className="text-xl font-bold">₹{expense}</p>
      </div>

      <div className="bg-blue-100 text-blue-800 p-4 rounded shadow">
        <p className="text-sm">Balance</p>
        <p className="text-xl font-bold">₹{balance}</p>
      </div>
    </div>
  );
};

export default SummaryCards;


// ✅ File: src/assets/logo.png
// 📌 Please place your logo image manually here:
// Image path: src/assets/logo.png
// (Drag and drop your logo PNG file into this folder)
