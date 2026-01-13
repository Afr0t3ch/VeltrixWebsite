"use client";
import { useState } from "react";

export default function SocialControlCenter() {
  const [content, setContent] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [media, setMedia] = useState<File | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [message, setMessage] = useState("");

  const publish = async () => {
    setIsPublishing(true);
    setMessage("");

    try {
      const response = await fetch("/api/social", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, hashtags }),
      });

      const data = await response.json();
      setMessage(data.message);
      
      if (response.ok) {
        setContent("");
        setHashtags("");
      }
    } catch (error) {
      setMessage("Error publishing post");
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-glass">
      <h2 className="text-2xl font-bold text-veltrix-yellow mb-4">
        Social Media Control Center
      </h2>
      <p className="text-gray-400 mb-6">
        Write once. Publish everywhere (Facebook, Instagram, LinkedIn, X, TikTok, Google Business).
      </p>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write once. Publish everywhere."
        className="w-full mt-4 p-4 bg-black/40 rounded-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-veltrix-green transition"
        rows={6}
      />

      <input
        type="text"
        value={hashtags}
        onChange={(e) => setHashtags(e.target.value)}
        placeholder="Hashtags (comma-separated)"
        className="w-full mt-4 p-4 bg-black/40 rounded-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-veltrix-green transition"
      />

      <div className="mt-4 p-4 bg-black/40 rounded-xl border border-white/10">
        <label className="block text-sm text-gray-400 mb-2">Media (Image/Video)</label>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setMedia(e.target.files?.[0] || null)}
          className="text-gray-400 text-sm"
        />
      </div>

      <button
        onClick={publish}
        disabled={!content || isPublishing}
        className="mt-4 px-6 py-3 bg-veltrix-green text-black font-semibold rounded-xl hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPublishing ? "Publishing..." : "Publish to All Platforms"}
      </button>

      {message && (
        <div className="mt-4 p-4 bg-veltrix-green/20 border border-veltrix-green rounded-lg text-veltrix-green">
          {message}
        </div>
      )}
    </div>
  );
}
