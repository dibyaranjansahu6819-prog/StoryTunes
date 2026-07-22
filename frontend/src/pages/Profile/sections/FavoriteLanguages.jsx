const languages = [
  {
    name: "Hindi",
    percentage: 88,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "English",
    percentage: 76,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Odia",
    percentage: 54,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Tamil",
    percentage: 35,
    color: "from-purple-500 to-pink-500",
  },
];

export default function FavoriteLanguages() {
  return (
    <section className="story-card rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        🌍 Favorite Languages
      </h2>

      <div className="space-y-7">

        {languages.map((language) => (

          <div key={language.name}>

            <div className="flex justify-between mb-2">

              <span className="font-semibold">
                {language.name}
              </span>

              <span className="text-slate-400">
                {language.percentage}%
              </span>

            </div>

            <div className="w-full h-3 rounded-full bg-slate-800">

              <div
                className={`h-3 rounded-full bg-gradient-to-r ${language.color}`}
                style={{
                  width: `${language.percentage}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}