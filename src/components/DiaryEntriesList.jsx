import { useState, useEffect } from "react";

const DiaryEntriesList = () => {
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const entries = localStorage.getItem("diaryEntries");

    if (entries) {
      setDiaryEntries(JSON.parse(entries));
    } else {
      setErrorMsg("No entries found.");
    }
    setIsLoading(false);
  }, []);

  const handleAddEntry = () => {
    alert("Add Entry button clicked!");
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {diaryEntries.map((entry) => (
          <div key={entry.id} className="card">
            <figure>
              <img
                src={entry.image}
                alt={entry.title}
                className="w-full h-48 object-cover rounded-t"
              />
            </figure>
            <div className="card-body">
              <div className="p-4">
                <h3 className="font-bold text-lg">{entry.title}</h3>
                <p className="text-gray-500 text-sm">
                  {new Date(entry.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DiaryEntriesList;
