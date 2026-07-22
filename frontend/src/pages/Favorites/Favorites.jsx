import { useEffect, useState } from "react";
import { Heart, Trash2, Play } from "lucide-react";

import { getFavorites, removeFavorite } from "../../services/favorites";
import { useMusic } from "../../context/MusicContext";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const { playSong } = useMusic();

  async function loadFavorites() {
    try {
      const data = await getFavorites();
      setFavorites(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleRemove(songId) {
    try {
      await removeFavorite(songId);

      setFavorites((prev) =>
        prev.filter((item) => item.song.id !== songId)
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-white mt-20">
        Loading favorites...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          ❤️ Favorite Songs
        </h1>

        <p className="text-gray-400 mt-2">
          All your saved songs in one place.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="bg-slate-900 rounded-2xl p-10 text-center text-gray-400">
          No favorite songs yet.
        </div>
      ) : (
        <div className="grid gap-5">

          {favorites.map((favorite) => (
            <div
              key={favorite.id}
              className="bg-slate-900 rounded-2xl p-5 flex items-center justify-between"
            >

              <div className="flex items-center gap-5">

                <img
                  src={
                    favorite.song.album_cover ||
                    "https://placehold.co/80x80?text=🎵"
                  }
                  alt={favorite.song.title}
                  className="w-16 h-16 rounded-xl object-cover"
                />

                <div>

                  <h2 className="text-xl font-semibold">
                    {favorite.song.title}
                  </h2>

                  <p className="text-gray-400">
                    {favorite.song.singer}
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <button
                  onClick={() => playSong(favorite.song)}
                  className="bg-purple-600 hover:bg-purple-700 p-3 rounded-xl"
                >
                  <Play size={20} />
                </button>

                <button
                  onClick={() => handleRemove(favorite.song.id)}
                  className="bg-red-600 hover:bg-red-700 p-3 rounded-xl"
                >
                  <Trash2 size={20} />
                </button>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}