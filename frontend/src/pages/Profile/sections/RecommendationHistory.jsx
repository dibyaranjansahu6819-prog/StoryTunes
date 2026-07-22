import {
  BrainCircuit,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const history = [
  {
    id: 1,
    date: "Today",
    input: "Breakup",
    emotion: "💔 Sad",
    language: "English",
    songs: 8,
  },
  {
    id: 2,
    date: "Yesterday",
    input: "Road Trip",
    emotion: "🔥 Energetic",
    language: "English",
    songs: 12,
  },
  {
    id: 3,
    date: "3 Days Ago",
    input: "Study",
    emotion: "😌 Calm",
    language: "English",
    songs: 15,
  },
];

export default function RecommendationHistory() {
  return (
    <section className="story-card rounded-3xl p-8">

      <div className="flex items-center gap-3 mb-8">

        <BrainCircuit
          className="text-purple-400"
          size={30}
        />

        <h2 className="text-3xl font-bold">
          AI Recommendation History
        </h2>

      </div>

      <div className="space-y-6">

        {history.map((item) => (

          <div
            key={item.id}
            className="rounded-2xl bg-slate-900 p-6 hover:bg-slate-800 transition"
          >

            <div className="flex justify-between items-center mb-5">

              <div className="flex items-center gap-2 text-slate-400">

                <CalendarDays size={18} />

                {item.date}

              </div>

              <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">

                Open

                <ArrowRight size={18} />

              </button>

            </div>

            <div className="grid md:grid-cols-4 gap-4">

              <div>

                <p className="text-slate-500 text-sm">
                  Prompt
                </p>

                <h3 className="font-semibold mt-1">
                  {item.input}
                </h3>

              </div>

              <div>

                <p className="text-slate-500 text-sm">
                  Emotion
                </p>

                <h3 className="font-semibold mt-1">
                  {item.emotion}
                </h3>

              </div>

              <div>

                <p className="text-slate-500 text-sm">
                  Language
                </p>

                <h3 className="font-semibold mt-1">
                  {item.language}
                </h3>

              </div>

              <div>

                <p className="text-slate-500 text-sm">
                  Playlist
                </p>

                <h3 className="font-semibold mt-1">
                  {item.songs} Songs
                </h3>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}