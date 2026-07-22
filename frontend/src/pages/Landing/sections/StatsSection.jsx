import {
  Music4,
  BrainCircuit,
  Heart,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: <Music4 size={36} />,
    value: "1200+",
    title: "Songs Available",
    color: "text-purple-400",
  },
  {
    icon: <BrainCircuit size={36} />,
    value: "98%",
    title: "AI Recommendation Accuracy",
    color: "text-cyan-400",
  },
  {
    icon: <Heart size={36} />,
    value: "500+",
    title: "Playlists Generated",
    color: "text-pink-400",
  },
  {
    icon: <Users size={36} />,
    value: "24/7",
    title: "AI Ready",
    color: "text-emerald-400",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            StoryTunes
            <span className="gradient-text">
              {" "}By The Numbers
            </span>
          </h2>

          <p className="text-slate-400 mt-5 text-lg">
            AI-powered music recommendations built from stories,
            emotions and listening behavior.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (

            <div
              key={item.title}
              className="story-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300"
            >

              <div className={`mb-6 flex justify-center ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="text-5xl font-black mb-3 gradient-text">
                {item.value}
              </h3>

              <p className="text-slate-400">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}