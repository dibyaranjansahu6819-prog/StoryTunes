import {
  BrainCircuit,
  Music4,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: <BrainCircuit size={36} />,
    title: "AI-Powered Story Analysis",
    description:
      "Analyze long stories or short prompts to understand emotions, language, and important keywords.",
  },
  {
    icon: <Music4 size={36} />,
    title: "Smart Playlist Generation",
    description:
      "Generate playlists using AI analysis, moods, genres, singers, or quick prompts.",
  },
  {
    icon: <Sparkles size={36} />,
    title: "Personalized Experience",
    description:
      "Save favorite songs, manage playlists, and build your own listening history.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            What Makes
            <span className="gradient-text">
              {" "}StoryTunes{" "}
            </span>
            Special?
          </h2>

          <p className="text-slate-400 mt-5 text-lg max-w-3xl mx-auto">
            Combining Artificial Intelligence with music recommendation
            to deliver a personalized listening experience.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {highlights.map((item) => (

            <div
              key={item.title}
              className="story-card rounded-3xl p-8 hover:scale-105 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}