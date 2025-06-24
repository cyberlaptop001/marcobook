// ✅ File: src/utils/dateUtils.js

// Format date as YYYY-MM-DD
export const formatDate = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = (`0${dateObj.getMonth() + 1}`).slice(-2);
  const day = (`0${dateObj.getDate()}`).slice(-2);
  return `${year}-${month}-${day}`;
};

// Get today's date in YYYY-MM-DD
export const getToday = () => {
  return formatDate(new Date());
};

// Format a date string to readable text
export const toReadableDate = (isoDateStr) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(isoDateStr).toLocaleDateString(undefined, options);
};
