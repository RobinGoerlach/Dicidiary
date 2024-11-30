import React from "react";

const DiaryEntries = [
  {
    id: 1,
    title: "The Wanderer's Thought",
    date: "7.7.2024",
    image:
      "https://unsplash.com/photos/leafless-tree-on-snow-covered-ground-2TzpDe_-j6o",
    Content:
      "Today I felt like a shadow, blending with the crowd, observing but unseen. The world moved fast around me, yet in my heart, time felt still. What is it about being a stranger that makes you feel so free yet so lonely at the same time?",
  },
  {
    id: 2,
    title: "Lost in the Rain",
    date: "8.8.2024",
    image:
      "https://unsplash.com/photos/person-standing-on-gray-surface-while-holding-umbrella-p_HYA_T-1WU",
    Content:
      "The rain whispered secrets as it danced on my umbrella. Each drop seemed to carry a story, and I wished I could hear them all. Some days, I feel like the rain—falling, searching, but not knowing where I’ll land.",
  },
  {
    id: 3,
    title: "A Sky Full of Dreams",
    date: "9.9.2024",
    image:
      "https://unsplash.com/photos/a-boat-floating-on-top-of-a-body-of-water-hXYTBzBzv7A",
    Content:
      "I looked up at the stars tonight and wondered: Do they ever feel exhausted, burning endlessly just to be seen? Maybe dreams are like stars—distant and bright but requiring darkness to truly shine.",
  },
  {
    id: 4,
    title: "The Empty Park Bench",
    date: "10.10.2024",
    image:
      "https://unsplash.com/photos/green-wooden-bench-and-autumn-leaves-on-grass-covered-field-near-trees-during-day-zb13N8EDjGE",
    Content:
      "The park was quiet except for the rustle of leaves and the occasional chirp of a bird. An old bench sat empty, its wood worn but sturdy. I wondered how many stories it had witnessed—lovers, dreamers, wanderers like me.",
  },
  {
    id: 5,
    title: "A Strangers Smile",
    date: "11.11.2024",
    image:
      "https://unsplash.com/photos/a-woman-sitting-on-a-window-sill-looking-out-the-window-d_SdNr2DoPA",
    Content:
      "A stranger smiled at me today. It was not the kind you give out of politeness but one that felt real, warm, and unspoken. For a moment, it felt like the world was not so big, and I was not so small.",
  },
  {
    id: 6,
    title: "Echoes of Silence",
    date: "12.12.2024",
    image:
      "https://unsplash.com/photos/grayscale-photo-of-woman-doing-silent-hand-sign-BcjdbyKWquw",
    Content:
      "There is something about silence that feels louder than any noise. In the stillness, I heard my own thoughts—some I liked, some I did not. But perhaps it is in silence that we come closest to the truth.",
  },
];

const HomePage = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {DiaryEntries.map((entry) => (
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
            <p className="text-gray-500 font-mono text-sm mb-2">
              {new Date(entry.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 text-sm">{entry.Content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
