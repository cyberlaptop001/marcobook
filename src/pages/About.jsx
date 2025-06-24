// ✅ File: src/pages/About.jsx

import React from "react";

const About = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📘 About Marcobook</h1>

      <p className="text-gray-700 mb-4">
        <strong>Marcobook</strong> is your personal digital ledger – a simple, offline-first web app
        for tracking daily income and expenses. Whether you're running a small business or managing
        household finances, Marcobook helps you keep everything organized in one place.
      </p>

      <p className="text-gray-700 mb-4">
        Inspired by the original Cashbook app, Marcobook is built to be clean, fast, and accessible
        from multiple PCs/laptops. All data is saved in your browser (localStorage), with optional
        backup and restore support.
      </p>

      <h2 className="text-xl font-semibold mb-2">🔧 Key Features</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
        <li>Add, edit, and delete transactions</li>
        <li>View monthly summaries and charts</li>
        <li>Backup and restore entries via JSON</li>
        <li>Export transaction history to CSV</li>
        <li>Dark mode toggle for eye comfort</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">👨‍💻 Developer Note</h2>
      <p className="text-gray-700">
        This app is handcrafted by <strong>Badshah bhai</strong> as a full-featured clone of the
        popular Cashbook app. It works without internet and is compatible with any modern browser.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Version 1.0.0 • Made with ❤️ in React + Tailwind
      </p>
    </div>
  );
};

export default About;
