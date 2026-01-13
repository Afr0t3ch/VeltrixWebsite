"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Link
        href="/contact"
        className="block px-6 py-4 bg-veltrix-green text-black font-semibold rounded-xl shadow-glow hover:scale-105 transition"
      >
        Get a Quote
      </Link>
    </div>
  );
}
