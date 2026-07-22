import { UserCircle, Sparkles } from "lucide-react";

export default function ProfileHeader() {
  return (
    <section className="story-card rounded-3xl p-8">

      <div className="flex flex-col md:flex-row items-center gap-8">

        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">

          <UserCircle size={80} />

        </div>

        <div className="flex-1">

          <div className="flex items-center gap-2 text-purple-400 mb-2">

            <Sparkles size={18} />

            <span>AI Music Explorer</span>

          </div>

          <h1 className="text-4xl font-black">
            Dibyaranjan
          </h1>

          <p className="text-slate-400 mt-3">
            Welcome back! StoryTunes is ready to create your next personalized playlist.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">

            <div className="bg-slate-800 px-4 py-2 rounded-xl">
              Member Since <strong>2026</strong>
            </div>

            <div className="bg-slate-800 px-4 py-2 rounded-xl">
              AI Recommendations <strong>324</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}