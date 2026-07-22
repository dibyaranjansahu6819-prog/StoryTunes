const genres = [
  {
    name: "Romantic",
    percentage: 92,
    color: "from-pink-500 to-red-500",
  },
  {
    name: "Pop",
    percentage: 80,
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Lo-Fi",
    percentage: 66,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Rock",
    percentage: 45,
    color: "from-emerald-500 to-green-500",
  },
];

export default function FavoriteGenres() {
  return (
    <section className="story-card rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        🎵 Favorite Genres
      </h2>

      <div className="space-y-7">

        {genres.map((genre) => (

          <div key={genre.name}>

            <div className="flex justify-between mb-2">

              <span className="font-semibold">
                {genre.name}
              </span>

              <span className="text-slate-400">
                {genre.percentage}%
              </span>

            </div>

            <div className="w-full h-3 rounded-full bg-slate-800">

              <div
                className={`h-3 rounded-full bg-gradient-to-r ${genre.color}`}
                style={{
                  width: `${genre.percentage}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}