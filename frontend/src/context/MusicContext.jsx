import { createContext, useContext, useState } from "react";

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);

  const currentSong =
    currentIndex >= 0 ? playlist[currentIndex] : null;

  function playSong(song, songs = playlist) {
    const index = songs.findIndex((s) => s.id === song.id);

    setPlaylist(songs);
    setCurrentIndex(index);
    setPlaying(true);
  }

  function nextSong() {
    if (playlist.length === 0) return;

    setCurrentIndex((prev) =>
      (prev + 1) % playlist.length
    );
  }

  function previousSong() {
    if (playlist.length === 0) return;

    setCurrentIndex((prev) =>
      prev === 0
        ? playlist.length - 1
        : prev - 1
    );
  }

  return (
    <MusicContext.Provider
      value={{
        playlist,
        currentSong,
        currentIndex,
        playing,
        volume,

        setPlaying,
        setVolume,

        playSong,
        nextSong,
        previousSong,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}