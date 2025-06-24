import React from "react";

const Privacy = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔐 Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. Here's how we handle your data:
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>📂 All data you enter is saved locally on your device using your browser’s local storage.</li>
        <li>🌐 Marcobook does not transmit or store any of your data on external servers.</li>
        <li>🔍 We do not collect, analyze, or sell your data — your information stays private with you.</li>
        <li>🛡️ It’s your responsibility to regularly backup your data using our built-in backup option.</li>
        <li>👁️ Be cautious when sharing screenshots or backups as they may contain personal financial details.</li>
      </ul>

      <p className="mt-6 text-sm text-gray-500">
        If you clear your browser data or uninstall the app, your entries may be permanently lost.
      </p>
    </div>
  );
};

export default Privacy;
