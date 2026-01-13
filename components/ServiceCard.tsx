"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass-dark rounded-xl p-6 hover:shadow-glow transition-all cursor-pointer"
    >
      {icon && (
        <div className="text-4xl mb-4 gradient-text">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold mb-3 gradient-text">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
