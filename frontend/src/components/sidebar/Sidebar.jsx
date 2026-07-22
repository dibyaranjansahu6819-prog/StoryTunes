import {
  House,
  BookOpen,
  Music2,
  Sparkles,
  Users,
  UserCircle,
  Settings,
} from "lucide-react";

const menu = [
  { icon: House, label: "Dashboard" },
  { icon: BookOpen, label: "Stories" },
  { icon: Sparkles, label: "AI Recommend" },
  { icon: Music2, label: "Playlists" },
  { icon: Users, label: "Rooms" },
  { icon: UserCircle, label: "Profile" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6">
      <nav className="space-y-2">
        {menu.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-purple-600 transition text-left"
          >
            <item.icon size={20} />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}