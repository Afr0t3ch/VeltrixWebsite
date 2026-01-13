"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const headlines = [
    "Powering Digital Growth",
    "Websites Built for Scale",
    "SEO That Delivers Results",
    "Ads That Convert"
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">
            Powering Digital Growth
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Websites. SEO. Ads. Automations. Built for Scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-veltrix-green to-veltrix-yellow text-veltrix-dark rounded-lg font-bold text-lg hover:shadow-glow transition-all"
          >
            Get a Quote
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 glass-dark rounded-lg font-bold text-lg hover:border-veltrix-green transition-all"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
