import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/layout/Sidebar";
import MusicPlayer from "../components/player/MusicPlayer";

export default function MainLayout({ children }) {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="flex-1 p-8 overflow-y-auto pb-32">
          {children}
        </main>

      </div>

      <MusicPlayer />

    </div>
  );
}