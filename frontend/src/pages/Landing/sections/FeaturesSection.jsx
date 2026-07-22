import {
  Heart,
  Globe2,
  Music4,
  History,
} from "lucide-react";

const features = [
  {
    icon: <Heart size={34} />,
    title: "Emotion Detection",
    description:
      "AI understands your emotions before recommending songs that truly match your mood.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: <Globe2 size={34} />,
    title: "Language Analysis",
    description:
      "StoryTunes automatically detects language and recommends music accordingly.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Music4 size={34} />,
    title: "Smart Recommendations",
    description:
      "Every playlist is generated using AI analysis of stories, prompts and emotions.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <History size={34} />,
    title: "Playlist History",
    description:
      "Never lose your favorite recommendations. Access your playlists anytime.",
    color: "from-emerald-500 to-green-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Why Choose
            <span className="gradient-text">
              {" "}StoryTunes?
            </span>
          </h2>

          <p className="text-slate-400 text-lg mt-5 max-w-3xl mx-auto">
            More than a music player. StoryTunes understands your emotions
            and creates playlists that truly match your story.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="story-card p-8 rounded-3xl hover:scale-105 transition-all duration-300"
            >

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color}
                flex items-center justify-center mb-6`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}