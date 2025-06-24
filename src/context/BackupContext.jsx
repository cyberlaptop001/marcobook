// ✅ File: src/context/BackupContext.jsx

import React, { createContext, useState, useEffect } from "react";

export const BackupContext = createContext();

const BackupProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cashbook_entries")) || [];
    setEntries(stored);
  }, []);

  const restoreBackup = (data) => {
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        localStorage.setItem("cashbook_entries", JSON.stringify(parsed));
        setEntries(parsed);
        return true;
      }
    } catch (err) {
      console.error("Restore failed", err);
    }
    return false;
  };

  const backupData = () => JSON.stringify(entries, null, 2);

  return (
    <BackupContext.Provider value={{ entries, backupData, restoreBackup }}>
      {children}
    </BackupContext.Provider>
  );
};

export default BackupProvider;
