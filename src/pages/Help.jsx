// ✅ File: src/pages/Help.jsx

import React from "react";

const Help = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">❓ Help & FAQs</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧾 How do I add a transaction?</h2>
        <p className="text-gray-700">
          Click on the ➕ Add Entry tab from the sidebar. Fill in the form with type, amount,
          description, and date — then hit "Add Entry".
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔍 How do I search past entries?</h2>
        <p className="text-gray-700">
          Navigate to the 📜 Transactions page. Use the search bar to filter by description,
          amount, type, or date.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📤 How can I export my data?</h2>
        <p className="text-gray-700">
          On the 📜 Transactions page, click the "Export CSV" button to download a CSV file of your
          transactions.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💾 How to backup or restore?</h2>
        <p className="text-gray-700">
          Go to the 📂 Backup/Restore page. You can export a `.json` file for backup or import it to
          restore your data.
        </p>
      </div>

      <div className="text-sm text-gray-500">
        Still stuck? Contact your developer – <strong>Badshah bhai</strong> 🛠️
      </div>
    </div>
  );
};

export default Help;
