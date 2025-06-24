// updated – replace the whole file

// ✅ Format date to DD/MM/YYYY
export const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};

// ✅ Calculate total income and expenses
export const calculateTotals = (entries) => {
  let income = 0;
  let expense = 0;
  entries.forEach((e) => {
    if (e.type === "income") income += Number(e.amount);
    else expense += Number(e.amount);
  });
  return { income, expense, balance: income - expense };
};
