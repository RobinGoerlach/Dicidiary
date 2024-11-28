/**
 * Retrieves an entry from localStorage by key.
 * @param {string} key - The key associated with the diary entry.
 * @returns {string|null} - The value of the diary entry or null if not found.
 */
export function getDiaryEntry(key) {
  return localStorage.getItem(key);
}

/**
 * Saves a diary entry to localStorage.
 * @param {string} key - The key for the diary entry (e.g., a date or unique identifier).
 * @param {string} value - The diary entry content.
 */
export function setDiaryEntry(key, value) {
  localStorage.setItem(key, value);
}

/**
 * Removes a specific diary entry from localStorage.
 * @param {string} key - The key of the diary entry to be removed.
 */
export function removeDiaryEntry(key) {
  localStorage.removeItem(key);
}

/**
 * Clears all diary entries from localStorage.
 * Use with caution, as this will delete all data stored in localStorage.
 */
export function clearAllDiaryEntries() {
  localStorage.clear();
}

/**
 * Retrieves all diary entries from localStorage.
 * @returns {object} - An object containing all key-value pairs of diary entries.
 */
export function getAllDiaryEntries() {
  const entries = {};
  Object.keys(localStorage).forEach((key) => {
    entries[key] = localStorage.getItem(key);
  });
  return entries;
}

/**
 * Checks if a specific diary entry exists in localStorage.
 * @param {string} key - The key of the diary entry to check.
 * @returns {boolean} - True if the entry exists, false otherwise.
 */
export function diaryEntryExists(key) {
  return localStorage.getItem(key) !== null;
}
