import { useState, useEffect } from "react";
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

  return (
    <DiaryEntriesList
      diaryEntries={diaryEntries}
      isLoading={isLoading}
      errorMsg={errorMsg}
    />
  );
};

export default DiaryEntries;
