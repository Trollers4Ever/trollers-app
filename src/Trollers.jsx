import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const dummyVideos = [
  {
    id: 1,
    title: "Epic No-Scope Trolling",
    url: "https://www.example.com/video1",
    votes: 12,
  },
  {
    id: 2,
    title: "Spawn Camp Madness",
    url: "https://www.example.com/video2",
    votes: 20,
  },
  {
    id: 3,
    title: "Fake Friendly Fire",
    url: "https://www.example.com/video3",
    votes: 8,
  },
];

export default function Trollers() {
  const [videos, setVideos] = useState(dummyVideos);

  const voteVideo = (id) => {
    const updated = videos.map((v) =>
      v.id === id ? { ...v, votes: v.votes + 1 } : v
    );
    setVideos(updated);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">TROLLERS</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="bg-gray-900 p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
            <a
              href={video.url}
              target="_blank"
              className="text-blue-400 underline"
            >
              Watch Video
            </a>
            <div className="mt-2">
              <button
                onClick={() => voteVideo(video.id)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-sm font-semibold"
              >
                Vote
              </button>
              <span className="ml-2">Votes: {video.votes}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Top Trolling Videos</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={videos} layout="vertical" margin={{ left: 50 }}>
          <XAxis type="number" allowDecimals={false} />
          <YAxis dataKey="title" type="category" />
          <Tooltip />
          <Bar dataKey="votes" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}