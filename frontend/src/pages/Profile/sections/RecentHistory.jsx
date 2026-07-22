import {
  Play,
  Heart,
  Clock3,
} from "lucide-react";

const recentSongs = [
  {
    id: 1,
    title: "Tum Hi Ho",
    singer: "Arijit Singh",
    time: "2 hours ago",
    cover: "https://placehold.co/80x80?text=🎵",
  },
  {
    id: 2,
    title: "Believer",
    singer: "Imagine Dragons",
    time: "Yesterday",
    cover: "https://placehold.co/80x80?text=🎵",
  },
  {
    id: 3,
    title: "Perfect",
    singer: "Ed Sheeran",
    time: "2 days ago",
    cover: "https://placehold.co/80x80?text=🎵",
  },
];

export default function RecentHistory() {
  return (
    <section className="story-card rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        🕒 Recently Played
      </h2>

      <div className="space-y-5">

        {recentSongs.map((song) => (

          <div
            key={song.id}
            className="flex items-center justify-between bg-slate-900 rounded-2xl p-4 hover:bg-slate-800 transition"
          >

            <div className="flex items-center gap-5">

              <img
                src={song.cover}
                alt={song.title}
                className="w-16 h-16 rounded-xl object-cover"
              />

              <div>

                <h3 className="font-semibold text-lg">
                  {song.title}
                </h3>

                <p className="text-slate-400">
                  {song.singer}
                </p>

                <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">

                  <Clock3 size={14} />

                  {song.time}

                </div>

              </div>

            </div>

            <div className="flex gap-3">

              <button className="p-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition">

                <Play size={18} />

              </button>

              <button className="p-3 rounded-xl bg-slate-800 hover:bg-red-600 transition">

                <Heart size={18} />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}