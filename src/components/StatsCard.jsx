// ✅ updated – replace the whole file

import React from "react";

const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div
      className={`flex items-center space-x-4 p-4 rounded-lg shadow-md border ${color}`}
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <div className="text-sm text-gray-600 dark:text-gray-300">{title}</div>
        <div className="text-xl font-bold dark:text-white">{value}</div>
      </div>
    </div>
  );
};

export default StatsCard;
