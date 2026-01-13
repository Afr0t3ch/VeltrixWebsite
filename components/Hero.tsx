"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-veltrix-red via-veltrix-yellow to-veltrix-green bg-clip-text text-transparent">
          Powering Digital Growth
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Websites. SEO. Ads. Automations. Built for Scale.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-veltrix-green text-black font-semibold rounded-xl shadow-glow hover:scale-105 transition"
          >
            Get a Quote
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition"
          >
            View Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
