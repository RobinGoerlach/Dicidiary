import { useEffect } from "react";

const DiaryEntries = ({ diaryEntries, errorMsg }) => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {diaryEntries &&
        diaryEntries.map((entry) => (
          <div
            key={entry.id}
            className="card bg-white rounded-20 shadow-lg hover:shadow-xl transition-shadow"
          >
            <figure>
              <img
                src={entry.image}
                alt={entry.title}
                className="w-full h-48 object-cover rounded-t"
              />
            </figure>

            <div className="card-body p-4">
              <h3 className="italic font-mono font-bold text-xl mb-2">
                {entry.title}
              </h3>
              <p className="text-gray-700 text-sm">{entry.Content}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DiaryEntries;
