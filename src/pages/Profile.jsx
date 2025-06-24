import React, { useEffect, useState } from "react";

const Profile = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cashbook_entries")) || [];
    const income = data.filter((e) => e.type === "income");
    const expense = data.filter((e) => e.type === "expense");

    setTotalIncome(income.reduce((sum, i) => sum + Number(i.amount), 0));
    setTotalExpense(expense.reduce((sum, i) => sum + Number(i.amount), 0));
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🙋 User Profile & Stats</h1>
      <div className="bg-white rounded shadow p-4 space-y-3">
        <p>
          <strong>Total Entries:</strong>{" "}
          {(JSON.parse(localStorage.getItem("cashbook_entries")) || []).length}
        </p>
        <p>
          <strong>Total Income:</strong> ₹{totalIncome}
        </p>
        <p>
          <strong>Total Expense:</strong> ₹{totalExpense}
        </p>
        <p>
          <strong>Balance:</strong> ₹{totalIncome - totalExpense}
        </p>
        <p>
          <strong>Backup Enabled:</strong> No (Local Only)
        </p>
      </div>
    </div>
  );
};

export default Profile;
