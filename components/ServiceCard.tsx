"use client";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-glow transition-all"
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-veltrix-green">{title}</h3>
      <p className="mt-3 text-gray-400">{description}</p>
    </motion.div>
  );
}
