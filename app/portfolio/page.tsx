export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration and inventory management",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      category: "Web Development",
    },
    {
      title: "Restaurant Website",
      description: "Modern website with online ordering and reservation system",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Web Development",
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search and filtering",
      technologies: ["Next.js", "TypeScript", "Supabase"],
      category: "Web Development",
    },
    {
      title: "Local SEO Campaign",
      description: "Increased local visibility by 250% and tripled organic traffic",
      technologies: ["Google My Business", "Local SEO", "Content Strategy"],
      category: "SEO",
    },
    {
      title: "Google Ads Campaign",
      description: "Achieved 400% ROI for a B2B service company",
      technologies: ["Google Ads", "Analytics", "Conversion Tracking"],
      category: "Digital Marketing",
    },
    {
      title: "Social Media Management",
      description: "Grew follower base by 500% and increased engagement by 300%",
      technologies: ["Facebook", "Instagram", "LinkedIn"],
      category: "Social Media",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Our Portfolio</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Explore our successful projects and see how we've helped businesses achieve their digital goals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-dark rounded-xl p-6 hover:shadow-glow transition-all cursor-pointer">
            <div className="mb-4">
              <span className="text-sm text-veltrix-green font-semibold">{project.category}</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 gradient-text">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-300">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-veltrix-green/20 text-veltrix-green rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center glass-dark rounded-xl p-12">
        <h2 className="text-3xl font-bold mb-4">
          <span className="gradient-text">Want to See Your Project Here?</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Let's work together to create something amazing. Contact us today to discuss your project.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-veltrix-green to-veltrix-yellow text-veltrix-dark rounded-lg font-bold text-lg hover:shadow-glow transition-all"
        >
          Start Your Project
        </a>
      </div>
    </div>
  );
}
