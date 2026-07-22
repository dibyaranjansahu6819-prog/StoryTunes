import { Heart, Play, Plus, Star } from "lucide-react";
import { useMusic } from "../../context/MusicContext";
import { addFavorite } from "../../services/favorites";

export default function RecommendationResults({ songs }) {
  const { playSong } = useMusic();

  async function favorite(song, e) {
    e.stopPropagation();

    try {
      await addFavorite(song.id);
      alert(`${song.title} added to favorites ❤️`);
    } catch (err) {
      console.error(err);
    }
  }

  if (!songs || songs.length === 0) {
    return (
      <div className="story-card rounded-3xl p-12 text-center mt-10">

        <h2 className="text-3xl font-bold mb-4">
          🎵 No Playlist Yet
        </h2>

        <p className="text-slate-400">
          Generate a playlist using AI Studio.
        </p>

      </div>
    );
  }

  return (
    <div className="space-y-8 mt-12">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-4xl font-black">

            AI Playlist

          </h2>

          <p className="text-slate-400 mt-2">

            Personalized just for you.

          </p>

        </div>

        <div className="story-card rounded-2xl px-6 py-4">

          <span className="text-green-400 font-semibold">

            ✓ Playlist Ready

          </span>

        </div>

      </div>

      {/* Cards */}

      <div className="grid lg:grid-cols-2 gap-8">

        {songs.map((song, index) => (

          <div
            key={song.id}
            onClick={() => playSong(song, songs)}
            className="story-card rounded-3xl p-6 cursor-pointer hover:scale-[1.02] transition-all duration-300"
          >

            <div className="flex gap-6">

              {/* Album Cover */}

              <img
                src={
                  song.album_cover ||
                  "https://placehold.co/140x140?text=🎵"
                }
                alt={song.title}
                className="w-32 h-32 rounded-2xl object-cover"
              />

              {/* Info */}

              <div className="flex-1">

                <div className="flex justify-between">

                  <div>

                    <h3 className="text-2xl font-bold">

                      {song.title}

                    </h3>

                    <p className="text-slate-400 mt-2">

                      {song.singer}

                    </p>

                  </div>

                  <div className="flex items-center gap-1 text-yellow-400">

                    <Star size={18} fill="currentColor" />

                    <span className="font-semibold">

                      {96 - index}%

                    </span>

                  </div>

                </div>

                <div className="flex gap-3 mt-5 flex-wrap">

                  <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                    {song.mood}
                  </span>

                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {song.genre}
                  </span>

                  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">
                    {song.language}
                  </span>

                </div>

                <p className="text-slate-400 mt-5">

                  Recommended based on your story,
                  detected emotion and music preferences.

                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex gap-4 mt-8">

              <button
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition"
              >

                <Play size={18} />

                Play

              </button>

              <button
                onClick={(e) => favorite(song, e)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-red-600 transition"
              >

                <Heart size={18} />

                Favorite

              </button>

              <button
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
              >

                <Plus size={18} />

                Queue

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}