import React, { useState, useEffect } from "react";
import DiaryEntriesList from "./DiaryEntriesList";

const DiaryEntries = () => {
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const entries = localStorage.getItem("diaryEntries");

    if (entries) {
      setDiaryEntries(JSON.parse(entries));
    } else {
      setErrorMsg("No diary entries found.");
    }

    setIsLoading(false);
  }, []);

  const handleAddEntry = () => {
    const newEntry = {
      id: Date.now(),
      title: "New Entry",
      date: new Date().toISOString(),
      image: "",
      content: "This is a new diary entry.",
    };

    const updatedEntries = [
      ...diaryEntries.filter((entry) => entry.id !== newEntry.id),
      newEntry,
    ];

    setDiaryEntries(updatedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
  };

  return (
    <DiaryEntriesList
      diaryEntries={diaryEntries}
      isLoading={isLoading}
      errorMsg={errorMsg}
    />
  );
};

export default DiaryEntries;
