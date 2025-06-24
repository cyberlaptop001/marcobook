import React from "react";

const Terms = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📄 Terms & Conditions</h1>

      <p className="mb-4">
        By using Marcobook, you agree to the following terms:
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>🧾 This app is provided "as is" without any warranties of any kind.</li>
        <li>🔐 All data is stored locally; users are responsible for backing it up.</li>
        <li>📤 We do not upload or share any personal or financial data.</li>
        <li>🧠 Users must ensure the accuracy and legality of the data they input.</li>
        <li>⚠️ We are not liable for any data loss, financial loss, or damages arising from using the app.</li>
        <li>🚫 Misuse of this app for illegal purposes will result in a permanent ban.</li>
      </ul>

      <p className="mt-6 text-sm text-gray-500">
        These terms may be updated at any time without prior notice.
      </p>
    </div>
  );
};

export default Terms;
