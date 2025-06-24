// ✅ File: src/utils/storage.js

const STORAGE_KEY = "cashbook_entries";

// Fetch entries from localStorage (in reverse order)
export const getEntries = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored).reverse() : [];
};

// Save entries to localStorage (stored in reverse to preserve order)
export const saveEntries = (entries) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...entries].reverse()));
};

// Add a new entry
export const addEntry = (newEntry) => {
  const entries = getEntries();
  const updated = [newEntry, ...entries];
  saveEntries(updated);
};

// Delete entry by index
export const deleteEntry = (index) => {
  const entries = getEntries();
  entries.splice(index, 1);
  saveEntries(entries);
};

// Edit entry at index
export const editEntry = (index, updatedEntry) => {
  const entries = getEntries();
  entries[index] = updatedEntry;
  saveEntries(entries);
};
