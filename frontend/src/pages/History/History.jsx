import { useEffect, useState } from "react";

import Card from "../../components/ui/Card";
import { getHistory } from "../../services/history";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function loadHistory() {
      try {
        const data = await getHistory();
        setHistory(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadHistory();
  }, []);

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          🎵 Listening History
        </h1>

        <p className="text-gray-400 mt-2">
          Songs you have listened to recently.
        </p>
      </div>

      {history.length === 0 ? (
        <Card>
          <p className="text-center text-gray-400">
            No listening history found.
          </p>
        </Card>
      ) : (
        history.map((item) => (
          <Card key={item.id}>
            <h2 className="text-xl font-semibold">
              {item.song.title}
            </h2>

            <p className="text-gray-400">
              {item.song.singer}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              {new Date(item.listened_at).toLocaleString()}
            </p>
          </Card>
        ))
      )}

    </div>
  );
}