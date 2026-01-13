"use client";
import { useState } from "react";

interface Platform {
  id: string;
  name: string;
  enabled: boolean;
}

export default function SocialControlCenter() {
  const [platforms, setPlatforms] = useState<Platform[]>([
    { id: "facebook", name: "Facebook", enabled: true },
    { id: "instagram", name: "Instagram", enabled: true },
    { id: "linkedin", name: "LinkedIn", enabled: true },
    { id: "twitter", name: "Twitter/X", enabled: false },
    { id: "tiktok", name: "TikTok", enabled: false },
    { id: "google", name: "Google Business", enabled: true },
  ]);

  const [postContent, setPostContent] = useState({
    text: "",
    hashtags: "",
    media: null as File | null,
    scheduleDate: "",
  });

  const [status, setStatus] = useState("");

  const togglePlatform = (id: string) => {
    setPlatforms(
      platforms.map((p) => (p.id === id ? { ...p, enabled: !p.enabled } : p))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("publishing");

    const selectedPlatforms = platforms
      .filter((p) => p.enabled)
      .map((p) => p.id);

    try {
      const response = await fetch("/api/social", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: postContent.text,
          hashtags: postContent.hashtags,
          platforms: selectedPlatforms,
          scheduleDate: postContent.scheduleDate || null,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setPostContent({
          text: "",
          hashtags: "",
          media: null,
          scheduleDate: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="glass-dark rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 gradient-text">
          Social Media Control Center
        </h2>
        <p className="text-gray-400 mb-8">
          Create one post and publish it across all your social media platforms
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Platform Selection */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Select Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  type="button"
                  onClick={() => togglePlatform(platform.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    platform.enabled
                      ? "border-veltrix-green bg-veltrix-green/20 text-veltrix-green"
                      : "border-white/20 bg-black/30 text-gray-400"
                  }`}
                >
                  <div className="font-semibold">{platform.name}</div>
                  <div className="text-sm">
                    {platform.enabled ? "✓ Enabled" : "Disabled"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-lg font-semibold mb-3">
              Post Content *
            </label>
            <textarea
              id="content"
              required
              rows={6}
              value={postContent.text}
              onChange={(e) =>
                setPostContent({ ...postContent, text: e.target.value })
              }
              placeholder="What would you like to share?"
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-veltrix-green transition-colors resize-none"
            ></textarea>
          </div>

          {/* Hashtags */}
          <div>
            <label htmlFor="hashtags" className="block text-lg font-semibold mb-3">
              Hashtags
            </label>
            <input
              type="text"
              id="hashtags"
              value={postContent.hashtags}
              onChange={(e) =>
                setPostContent({ ...postContent, hashtags: e.target.value })
              }
              placeholder="#digital #marketing #veltrix"
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-veltrix-green transition-colors"
            />
          </div>

          {/* Schedule */}
          <div>
            <label
              htmlFor="schedule"
              className="block text-lg font-semibold mb-3"
            >
              Schedule Post (Optional)
            </label>
            <input
              type="datetime-local"
              id="schedule"
              value={postContent.scheduleDate}
              onChange={(e) =>
                setPostContent({ ...postContent, scheduleDate: e.target.value })
              }
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-veltrix-green transition-colors"
            />
          </div>

          {/* Media Upload */}
          <div>
            <label htmlFor="media" className="block text-lg font-semibold mb-3">
              Media (Optional)
            </label>
            <input
              type="file"
              id="media"
              accept="image/*,video/*"
              onChange={(e) =>
                setPostContent({
                  ...postContent,
                  media: e.target.files?.[0] || null,
                })
              }
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-veltrix-green transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-veltrix-green/20 file:text-veltrix-green hover:file:bg-veltrix-green/30"
            />
            <p className="text-sm text-gray-500 mt-2">
              Supports images and videos
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={status === "publishing"}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-veltrix-green to-veltrix-yellow text-veltrix-dark rounded-lg font-bold text-lg hover:shadow-glow transition-all disabled:opacity-50"
            >
              {status === "publishing"
                ? "Publishing..."
                : postContent.scheduleDate
                ? "Schedule Post"
                : "Publish Now"}
            </button>
          </div>

          {status === "success" && (
            <div className="p-4 bg-veltrix-green/20 border border-veltrix-green rounded-lg text-veltrix-green text-center">
              Post {postContent.scheduleDate ? "scheduled" : "published"}{" "}
              successfully!
            </div>
          )}
          {status === "error" && (
            <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-center">
              Failed to publish post. Please try again.
            </div>
          )}
        </form>
      </div>

      {/* Analytics Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-dark rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2 text-veltrix-green">
            Total Posts
          </h3>
          <p className="text-4xl font-bold">127</p>
        </div>
        <div className="glass-dark rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2 text-veltrix-yellow">
            Total Reach
          </h3>
          <p className="text-4xl font-bold">45.2K</p>
        </div>
        <div className="glass-dark rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2 text-veltrix-red">
            Engagement Rate
          </h3>
          <p className="text-4xl font-bold">8.5%</p>
        </div>
      </div>
    </div>
  );
}
