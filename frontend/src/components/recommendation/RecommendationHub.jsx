import { useState } from "react";

import {
  BrainCircuit,
  FileText,
  Sparkles,
  Smile,
  Music4,
  Mic2,
  Globe2,
} from "lucide-react";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

import RecommendationResults from "./RecommendationResults";

import { generateRecommendation } from "../../services/recommendation";

const modes = [
  {
    key: "prompt",
    title: "Quick Prompt",
    icon: <Sparkles size={22} />,
  },
  {
    key: "story",
    title: "Story",
    icon: <FileText size={22} />,
  },
  {
    key: "emotion",
    title: "Emotion",
    icon: <Smile size={22} />,
  },
  {
    key: "genre",
    title: "Genre",
    icon: <Music4 size={22} />,
  },
  {
    key: "singer",
    title: "Singer",
    icon: <Mic2 size={22} />,
  },
  {
    key: "language",
    title: "Language",
    icon: <Globe2 size={22} />,
  },
];

const promptSuggestions = [
  "Breakup",
  "Love",
  "Gym",
  "Study",
  "Road Trip",
  "Sleep",
  "Rain",
  "Party",
];

export default function RecommendationHub() {
  const [mode, setMode] = useState("prompt");

  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");

  const [songs, setSongs] = useState([]);

  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);

    try {
      const payload = {
        mode,
      };

      if (mode === "prompt") payload.prompt = prompt;

      if (mode === "story") payload.story = story;

      const data = await generateRecommendation(payload);

      setSongs(data);

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div className="space-y-8">

      <Card>

        <div className="flex items-center gap-3 mb-8">

          <BrainCircuit
            size={32}
            className="text-purple-400"
          />

          <div>

            <h2 className="text-3xl font-bold">
              AI Studio
            </h2>

            <p className="text-slate-400">
              Tell StoryTunes how you'd like to discover music.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-4">

          {modes.map((item) => (

            <button
              key={item.key}
              onClick={() => setMode(item.key)}
              className={`rounded-2xl p-5 border transition-all
              ${
                mode === item.key
                  ? "border-purple-500 bg-purple-600/20"
                  : "border-slate-700 hover:border-purple-400"
              }`}
            >

              <div className="flex items-center gap-3">

                {item.icon}

                <span className="font-semibold">

                  {item.title}

                </span>

              </div>

            </button>

          ))}

        </div>

      </Card>

      {mode === "prompt" && (

        <Card>

          <h3 className="text-2xl font-semibold mb-5">
            Enter a Prompt
          </h3>

          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Breakup, Love, Gym..."
          />

          <div className="flex flex-wrap gap-3 mt-6">

            {promptSuggestions.map((item) => (

              <button
                key={item}
                onClick={() => setPrompt(item)}
                className="px-4 py-2 rounded-full bg-slate-800 hover:bg-purple-600 transition"
              >
                {item}
              </button>

            ))}

          </div>

        </Card>

      )}

      {mode === "story" && (

        <Card>

          <h3 className="text-2xl font-semibold mb-5">
            Tell Your Story
          </h3>

          <Textarea
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder="Describe your thoughts, feelings or experience..."
          />

        </Card>

      )}

      <Card>

        <h3 className="text-xl font-semibold mb-5">
          AI Will Analyze
        </h3>

        <div className="grid md:grid-cols-4 gap-4">

          <div className="story-card p-5 text-center">
            😊 Emotion
          </div>

          <div className="story-card p-5 text-center">
            🌍 Language
          </div>

          <div className="story-card p-5 text-center">
            🧠 Keywords
          </div>

          <div className="story-card p-5 text-center">
            🎵 Music Taste
          </div>

        </div>

      </Card>

      <Button
        className="w-full text-lg"
        onClick={handleGenerate}
      >
        {loading
          ? "🤖 AI is Building Your Playlist..."
          : "🎵 Generate Playlist"}
      </Button>

      <RecommendationResults songs={songs} />

    </div>
  );
}