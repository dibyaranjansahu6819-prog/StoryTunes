import { useState } from "react";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const [notifications, setNotifications] = useState(true);

  function handleSave() {
    alert("Settings saved successfully!");
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          ⚙️ Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Customize your StoryTunes experience.
        </p>
      </div>

      <Card>

        <h2 className="text-2xl font-semibold mb-6">
          Preferences
        </h2>

        <div className="space-y-6">

          <div className="flex justify-between items-center">
            <span>🌙 Dark Mode</span>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>

          <div className="flex justify-between items-center">
            <span>▶️ Auto Play Next Song</span>

            <input
              type="checkbox"
              checked={autoplay}
              onChange={() => setAutoplay(!autoplay)}
            />
          </div>

          <div className="flex justify-between items-center">
            <span>🔔 Notifications</span>

            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>

        </div>

      </Card>

      <Card>

        <h2 className="text-2xl font-semibold mb-6">
          Account
        </h2>

        <div className="space-y-4">

          <button
            className="w-full bg-slate-800 hover:bg-slate-700 rounded-xl py-3"
          >
            Change Password
          </button>

          <button
            className="w-full bg-slate-800 hover:bg-slate-700 rounded-xl py-3"
          >
            Export Recommendation History
          </button>

          <button
            className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-3"
          >
            Delete Account
          </button>

        </div>

      </Card>

      <Button
        className="w-full"
        onClick={handleSave}
      >
        Save Settings
      </Button>

    </div>
  );
}