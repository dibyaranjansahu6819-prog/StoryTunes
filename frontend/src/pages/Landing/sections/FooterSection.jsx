export default function FooterSection() {
  return (
    <footer className="border-t border-slate-800 py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>

          <h2 className="text-2xl font-bold gradient-text">
            🎵 StoryTunes
          </h2>

          <p className="text-slate-400 mt-2">
            AI-Powered Music Recommendation Platform
          </p>

        </div>

        <div className="text-slate-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} StoryTunes.
          <br />
          Built with React, Django and Artificial Intelligence.
        </div>

      </div>

    </footer>
  );
}