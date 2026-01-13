import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const services = [
    {
      title: "Website Design",
      description: "Premium, high-converting websites built with modern technologies.",
      icon: "🌐"
    },
    {
      title: "SEO Optimization",
      description: "Rank higher on Google with data-driven SEO strategies.",
      icon: "🔍"
    },
    {
      title: "Digital Marketing",
      description: "Full-funnel marketing campaigns that drive results.",
      icon: "📊"
    },
    {
      title: "Automation",
      description: "Streamline operations with custom automation solutions.",
      icon: "⚡"
    }
  ];

  return (
    <>
      <Hero />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-veltrix-green">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to scale your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-veltrix-yellow">Grow</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            Let's build something amazing together. Get your free consultation today.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-veltrix-red text-white font-semibold rounded-xl hover:scale-105 transition"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
}
