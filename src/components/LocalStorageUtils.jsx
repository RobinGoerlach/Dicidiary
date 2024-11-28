import { useState, useEffect } from "react";
import {
  //getDiaryEntry,
  setDiaryEntry,
  getAllDiaryEntries,
  clearAllDiaryEntries,
} from "../data/localStorageUtils";

const LocalStorageUtils = () => {
  const [entries, setEntries] = useState({});
  const [newEntry, setNewEntry] = useState("");

  // Load diary entries from localStorage on mount and add default entries if necessary
  useEffect(() => {
    const storedEntries = getAllDiaryEntries();

    if (Object.keys(storedEntries).length === 0) {
      const defaultEntries = {
        "2024-11-01": "Today was a productive day! Learned about React hooks.",
        "2024-11-02": "Started working on a digital diary project. Excited! 😊",
        "2024-11-03": "TailwindCSS and DaisyUI are amazing for styling!",
      };

      Object.entries(defaultEntries).forEach(([date, content]) => {
        setDiaryEntry(date, content);
      });

      setEntries(defaultEntries);
    } else {
      setEntries(storedEntries);
    }
  }, []);

  // Handle adding a new diary entry
  const handleAddEntry = () => {
    const dateKey = new Date().toISOString().split("T")[0]; // Use current date as key

    if (!newEntry.trim()) {
      alert("Please write something before adding to the diary!");
      return;
    }

    setDiaryEntry(dateKey, newEntry);
    setEntries((prevEntries) => ({
      ...prevEntries,
      [dateKey]: newEntry,
    }));
    setNewEntry("");
  };

  // Handle clearing all diary entries
  const handleClearEntries = () => {
    if (window.confirm("Are you sure you want to clear all entries?")) {
      clearAllDiaryEntries();
      setEntries({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          My Digital Diary
        </h1>

        {/* New Entry Input */}
        <div className="mb-4">
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="Write your thoughts here..."
            className="textarea textarea-bordered w-full h-24"
          ></textarea>
          <button
            onClick={handleAddEntry}
            className="btn btn-primary w-full mt-2"
          >
            Add Entry
          </button>
          <button
            onClick={handleClearEntries}
            className="btn btn-error w-full mt-2"
          >
            Clear All Entries
          </button>
        </div>

        {/* Diary Entries Display */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Previous Entries</h2>
          <ul className="space-y-4">
            {Object.entries(entries).map(([date, content]) => (
              <li
                key={date}
                className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
              >
                <p className="text-sm text-gray-500">{date}</p>
                <p className="mt-2 text-gray-700">{content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocalStorageUtils;
