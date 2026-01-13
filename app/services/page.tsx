export default function ServicesPage() {
  const services = [
    {
      title: "Website Design & Development",
      description: "Custom websites built with modern technologies like Next.js, React, and TypeScript. Responsive, fast, and optimized for conversions.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"],
    },
    {
      title: "Hosting & Domain Management",
      description: "Reliable hosting solutions with 99.9% uptime guarantee. Domain registration, DNS management, and SSL certificates included.",
      features: ["24/7 Uptime", "SSL Certificates", "Daily Backups", "CDN Integration"],
    },
    {
      title: "SEO Services",
      description: "Comprehensive SEO strategies to improve your search rankings and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Local SEO"],
    },
    {
      title: "Digital Marketing",
      description: "Full-service digital marketing including social media management, content marketing, and email campaigns.",
      features: ["Social Media", "Content Strategy", "Email Marketing", "Analytics"],
    },
    {
      title: "Google Ads Management",
      description: "Expert Google Ads campaign management to maximize your ROI and reach your target audience effectively.",
      features: ["Campaign Setup", "Keyword Optimization", "A/B Testing", "ROI Tracking"],
    },
    {
      title: "Google My Business",
      description: "Optimize your Google Business Profile to attract more local customers and improve your online visibility.",
      features: ["Profile Optimization", "Review Management", "Post Scheduling", "Insights"],
    },
    {
      title: "Custom Applications",
      description: "Bespoke web and mobile applications tailored to your specific business needs and workflows.",
      features: ["Custom Development", "API Integration", "Database Design", "Cloud Deployment"],
    },
    {
      title: "Business Strategy & Consulting",
      description: "Strategic consulting to align your digital presence with your business goals and drive growth.",
      features: ["Digital Strategy", "Market Analysis", "Competitive Research", "Growth Planning"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Our Services</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive digital solutions to help your business succeed online. From web design to digital marketing, we&apos;ve got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="glass-dark rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text">{service.title}</h2>
            <p className="text-gray-400 mb-6">{service.description}</p>
            <div className="space-y-2">
              <h3 className="font-semibold text-veltrix-green mb-3">Key Features:</h3>
              <ul className="grid grid-cols-2 gap-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <span className="text-veltrix-green mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center glass-dark rounded-xl p-12">
        <h2 className="text-3xl font-bold mb-4">
          <span className="gradient-text">Ready to Get Started?</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Contact us today for a free consultation and let&apos;s discuss how we can help your business grow.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-veltrix-green to-veltrix-yellow text-veltrix-dark rounded-lg font-bold text-lg hover:shadow-glow transition-all"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}
