"use client";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "🛒",
      technologies: ["Next.js", "Stripe", "Tailwind CSS"],
      description: "Modern e-commerce solution with real-time inventory management"
    },
    {
      title: "Healthcare App",
      category: "Custom Application",
      image: "🏥",
      technologies: ["React", "Node.js", "PostgreSQL"],
      description: "Patient management system with appointment scheduling"
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing",
      image: "📱",
      technologies: ["Google Ads", "Facebook Ads", "Analytics"],
      description: "300% ROI increase through targeted ad campaigns"
    },
    {
      title: "SEO Success Story",
      category: "SEO",
      image: "📈",
      technologies: ["SEO", "Content Marketing", "Link Building"],
      description: "First page rankings for 50+ competitive keywords"
    },
    {
      title: "Restaurant Website",
      category: "Web Design",
      image: "🍽️",
      technologies: ["WordPress", "WooCommerce", "Custom Theme"],
      description: "Beautiful, mobile-first website with online ordering"
    },
    {
      title: "Automation Suite",
      category: "Automation",
      image: "⚡",
      technologies: ["Zapier", "Python", "APIs"],
      description: "Saved 20+ hours/week through business automation"
    }
  ];

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-veltrix-yellow">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results for real businesses. See how we&apos;ve helped our clients succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-6 hover:shadow-glow transition-all"
            >
              <div className="text-6xl mb-4 text-center">{project.image}</div>
              <div className="text-sm text-veltrix-green mb-2">{project.category}</div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to be our next success story?</h2>
          <p className="text-gray-400 mb-8">Let&apos;s create something amazing together.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-veltrix-red text-white font-semibold rounded-xl hover:scale-105 transition"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
