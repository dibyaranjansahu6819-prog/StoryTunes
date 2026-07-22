import {
  FileText,
  BrainCircuit,
  Music4,
  Heart,
} from "lucide-react";

const steps = [
  {
    icon: <FileText size={38} />,
    title: "Share Your Story",
    description:
      "Write a detailed story or simply enter a few words like 'breakup', 'love', or 'gym'.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <BrainCircuit size={38} />,
    title: "AI-Powered Analysis",
    description:
      "StoryTunes detects emotions, language, keywords and understands your mood.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Music4 size={38} />,
    title: "Generate Playlist",
    description:
      "Our recommendation engine builds a personalized playlist based on your analysis.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Heart size={38} />,
    title: "Enjoy & Save",
    description:
      "Play songs instantly, save favorites and revisit your recommendations anytime.",
    color: "from-emerald-500 to-green-500",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold">
            How
            <span className="gradient-text">
              {" "}StoryTunes{" "}
            </span>
            Works
          </h2>

          <p className="text-slate-400 mt-5 text-lg max-w-3xl mx-auto">
            From your emotions to the perfect playlist —
            everything happens in just a few seconds.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="relative story-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300"
            >

              <div
                className={`w-20 h-20 rounded-full mx-auto mb-6 bg-gradient-to-r ${step.color}
                flex items-center justify-center`}
              >
                {step.icon}
              </div>

              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold text-purple-400">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}