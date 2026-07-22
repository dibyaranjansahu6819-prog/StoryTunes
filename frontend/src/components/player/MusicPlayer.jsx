import ReactPlayer from "react-player";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Repeat,
  Shuffle,
  ListMusic,
  Music4,
} from "lucide-react";

import { useState } from "react";
import { useMusic } from "../../context/MusicContext";

export default function MusicPlayer() {
  const {
    currentSong,
    playing,
    volume,

    setPlaying,
    setVolume,

    nextSong,
    previousSong,
  } = useMusic();

  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  function formatTime(sec) {
    if (!sec) return "0:00";

    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/90 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="grid lg:grid-cols-3 gap-6 items-center">

          {/* Song */}

          <div className="flex items-center gap-5">

            <img
              src={
                currentSong?.album_cover ||
                "https://placehold.co/80x80?text=🎵"
              }
              alt=""
              className={`w-20 h-20 rounded-2xl object-cover shadow-lg
              ${playing ? "animate-pulse" : ""}`}
            />

            <div>

              <h2 className="text-lg font-bold">

                {currentSong?.title || "No Song Selected"}

              </h2>

              <p className="text-slate-400">

                {currentSong?.singer || "-"}

              </p>

            </div>

          </div>

          {/* Controls */}

          <div>

            <div className="flex justify-center gap-6 items-center mb-4">

              <button className="hover:text-purple-400 transition">
                <Shuffle size={20} />
              </button>

              <button onClick={previousSong}>
                <SkipBack size={28} />
              </button>

              <button
                onClick={() => setPlaying(!playing)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-4 hover:scale-110 transition"
              >
                {playing ? (
                  <Pause size={24} />
                ) : (
                  <Play size={24} />
                )}
              </button>

              <button onClick={nextSong}>
                <SkipForward size={28} />
              </button>

              <button className="hover:text-purple-400 transition">
                <Repeat size={20} />
              </button>

            </div>

            {/* Progress */}

            <div className="flex items-center gap-3">

              <span className="text-xs text-slate-400 w-10">

                {formatTime(played * duration)}

              </span>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={played}
                readOnly
                className="flex-1 accent-purple-500"
              />

              <span className="text-xs text-slate-400 w-10">

                {formatTime(duration)}

              </span>

            </div>

          </div>

          {/* Volume */}

          <div className="flex justify-end items-center gap-4">

            <ListMusic />

            <Volume2 />

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) =>
                setVolume(Number(e.target.value))
              }
              className="w-32 accent-purple-500"
            />

          </div>

        </div>

      </div>

      {currentSong && (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${currentSong.youtube_video_id}`}
          playing={playing}
          volume={volume}
          controls={false}
          width="0"
          height="0"

          onProgress={({ played }) =>
            setPlayed(played)
          }

          onDuration={(d) =>
            setDuration(d)
          }

          onEnded={nextSong}
        />
      )}
    </footer>
  );
}