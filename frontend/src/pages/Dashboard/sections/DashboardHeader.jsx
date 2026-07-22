import { Sparkles } from "lucide-react";

export default function DashboardHeader() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <section className="story-card rounded-3xl p-10">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

        <div>

          <div className="flex items-center gap-3 text-purple-400 mb-4">

            <Sparkles size={24} />

            <span className="font-semibold">
              AI-Powered Music Companion
            </span>

          </div>

          <h1 className="text-5xl font-black">

            {greeting},

            <span className="gradient-text">
              {" "}Welcome Back!
            </span>

          </h1>

          <p className="text-slate-400 mt-5 text-lg max-w-2xl">

            Ready to transform another story into music?
            Let StoryTunes understand your emotions
            and build your perfect playlist.

          </p>

        </div>

        <div className="story-card rounded-2xl p-6 min-w-[250px]">

          <p className="text-slate-400 mb-3">
            AI Status
          </p>

          <h2 className="text-3xl font-bold text-green-400">
            ● Online
          </h2>

          <p className="mt-4 text-slate-400">
            Recommendation Engine Ready
          </p>

        </div>

      </div>

    </section>
  );
}