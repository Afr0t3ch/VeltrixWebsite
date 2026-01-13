import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services | Veltrix Digital",
  description: "Comprehensive digital services including web design, SEO, ads, and automation"
};

export default function ServicesPage() {
  const services = [
    {
      title: "Website Design & Development",
      description: "Custom, responsive websites built with cutting-edge technologies. From landing pages to complex web applications.",
      icon: "🌐"
    },
    {
      title: "Hosting & Domains",
      description: "Reliable, secure hosting solutions and domain management. Keep your site fast and available 24/7.",
      icon: "🖥️"
    },
    {
      title: "SEO Optimization",
      description: "Data-driven SEO strategies to improve your search rankings and organic traffic.",
      icon: "🔍"
    },
    {
      title: "Digital Marketing",
      description: "Full-funnel marketing campaigns across all channels. From awareness to conversion.",
      icon: "📊"
    },
    {
      title: "Google Ads Management",
      description: "Expert PPC campaign management for maximum ROI. Drive qualified traffic instantly.",
      icon: "🎯"
    },
    {
      title: "Google My Business",
      description: "Optimize your local presence. Get found by customers searching in your area.",
      icon: "📍"
    },
    {
      title: "Custom Applications",
      description: "Bespoke software solutions tailored to your business needs. SaaS, CRM, and more.",
      icon: "⚙️"
    },
    {
      title: "Business Strategy",
      description: "Digital transformation consulting. Strategy, automation, and growth planning.",
      icon: "💡"
    }
  ];

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-veltrix-green">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end digital solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-gray-400 mb-8">Let's discuss your goals and create a custom solution.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-veltrix-green text-black font-semibold rounded-xl hover:scale-105 transition"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
