import {
  House,
  Music2,
  Heart,
  History,
  Settings,
  ListMusic,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menus = [
    {
      title: "Home",
      icon: <House size={20} />,
      path: "/dashboard",
    },
    {
      title: "Profile",
      icon: <User size={20} />,
      path: "/profile",
    },
    {
      title: "Favorites",
      icon: <Heart size={20} />,
      path: "/favorites",
    },
    {
      title: "Discover",
      icon: <Music2 size={20} />,
      path: "/discover",
    },
    {
      title: "Playlists",
      icon: <ListMusic size={20} />,
      path: "/playlists",
    },
    {
      title: "History",
      icon: <History size={20} />,
      path: "/history",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/settings",
    },
  ];

  return (
    <aside className="w-72 bg-slate-950 border-r border-slate-800 h-screen sticky top-0 flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-slate-800">

        <h1 className="text-4xl font-black gradient-text">
          🎵 StoryTunes
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          AI-Powered Music Companion
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-6 space-y-3">

        {menus.map((menu) => (

          <NavLink
            key={menu.title}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg"
                  : "hover:bg-slate-900 hover:translate-x-1"
              }`
            }
          >
            {menu.icon}

            <span className="font-medium">
              {menu.title}
            </span>

          </NavLink>

        ))}

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-800 p-6">

        <div className="story-card rounded-2xl p-4">

          <h3 className="font-semibold">
            StoryTunes AI
          </h3>

          <p className="text-slate-400 text-sm mt-2">
            AI Recommendation Engine
          </p>

          <div className="mt-4 flex items-center gap-2">

            <span className="w-3 h-3 rounded-full bg-green-500"></span>

            <span className="text-green-400 text-sm">
              Online
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}