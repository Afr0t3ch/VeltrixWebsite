"use client";
import Link from "next/link";
import { useState } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-float">
      <div className="relative glass-dark rounded-full p-4 shadow-glow">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-xs font-bold hover:bg-red-600 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>
        <Link 
          href="/contact"
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-veltrix-green to-veltrix-yellow rounded-full text-veltrix-dark font-bold hover:shadow-glow transition-all"
        >
          <span>Get a Quote</span>
          <span className="text-2xl">→</span>
        </Link>
      </div>
    </div>
  );
}
