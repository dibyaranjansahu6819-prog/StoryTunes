import { Bell, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { logoutUser } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logoutUser();

    navigate("/login", {
      replace: true,
    });
  }

  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex justify-between items-center px-8">

      <div className="flex items-center gap-3">

        <Search size={20} />

        <input
          type="text"
          placeholder="Search songs..."
          className="bg-slate-800 rounded-lg px-4 py-2 outline-none w-72"
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell size={22} />

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </header>
  );
}