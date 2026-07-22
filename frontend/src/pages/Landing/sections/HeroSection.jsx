import { Link } from "react-router-dom";
import { Sparkles, Music4, BrainCircuit } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-700/20 blur-3xl"></div>
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="fade-up">

            <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm text-purple-300 mb-6">
              <Sparkles size={18} />
              AI Powered Music Recommendation
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight">

              Turn Your

              <span className="gradient-text">
                {" "}Stories
              </span>

              <br />

              Into Music

            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-8 max-w-xl">

              StoryTunes understands your emotions,
              analyzes your stories using Artificial
              Intelligence and creates playlists
              perfectly matched to your feelings.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/register"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold hover:scale-105 transition"
              >
                🚀 Get Started
              </Link>

              <Link
                to="/login"
                className="px-8 py-4 rounded-2xl border border-slate-700 hover:border-purple-500 transition"
              >
                Login
              </Link>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="story-card p-10 w-full max-w-md">

              <div className="flex items-center gap-4 mb-8">

                <BrainCircuit
                  size={36}
                  className="text-purple-400"
                />

                <div>

                  <h2 className="text-2xl font-bold">
                    Story Analysis
                  </h2>

                  <p className="text-slate-400">
                    AI Engine
                  </p>

                </div>

              </div>

              <div className="space-y-5">

                <div className="flex justify-between">

                  <span>Emotion</span>

                  <span className="text-green-400">
                    💔 Sad
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Language</span>

                  <span className="text-blue-400">
                    English
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Keywords</span>

                  <span className="text-purple-400">
                    Love, Alone
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Confidence</span>

                  <span className="text-yellow-400">
                    96%
                  </span>

                </div>

              </div>

              <div className="mt-10 flex items-center justify-center">

                <div className="h-28 w-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">

                  <Music4
                    size={52}
                    className="text-white"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}