import {
  Music4,
  Heart,
  BrainCircuit,
  BookOpen,
} from "lucide-react";

const stats = [
  {
    title: "Songs",
    value: "1200+",
    icon: <Music4 size={30} />,
    color: "text-purple-400",
  },
  {
    title: "Favorites",
    value: "56",
    icon: <Heart size={30} />,
    color: "text-pink-400",
  },
  {
    title: "AI Recommendations",
    value: "324",
    icon: <BrainCircuit size={30} />,
    color: "text-cyan-400",
  },
  {
    title: "Stories",
    value: "18",
    icon: <BookOpen size={30} />,
    color: "text-emerald-400",
  },
];

export default function StatsCards() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((card) => (

        <div
          key={card.title}
          className="story-card rounded-3xl p-7 hover:scale-105 transition-all"
        >

          <div className={card.color}>

            {card.icon}

          </div>

          <h2 className="text-4xl font-black mt-5">
            {card.value}
          </h2>

          <p className="text-slate-400 mt-2">
            {card.title}
          </p>

        </div>

      ))}

    </div>
  );
}