import {
  Music4,
  Heart,
  BookOpen,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    title: "Songs Played",
    value: "1,245",
    icon: <Music4 size={32} />,
    color: "text-purple-400",
  },
  {
    title: "Favorites",
    value: "87",
    icon: <Heart size={32} />,
    color: "text-pink-400",
  },
  {
    title: "Stories",
    value: "35",
    icon: <BookOpen size={32} />,
    color: "text-emerald-400",
  },
  {
    title: "AI Recommendations",
    value: "324",
    icon: <BrainCircuit size={32} />,
    color: "text-cyan-400",
  },
];

export default function ListeningStats() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item) => (

        <div
          key={item.title}
          className="story-card rounded-3xl p-7 hover:scale-105 transition-all duration-300"
        >

          <div className={item.color}>
            {item.icon}
          </div>

          <h2 className="text-4xl font-black mt-5">
            {item.value}
          </h2>

          <p className="text-slate-400 mt-2">
            {item.title}
          </p>

        </div>

      ))}

    </div>
  );
}