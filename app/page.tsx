import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const services = [
    {
      title: "Website Design",
      description: "Modern, responsive websites built with the latest technologies to engage your audience and drive conversions.",
    },
    {
      title: "SEO Services",
      description: "Strategic SEO that gets you discovered by the right customers at the right time.",
    },
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns across Google Ads, social media, and more to maximize your ROI.",
    },
    {
      title: "Hosting & Domains",
      description: "Reliable hosting solutions and domain management to keep your business online 24/7.",
    },
    {
      title: "Automation",
      description: "Smart automation workflows that save time and improve efficiency across your business.",
    },
    {
      title: "Business Strategy",
      description: "Strategic consulting to align your digital presence with your business goals.",
    },
  ];

  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to help your business thrive online
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">How We Help Your Brand Grow</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-6xl font-bold gradient-text mb-4">1</div>
              <h3 className="text-2xl font-bold mb-4">Analyze</h3>
              <p className="text-gray-400">
                We audit your current digital footprint and competitor space.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-6xl font-bold gradient-text mb-4">2</div>
              <h3 className="text-2xl font-bold mb-4">Strategize</h3>
              <p className="text-gray-400">
                We craft a personalized SEO & Ad strategy based on your goals.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-6xl font-bold gradient-text mb-4">3</div>
              <h3 className="text-2xl font-bold mb-4">Execute</h3>
              <p className="text-gray-400">
                We launch, monitor, and optimize your campaigns for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Ready to Grow Your Business?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the Veltrix difference. Let us show you what we can do for your business!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-veltrix-green to-veltrix-yellow text-veltrix-dark rounded-lg font-bold text-lg hover:shadow-glow transition-all"
          >
            Start Chat
          </a>
        </div>
      </section>
    </div>
  );
}
