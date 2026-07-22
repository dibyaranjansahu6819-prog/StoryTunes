import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-28">

      <div className="max-w-5xl mx-auto px-6">

        <div className="story-card rounded-3xl text-center p-14">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Discover
            <span className="gradient-text">
              {" "}Your Soundtrack?
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Join StoryTunes and let AI transform your emotions,
            stories and thoughts into the perfect playlist.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">

            <Link
              to="/register"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition"
            >
              🚀 Create Account
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 rounded-2xl border border-slate-700 hover:border-purple-500 transition"
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}